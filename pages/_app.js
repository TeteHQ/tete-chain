import { Box, useDisclosure } from "@chakra-ui/react";

import Link from "next/link";
import { SaasProvider, ModalsProvider } from "@saas-ui/react";

import Navbar from "../components/Navbar";
import { theme } from "../utils/theme";
import { Provider } from "../utils/context";

// Saas UI components will use the Next Link Wrapper.
const NextLink = (props) => <Link passHref {...props} />;

function MyApp({ Component, pageProps }) {
    const sidebar = useDisclosure();
    return (
        <SaasProvider theme={theme} linkComponent={NextLink}>
            <Provider>
                <ModalsProvider>
                    <Box as="section" bg={"tete.500"} minH="100vh">
                        <Navbar display={{ base: "none", md: "unset" }} />
                        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                            <Component sidebar={sidebar} {...pageProps} />
                        </Box>
                    </Box>
                </ModalsProvider>
            </Provider>
        </SaasProvider>
    );
}

export default MyApp;
