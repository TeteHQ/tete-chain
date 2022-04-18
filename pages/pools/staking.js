import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Page from "../../components/Page";

export default function Realtime({ sidebar }) {
    return (
        <>
            <Page title="Coming Soon | NFT Staking" sidebar={sidebar}>
                <Box py="2">
                    <Flex justifyContent="space-between" color="white">
                        <Text id="live" fontSize="xl" fontWeight="bold">
                            NFT Staking
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        mt="4"
                        mr={{ base: "4", md: 0 }}
                    ></Flex>
                </Box>
            </Page>
        </>
    );
}
