import { useCallback, useEffect, useContext, useMemo } from "react";
import UAuth from "@uauth/js";
import { useSnackbar } from "@saas-ui/react";
import { Context } from "../components/Provider";
import { provider } from "./ethers";

const uauth = new UAuth({
    clientID: process.env.NEXT_PUBLIC_UD_CLIENT_ID,
    redirectUri: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
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
            setAccount([address]);
        } catch (error) {
            console.error(error);
        }
    };

    const disconnectWallet = useCallback(() => {
        setAccount([]);
        setBalance(0);
        provider.clearCachedProvider();
        setProvider(null);
        snackbar.error("Disconnected from wallet");
    }, [setAccount, setBalance, setProvider, snackbar]);

    const disconnectUDWallet = async () => {
        await uauth.logout();
        snackbar.success("Wallet has been disconnected");

        console.log("Logged out with Unstoppable");
    };

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
