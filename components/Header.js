import { useState } from "react";
import Head from "next/head";
import { Box, HStack, Flex, IconButton } from "@chakra-ui/react";
import { Button, Link, Select, useSnackbar } from "@saas-ui/react";
import { FiMenu } from "react-icons/fi";

import { connectWallet } from "../utils/connect";

export default function Header({ title = "Not Found!", onOpen = () => {} }) {
    const snackbar = useSnackbar();
    const [account, setAccount] = useState();
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                bg={"tete.900"}
                color="white"
                shadow="md"
                w="full"
                px="4"
                h="14"
            >
                <IconButton
                    aria-label="Menu"
                    display={{ base: "inline-flex", md: "none" }}
                    onClick={onOpen}
                    icon={<FiMenu />}
                    size="sm"
                    color="gray.500"
                />
                <HStack spacing="8" ml="8" d={{ base: "none", md: "flex" }}>
                    <Link href="/pools/realtime">Realtime Bet</Link>
                    <Link href="/#pools">Tete Pools</Link>
                    <Link href="/pools/staking">NFT Staking</Link>
                    <Link href="/#wallet">Street Wallet</Link>
                </HStack>

                <Flex alignItems="center" justifyContent="end">
                    <Box d={{ base: "none", md: "flex" }}>
                        <Select
                            options={[{ label: "ENG", color: "tete.900" }]}
                        />
                    </Box>
                    <Box w="200px" ml="4" mr="-8">
                        <Button
                            bg="tete.hover"
                            label={
                                account
                                    ? account.substring(0, 14)
                                    : "Connect Wallet"
                            }
                            _hover={{
                                bg: "tete.500",
                            }}
                            onClick={connectWallet.bind(
                                {},
                                setAccount,
                                snackbar
                            )}
                        />
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}
