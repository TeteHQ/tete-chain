import { Box, Flex, Text } from "@chakra-ui/react";
import { Button, DataTable, Link } from "@saas-ui/react";

import Page from "../components/Page";
import EventCard from "../components/EventCard";
import SlideCard from "../components/SlideCard";

export default function Home({ sidebar }) {
    return (
        <Page sidebar={sidebar} title="Home">
            <Box py="2">
                <Flex justifyContent="space-between" color="white">
                    <Text id="live" fontSize="xl" fontWeight="bold">
                        Live Events
                    </Text>
                    <Button
                        label="All Events"
                        size="small"
                        fontSize="sm"
                        bg="gray.500"
                        px="4"
                        _hover={{
                            bg: "gray.600",
                        }}
                    />
                </Flex>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    mt="4"
                    mr={{ base: "4", md: 0 }}
                >
                    <EventCard isLive={true} />
                    <EventCard isLive={false} />
                    <EventCard isLive={true} />
                </Flex>
            </Box>
            <Box mt="8">
                <Flex justifyContent="space-between" color="white">
                    <Text id="pools" fontSize="xl" fontWeight="bold">
                        Tete Pools
                    </Text>
                    <Button
                        label="All Events"
                        size="small"
                        fontSize="sm"
                        bg="gray.500"
                        px="4"
                        _hover={{
                            bg: "gray.600",
                        }}
                    />
                </Flex>
                <Box color="white" overflowX="auto" mt="2">
                    <DataTable
                        columns={[
                            { id: "creator", Header: "Creator" },
                            { id: "time", Header: "Time" },
                            { id: "event", Header: "Event" },
                            { id: "prediction", Header: "Prediction" },
                            { id: "actions" },
                        ]}
                        data={[
                            {
                                creator: "John Doe",
                                time: "12:00",
                                event: "Grammy Awards",
                                prediction: "Nominee",
                                actions: (
                                    <Button
                                        size="sm"
                                        color="gray.800"
                                        label="Place Bet"
                                    />
                                ),
                            },
                            {
                                creator: "John Doe",
                                time: "12:00",
                                event: "Grammy Awards",
                                prediction: "Nominee",
                                actions: (
                                    <Button
                                        size="sm"
                                        color="gray.800"
                                        label="Place Bet"
                                    />
                                ),
                            },
                            {
                                creator: "John Doe",
                                time: "12:00",
                                event: "Grammy Awards",
                                prediction: "Nominee",
                                actions: (
                                    <Button
                                        size="sm"
                                        color="gray.800"
                                        label="Place Bet"
                                    />
                                ),
                            },
                            {
                                creator: "John Doe",
                                time: "12:00",
                                event: "Grammy Awards",
                                prediction: "Nominee",
                                actions: (
                                    <Button
                                        size="sm"
                                        color="gray.800"
                                        label="Place Bet"
                                    />
                                ),
                            },
                            {
                                creator: "John Doe",
                                time: "12:00",
                                event: "Grammy Awards",
                                prediction: "Nominee",
                                actions: (
                                    <Button
                                        size="sm"
                                        color="gray.800"
                                        label="Place Bet"
                                    />
                                ),
                            },
                        ]}
                        isSortable
                        isSelectable
                    />
                </Box>
                <Box textAlign="right">
                    <Link href="/pools/create">
                        <Button
                            bg="tete.card"
                            label="Create Pool"
                            mt="4"
                            color="white"
                            size="sm"
                            px="6"
                            _hover={{
                                bg: "tete.card",
                                border: "1px",
                            }}
                        />
                    </Link>
                </Box>
            </Box>
            <Box my="8" id="wallet">
                <SlideCard
                    slide={{
                        bg: "tete.card",
                        intro: "Street Wallet",
                        image: "/wallet.png",
                        buttons: [
                            {
                                text: "Donate Now",
                                bg: "white",
                                color: "purple.500",
                            },
                        ],
                    }}
                    text={[
                        <Text key="1">Available Balance</Text>,
                        <Text
                            fontSize="3xl"
                            fontWeight="extrabold"
                            color="orange"
                            key="2"
                        >
                            0.125134 BTC
                        </Text>,
                        <Text pl="24" mb="4" key="3">
                            $4962.34
                        </Text>,
                    ]}
                />
            </Box>
        </Page>
    );
}
