import {
    Box,
    Container,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Button, Link } from "@saas-ui/react";

import { useWallet } from "../utils";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight="extrabold" fontSize="lg" mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    const { address, isConnected, connectWallet } = useWallet({ auto: false });

    return (
        <Box bg="tete.900" color="white" zIndex={1000}>
            <Container as={Stack} maxW="6xl" py={16}>
                <SimpleGrid columns={[2, 3, 6]} spacing={3}>
                    <Stack spacing={2}>
                        <Box>
                            <Link href="/">
                                <Image src="/logo.png" h="12" alt="Tete" />
                            </Link>
                        </Box>
                        <Button
                            bg="tete.hover"
                            label={isConnected ? address : "Connect Wallet"}
                            _hover={{
                                bg: "tete.500",
                            }}
                            onClick={connectWallet}
                        />

                        <Text fontSize="sm">
                            © 2022 All rights reserved - Buchain
                        </Text>
                    </Stack>
                    <Stack spacing={1}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link textColor="gray.500" href="#">
                            Facebook
                        </Link>
                        <Link textColor="gray.500" href="#">
                            Twitter
                        </Link>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>Realtime Betting</ListHeader>
                        <Link textColor="gray.500" href="/pools/realtime">
                            Awards
                        </Link>
                        <Link textColor="gray.500" href="/pools/realtime">
                            Football
                        </Link>
                        <Link textColor="gray.500" href="/pools/realtime">
                            Music
                        </Link>
                        <Link textColor="gray.500" href="/pools/realtime">
                            Basketball
                        </Link>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>NFT Staking</ListHeader>
                        <Link textColor="gray.500" href="/pools/staking">
                            Crypto Punk
                        </Link>
                        <Link textColor="gray.500" href="/pools/staking">
                            Azuki
                        </Link>
                        <Link textColor="gray.500" href="/pools/staking">
                            Doodle
                        </Link>
                        <Link textColor="gray.500" href="/pools/staking">
                            Vee Friends
                        </Link>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>Tete Pools</ListHeader>
                        <Link textColor="gray.500" href="/tetepools">
                            Join a Pool
                        </Link>
                        <Link textColor="gray.500" href="/pools/create">
                            Create a Pool
                        </Link>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>Street Wallet</ListHeader>
                        <Button
                            bg="tete.hover"
                            _hover={{ bg: "tete.500" }}
                            label="Donate Now"
                        />
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
