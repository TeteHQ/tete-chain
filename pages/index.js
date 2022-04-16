import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Button, Card } from "@saas-ui/react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import { getRandomItem } from "../utils";

export default function Home({ sidebar }) {
    return (
        <>
            <Header title="Home" onopen={sidebar.onOpen} />
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="space-evenly"
            >
                <Box w="full" p="4">
                    <Card px="6" py="12" w="full" bg="tete.hover" color="white">
                        <Flex>
                            <Box w={{ base: "full", md: "40%" }}>
                                <Text
                                    fontSize="xl"
                                    fontWeight="bold"
                                    d="block"
                                    mb="4"
                                >
                                    Welcome to Tété, we are using Betting as an
                                    Instrument of Change
                                </Text>
                                <Button
                                    bg="white"
                                    size="sm"
                                    label="Create a Pool"
                                    color="tete.hover"
                                    _hover={{
                                        bg: "tete.hover",
                                        color: "white",
                                    }}
                                />
                                <Button
                                    ml="4"
                                    size="sm"
                                    label="Place a Bet"
                                    color="white"
                                    bg="transparent"
                                    _hover={{
                                        bg: "white",
                                        color: "tete.hover",
                                    }}
                                />
                            </Box>
                        </Flex>
                    </Card>
                    <Box py="6">
                        <Flex justifyContent="space-between" color="white">
                            <Text fontSize="xl" fontWeight="bold">
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
                            mr="4"
                        >
                            <EventCard isLive={true} />
                            <EventCard isLive={false} />
                            <EventCard isLive={true} />
                        </Flex>
                    </Box>
                </Box>
                <Box w={{ base: "full", md: "35%" }} p="4"></Box>
            </Flex>
        </>
    );
}
