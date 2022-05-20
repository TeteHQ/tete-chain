import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import { ethers, utils } from "ethers";

import { tete_addr, tete_abi } from "./const";

/**
 * Web3Modal provider options
 */
const providerOptions = {
    binancechainwallet: {
        package: true,
    },
    walletconnect: {
        package: WalletConnect,
        options: { infuraId: "9f85cc9583054d398925474ec0c8ed19" },
    },
};

/**
 *
 * @param {number} chainId
 * @param {"dark" | "light"} theme
 * @returns
 */
export const web3Modal = (chainId = 97, theme = "dark") => {
    return new Web3Modal({
        theme,
        chainId,
        cacheProvider: true,
        disableInjectedProvider: false,
        providerOptions,
    });
};

/**
 * provider instance connector
 */
export const provider = {
    /// provider configs
    rpcNode: null,
    chainId: null,
    instance: null,
    contracts: {},

    async connect(chainId) {
        if (!this.instance) {
            this.instance = await web3Modal(chainId).connect();
        }
        return this.instance;
    },

    async disconnect() {
        web3Modal().clearCachedProvider();
        this.instance = null;
    },

    async ethers(chainId) {
        return await this.connect(chainId).then(
            (instance) => new ethers.providers.Web3Provider(instance)
        );
    },

    async contract(addr = tete_addr, abi = tete_abi, sync = false) {
        if (!this.contracts[addr])
            this.contracts[addr] = contract(
                addr,
                abi,
                !sync
                    ? await this.ethers(this.chainId)
                    : this.ethersSync(this.rpcNode)
            );
        return this.contracts[addr];
    },

    /**
     * Gets a readable provider instance
     *
     * @param {string|null} rpcNode
     * @returns
     */
    ethersSync(rpcNode = null) {
        return new ethers.providers.JsonRpcProvider(rpcNode);
    },

    clearCachedProvider() {
        web3Modal().clearCachedProvider();
    },
};

/**
 *
 * @param {string} addr
 * @param {Record<string, unknown>} abi
 * @param {ethers.providers.BaseProvider} provider
 * @returns {{[method: string]: (...args: any[]) => Promise<unknown>}}
 */
function contract(addr, abi, provider) {
    if (!provider || typeof addr !== "string" || !abi?.length) return false;
    if (typeof abi[0] === "string") {
        const iface = new utils.Interface(abi);
        abi = iface.format(utils.FormatTypes.json);
    }
    const instance = new ethers.Contract(addr, abi, provider);
    const methods = {};
    for (let method of abi.map()) {
        methods[method.name] = () => {
            const args = [];
            method?.inputs.forEach((input, index) => {
                input.value = arguments[index];
                switch (input?.type.match(/([a-z]+)/)[1]) {
                    case "address":
                        args.push(utils.getAddress(input.value));
                        break;
                    case "uint":
                        args.push(ethers.BigNumber.from(input.value));
                        break;
                    case "bytes":
                        args.push(utils.toUtf8Bytes(input.value));
                        break;
                    default:
                        args.push(input.value);
                }
            });
            return new Promise((resolve, reject) => {
                instance[method.name](...args)
                    .then((response) => {
                        const result = [];
                        method?.outputs.forEach((output, index) => {
                            output.value = response[index];
                            switch (output?.type.match(/([a-z]+)/)[1]) {
                                case "uint":
                                    args.push(
                                        utils.formatUnits(
                                            output.value.toString(),
                                            "ether"
                                        )
                                    );
                                    break;
                                case "bytes":
                                    args.push(utils.toUtf8String(output.value));
                                    break;
                                default:
                                    args.push(output.value);
                            }
                        });
                        resolve([...response, ...result]);
                    })
                    .catch(reject);
            });
        };
    }
    return methods;
}
