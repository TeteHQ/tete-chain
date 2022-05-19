import { createContext, useState } from "react";

export const Context = createContext({});

export function Provider({ children, value }) {
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
            {children}
        </Context.Provider>
    );
}
