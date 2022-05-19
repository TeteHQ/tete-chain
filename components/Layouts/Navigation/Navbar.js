import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link, SearchInput } from "@saas-ui/react";
import {
    FaAward,
    FaBasketballBall,
    FaFootballBall,
    FaHeart,
    FaMusic,
    FaTableTennis,
    FaTheaterMasks,
    FaWifi,
} from "react-icons/fa";
import { MdHome } from "react-icons/md";

import NavItem from "./NavItem";

export default function Navbar(props) {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={"tete.900"}
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Link href="/">
                    <Image src={"/logo.png"} h="10" alt="Tete" />
                </Link>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="white"
                aria-label="Main Navigation"
            >
                <Box p="4">
                    <SearchInput bg="tete.400" />
                </Box>
                <Box mb="8">
                    <Text px="4" py="2" fontWeight={"extrabold"}>
                        Navigations
                    </Text>
                    <NavItem href="/" icon={MdHome}>
                        Home
                    </NavItem>
                    <NavItem href="/#live" icon={FaWifi}>
                        Live
                    </NavItem>
                    <NavItem href="/" icon={FaHeart}>
                        Favourites
                    </NavItem>
                </Box>
                <Box mb="8">
                    <Text px="4" py="2" fontWeight={"extrabold"}>
                        Sports
                    </Text>
                    <NavItem href="/pools/realtime" icon={FaFootballBall}>
                        Football
                    </NavItem>
                    <NavItem href="/pools/realtime" icon={FaBasketballBall}>
                        Basketball
                    </NavItem>
                    <NavItem href="/pools/realtime" icon={FaTableTennis}>
                        Tennis
                    </NavItem>
                </Box>
                <Box>
                    <Text px="4" py="2" fontWeight={"extrabold"}>
                        Entertainment
                    </Text>
                    <NavItem href="/pools/realtime" icon={FaMusic}>
                        Music
                    </NavItem>
                    <NavItem href="/pools/realtime" icon={FaTheaterMasks}>
                        Movies
                    </NavItem>
                    <NavItem href="/pools/realtime" icon={FaAward}>
                        Awards
                    </NavItem>
                </Box>
                <Box>
                    <NavItem
                        fontWeight={"extrabold"}
                        href="/pools/staking"
                        fontSize="md"
                    >
                        NFT Staking
                    </NavItem>
                    <NavItem
                        fontWeight={"extrabold"}
                        href="/tetepools"
                        fontSize="md"
                    >
                        Tete Pools
                    </NavItem>
                </Box>
            </Flex>
        </Box>
    );
}
