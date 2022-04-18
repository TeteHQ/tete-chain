import { Box, Flex, Text } from "@chakra-ui/react";
import { Button, Card, DataTable, Link } from "@saas-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import EventCard from "../components/EventCard";
import Header from "../components/Header";
import Widget from "../components/Widget";

export default function Home({ sidebar }) {
    const slides = [
        {
            bg: "tete.hover",
            intro: "Welcome to Tété, we are using Betting as an Instrument of Social Change.",
            buttons: [
                {
                    text: "Create Pool",
                    href: "/pools/create",
                },
                {
                    text: "Place a Bet",
                },
            ],
        },
        {
            bg: "tete.card",
            intro: "Everytime you WIN, Someone on the streets also WIN. Together , let’s take Young Girls and Boys off the street.",
            buttons: [
                {
                    text: "Donate Now",
                },
                {
                    text: "Learn More",
                },
            ],
        },
        {
            bg: "tete.hover",
            intro: "From Grammy, BET Awards, Oscars, You can now stake on your Favourite nominee from any Category.",
            buttons: [
                {
                    text: "Start Here",
                },
            ],
        },
    ];
    return (
        <>
            <Header title="Home" onopen={sidebar.onOpen} />
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="space-evenly"
            >
                <Box w="full" p="4">
                    <Carousel autoPlay infiniteLoop>
                        {slides.map((slide, index) => (
                            <Card
                                key={index}
                                px="6"
                                py="12"
                                w="full"
                                bg={slide.bg}
                                color="white"
                            >
                                <Flex>
                                    <Box
                                        textAlign="left"
                                        w={{ base: "full", md: "40%" }}
                                    >
                                        <Text
                                            fontSize="xl"
                                            fontWeight="bold"
                                            d="block"
                                            mb="4"
                                        >
                                            {slide.intro}
                                        </Text>
                                        <Link
                                            href={slide.buttons[0]?.href || "#"}
                                        >
                                            <Button
                                                bg={
                                                    slide.bg === "tete.hover"
                                                        ? "white"
                                                        : slide.bg
                                                }
                                                size="sm"
                                                label={slide.buttons[0].text}
                                                color={slide.bg}
                                                _hover={{
                                                    bg: "transparent",
                                                    color: "white",
                                                }}
                                            />
                                        </Link>
                                        {slide.buttons.length > 1 ? (
                                            <Link
                                                href={
                                                    slide.buttons[1]?.href ||
                                                    "#"
                                                }
                                            >
                                                <Button
                                                    ml="4"
                                                    size="sm"
                                                    label={
                                                        slide.buttons[1].text
                                                    }
                                                    color="white"
                                                    bg="transparent"
                                                    _hover={{
                                                        bg:
                                                            slide.bg ===
                                                            "tete.hover"
                                                                ? "white"
                                                                : slide.bg,
                                                        color: slide.bg,
                                                    }}
                                                />
                                            </Link>
                                        ) : (
                                            ""
                                        )}
                                    </Box>
                                </Flex>
                            </Card>
                        ))}
                    </Carousel>

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
                </Box>
                <Box color="white" w={{ base: "full", md: "30%" }} p="4">
                    <Text fontSize="lg" fontWeight="bold" mb="4">
                        Trending
                    </Text>
                    <Widget title="NFT" href="/" bgImage="/widget1.png" />
                    <Widget title="NFT" href="/" bgImage="/widget2.png" />
                </Box>
            </Flex>
        </>
    );
}
