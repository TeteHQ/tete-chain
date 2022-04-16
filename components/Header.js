import Head from "next/head";
import { HStack, Flex, IconButton } from "@chakra-ui/react";
import { Button, Link, Select } from "@saas-ui/react";
import { FiMenu } from "react-icons/fi";

export default function Header({ title = "Not Found!", onOpen = () => {} }) {
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
                />
                <HStack spacing="8" ml="8">
                    <Link href="/">Realtime Bet</Link>
                    <Link href="/">Tete Pools</Link>
                    <Link href="/">NFT Staking</Link>
                    <Link href="/">Street Wallet</Link>
                </HStack>

                <Flex align="center" justify={"end"}>
                    <Select options={[{ label: "ENG", color: "tete.900" }]} />
                    <Button
                        ml="8"
                        px="16"
                        bg="tete.hover"
                        label="Connect Wallet"
                        _hover={{
                            bg: "tete.500",
                        }}
                    />
                </Flex>
            </Flex>
        </>
    );
}
