import { Box, HStack, Flex, IconButton } from "@chakra-ui/react";
import { Button, Link, Select } from "@saas-ui/react";
import { FiMenu } from "react-icons/fi";

import Drawer from "./Navigation/Drawer";
import { useWallet } from "../../utils";
import { useEffect } from "react";

export default function Header({ sidebar }) {
	const {
		address,
		isConnected,
		connectWallet,
		connectUDWallet,
		disconnectWallet,
		account,
	} = useWallet({
		auto: false,
	});

	useEffect(() => {
		if (!isConnected && localStorage.getItem("connected")) {
			connectWallet();
			localStorage.setItem("connected", Date.now());
		}
	}, []);
	useEffect(() => {
		if (isConnected) {
			localStorage.setItem("domainId", address);
			localStorage.getItem("domainId");
		}
	}, [address]);

	const logout = () => {
		disconnectWallet();
		localStorage.removeItem("domainId");
	};

	return (
		<Box pos={{ md: "fixed" }} top="0" left="230" right="0" zIndex={1000}>
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
					onClick={sidebar.onOpen}
					icon={<FiMenu />}
					size="sm"
					color="gray.500"
				/>
				<Drawer open={sidebar.isOpen} close={sidebar.onClose} />
				<HStack spacing="8" ml="8" d={{ base: "none", md: "flex" }}>
					<Link href="/pools/realtime">Realtime Bet</Link>
					<Link href="/tetepools">Tete Pools</Link>
					<Link href="/pools/staking">NFT Staking</Link>
					<Link href="/#wallet">Street Wallet</Link>
				</HStack>

				<Flex alignItems="center" justifyContent="end">
					<Box ml="4">
						{!address ? (
							<>
								<Button
									bg="tete.hover"
									label="Connect UD Wallet"
									_hover={{
										bg: "tete.500",
									}}
									onClick={connectUDWallet}
									sx={{ mr: 2 }}
								/>
								<Button
									bg="tete.hover"
									label="Connect Wallet"
									_hover={{
										bg: "tete.500",
									}}
									onClick={connectWallet}
								/>
							</>
						) : (
							<>
								<Button
									bg="tete.hover"
									label={address}
									_hover={{
										bg: "tete.500",
									}}
									onClick={logout}
								/>
							</>
						)}
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
