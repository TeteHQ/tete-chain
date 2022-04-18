import { ethers, utils } from "ethers";

import { tete_abi, tete_addr } from "./const";
import { getProvider } from "./connect";

const provider = new ethers.providers.JsonRpcProvider(
    "https://api.s0.b.hmny.io"
);

/**
 * Prettify error reports
 *
 * @param {Error} error
 * @returns
 */
export function prettyError(error, defaultMsg = "Oops! Something went wrong!") {
    // only error objects are processed
    if (typeof error !== "object") {
        defaultMsg = error || defaultMsg;
    } else {
        // retrieve the error log
        const { message, data = {} } = error;
        defaultMsg = data.message || message;
    }

    return defaultMsg.replace(/(\(\[).+/g, "").replace(/[\w\s]+:/, "");
}

/**
 * Sums up the total amount of tokens in the given array of tokens.
 *
 * @param {number[]} arr
 * @returns
 */
export function asum(arr) {
    return typeof arr === "object" && arr.length
        ? arr.reduce((a, b) => a + b, 0)
        : 0;
}

/**
 * Updates a react state
 *
 * @param {string} state
 * @param {string|boolean|ethers.BigNumber} update
 */
export function updateState(state, update) {
    if (typeof update !== "string" || typeof update !== "boolean") {
        update = convert(update, state.indexOf("num") > -1 ? "wei" : "ether");
    }
    this.setState({ [state]: update });
}

/**
 * Convert ether to wei or vice versa
 *
 * @param {ethers.BigNumber} bigNumber
 * @param {string in ["ether", "wei", "gwei"]} unit
 * @returns
 */
export function convert(bigNumber, unit = "ether") {
    if (typeof bigNumber !== "object") return bigNumber;
    return utils.formatUnits(bigNumber.toString(), unit);
}

export function convertObject(obj, keys) {
    const result = {};
    for (let val of keys) {
        if (val in obj && !["string", "boolean"].includes(typeof obj[val])) {
            result[val] = convert(obj[val]);
        } else {
            result[val] = obj[val];
        }
    }
    return result;
}

export function getContractSync(provider) {
    return new ethers.Contract(tete_addr, tete_abi, provider);
}

export const contract = getContractSync(provider);

export async function getContract() {
    return new ethers.Contract(
        tete_addr,
        tete_abi,
        (await getProvider()).getSigner()
    );
}
