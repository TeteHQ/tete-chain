import { createContext, useState } from "react";
import Head from "next/head";

export const Context = createContext({});

export default function Provider({ children, value }) {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [ethProvider, setProvider] = useState(null);
    const [network, setNetwork] = useState(null);
    const [title, setTitle] = useState("");

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
