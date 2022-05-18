import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";
import { SaasProvider, AuthProvider, ModalsProvider } from "@saas-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { theme } from "../utils/theme";
import { supabaseService } from "../utils/supabase";

// Saas UI components will use the Next Link Wrapper.
const NextLink = (props) => <Link passHref {...props} />;

function MyApp({ Component, pageProps }) {
    const sidebar = useDisclosure();
    return (
        <SaasProvider theme={theme} linkComponent={NextLink}>
            <AuthProvider {...supabaseService}>
                <ModalsProvider>
                    <Box as="section" bg={"tete.500"} minH="100vh">
                        <Navbar display={{ base: "none", md: "unset" }} />
                        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                            <Component sidebar={sidebar} {...pageProps} />
                            <Footer />
                        </Box>
                    </Box>
                </ModalsProvider>
            </AuthProvider>
        </SaasProvider>
    );
}

export default MyApp;
