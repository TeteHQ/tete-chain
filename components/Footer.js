import {
    Box,
    Container,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Button, Link } from "@saas-ui/react";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight="extrabold" fontSize="lg" mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box bg="tete.900" color="white">
            <Container as={Stack} maxW="6xl" py={16}>
                <SimpleGrid columns={[2, 3, 6]} spacing={5}>
                    <Stack spacing={6}>
                        <Box>
                            <Link href="/">
                                <Image src={"/logo.png"} h="12" alt="Tete" />
                            </Link>
                        </Box>
                        <Text fontSize={"sm"}>© 2022 All rights reserved</Text>
                    </Stack>
                    <Stack>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={"#"}>Facebook</Link>
                        <Link href={"#"}>Twitter</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>Realtime Betting</ListHeader>
                        <Link href={"/pools/realtime"}>Awards</Link>
                        <Link href={"/pools/realtime"}>Football</Link>
                        <Link href={"/pools/realtime"}>Music</Link>
                        <Link href={"/pools/realtime"}>Basketball</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>NFT Staking</ListHeader>
                        <Link href={"/pools/staking"}>Crypto Punk</Link>
                        <Link href={"/pools/staking"}>Azuki</Link>
                        <Link href={"/pools/staking"}>Doodle</Link>
                        <Link href={"/pools/staking"}>Vee Friends</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>Tete Pools</ListHeader>
                        <Link href={"#"}>Join a Pool</Link>
                        <Link href={"/pools/create"}>Create a Pool</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
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
