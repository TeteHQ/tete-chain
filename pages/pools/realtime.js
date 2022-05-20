import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Page from "../../components/Layouts/Page";

export default function Realtime({ sidebar }) {
    return (
        <>
            <Page title="Coming Soon | Realtime Bet" sidebar={sidebar}>
                <Box py="2">
                    <Flex justifyContent="space-between" color="white">
                        <Text id="live" fontSize="xl" fontWeight="bold">
                            Realtime Bet
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        mt="4"
                        mr={{ base: "4", md: 0 }}
                    >
                        <Image src="/coming_soon.svg" alt="Coming Soon" />
                    </Flex>
                </Box>
            </Page>
        </>
    );
}
