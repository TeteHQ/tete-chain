import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { prettyError } from "./contract";

const providerOptions = {
    binancechainwallet: {
        package: true,
    },
    walletconnect: {
        package: WalletConnect,
        options: { infuraId: "9f85cc9583054d398925474ec0c8ed19" },
    },
};

const web3Modal = (chain = 1666700000) => {
    return new Web3Modal({
        chainId: chain,
        theme: "dark",
        cacheProvider: true,
        disableInjectedProvider: false,
        providerOptions,
    });
};

const getProvider = async () => {
    const instance = await web3Modal().connect();
    return new ethers.providers.Web3Provider(instance);
};

const connectWallet = async (callback, snackbar) => {
    return getProvider()
        .then(async (provider) => {
            const account = await provider.listAccounts();
            localStorage.setItem("connected", Date.now());
            const msg = callback(account[0]);
            if (msg) {
                snackbar({ description: msg, status: "warning" });
            }
            return account[0];
        })
        .catch((err) =>
            snackbar({
                description: prettyError(err, "Could not connect to wallet"),
                status: "error",
            })
        );
};

const disconnectWallet = async (callback, snackbar) => {
    await web3Modal().clearCachedProvider();
    localStorage.removeItem("connected");
    const description = callback(false);
    if (description) {
        snackbar({ description, status: "warning" });
    }
};

const toggleWallet = async (callback, snackbar = () => true) => {
    if (localStorage.getItem("connected")) {
        return await disconnectWallet(callback, snackbar);
    } else {
        return await connectWallet(callback, snackbar);
    }
};

export {
    web3Modal,
    disconnectWallet,
    connectWallet,
    toggleWallet,
    getProvider,
};
