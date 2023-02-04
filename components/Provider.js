import { createContext, useState } from "react";
import Head from "next/head";

// export const Context = createContext({});
// export const Context = createContext({
// 	// account: localStorage.getItem("account"),
// });
const DEFAULT_AUTH = {
    get account() {
        if (typeof window === "undefined") return null;
        return JSON.parse(localStorage.getItem("account"));
    },
};
export const Context = createContext(DEFAULT_AUTH);

export default function Provider({ children, value }) {
    const [account, updateAccount] = useState([DEFAULT_AUTH.account?.[0]]);
    const [balance, setBalance] = useState(0);
    const [ethProvider, setProvider] = useState(null);
    const [network, setNetwork] = useState(null);
    const [title, setTitle] = useState("");

    const setAccount = (account) => {
        updateAccount(account);
        localStorage.setItem("account", JSON.stringify(account));
    };

    return (
        <Context.Provider
            value={{
                account,
                setAccount,
                balance,
                setBalance,
                ethProvider,
                setProvider,
                network,
                setNetwork,
                title,
                setTitle,
                ...value,
            }}
        >
            <Head>
                <title>{title} | Tete</title>
            </Head>
            {children}
        </Context.Provider>
    );
}
