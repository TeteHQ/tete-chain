import { useCallback, useEffect, useContext, useMemo } from "react";
import UAuth from "@uauth/js";
import { useSnackbar } from "@saas-ui/react";
import { Context } from "../components/Provider";
import { provider } from "./ethers";

const uauth = new UAuth({
    clientID: "956e6ba4-d8d4-48c9-b64f-af4d258d3453",
    redirectUri: "https://tete-chain.com",
    scope: "openid wallet",
});

export function useWallet({ sync = false, auto = true } = {}) {
    const {
        account,
        setAccount,
        balance,
        setBalance,
        ethProvider,
        setProvider,
        network,
    } = useContext(Context);

    const snackbar = useSnackbar();

    const connected = useMemo(() => (account?.length > 0 ? account[0] : null), [
        account,
    ]);

    const connectWallet = useCallback(() => {
        if (sync) setProvider(provider.ethersSync(network));
        else
            provider
                .ethers(network)
                .catch(() => snackbar.error("Failed to connect to the network"))
                .then(setProvider);
    }, [sync, setProvider, network, snackbar]);

    const connectUDWallet = async () => {
        try {
            const authorization = await uauth.loginWithPopup();
            const address = authorization.idToken.wallet_address;
            setAccount([{ address, name: authorization.idToken.sub }]);
        } catch (error) {
            console.error(error);
        }
    };

    const disconnectUDWallet = useCallback(async () => {
        await uauth.logout();
        snackbar.success("Wallet has been disconnected");

        console.log("Logged out with Unstoppable");
    }, [snackbar]);

    const disconnectWallet = useCallback(() => {
        if (typeof connected === "object") {
            return disconnectUDWallet();
        }
        setAccount([]);
        setBalance(0);
        provider.clearCachedProvider();
        setProvider(null);
        snackbar.error("Disconnected from wallet");
    }, [
        connected,
        disconnectUDWallet,
        setAccount,
        setBalance,
        setProvider,
        snackbar,
    ]);
    const syncProvider = useCallback(() => {
        setProvider(provider.ethersSync(network));
    }, [network, setProvider]);

    useEffect(() => {
        if (auto) connectWallet();
    }, [auto, connectWallet]);

    useEffect(() => {
        ethProvider
            ?.listAccounts()
            .then(setAccount)
            .then(() => snackbar("Wallet connected successfully!"));
    }, [ethProvider, ethProvider?.listAccounts, setAccount, snackbar]);

    useEffect(() => {
        if (connected) ethProvider?.getBalance(connected).then(setBalance);
    }, [account, connected, setBalance, ethProvider]);

    return {
        balance,
        account,
        connected,
        provider: ethProvider,
        get isConnected() {
            return account?.length > 0;
        },
        get address() {
            if (typeof this.connected === "object") {
                return this.connected.name;
            }
            return this.connected
                ? this.connected.slice(0, 6) + "..." + this.connected.slice(-4)
                : null;
        },
        connectWallet,
        connectUDWallet,
        disconnectWallet,
        disconnectUDWallet,
        syncProvider,
    };
}
