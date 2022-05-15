import { Box, Flex, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import SlideCard from "./SlideCard";
import Header from "./Header";
import Widget from "./Widget";
import EventCardRightWidget from "./SportsRightWidget";

export default function Page({ sidebar, title, children }) {
    const slides = [
        {
            bg: "tete.hover",
            intro: "Welcome to Tété, we are using Betting as an Instrument of Social Change.",
            image: "/header.png",
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
            image: "/wallet.png",
            buttons: [
                {
                    text: "Donate Now",
                    bg: "white",
                    color: "purple.500",
                },
                {
                    text: "Learn More",
                },
            ],
        },
        {
            bg: "tete.hover",
            intro: "From Grammy, BET Awards, Oscars, You can now stake on your Favourite nominee from any Category.",
            image: "/grammy.png",
            buttons: [
                {
                    text: "Start Here",
                },
            ],
        },
    ];
    return (
        <>
            <Header title={title} onopen={sidebar.onOpen} />
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="space-evenly"
            >
                <Box w="full" p="4">
                    <Carousel showThumbs={false} autoPlay infiniteLoop>
                        {slides.map((slide, index) => (
                            <SlideCard slide={slide} key={index} />
                        ))}
                    </Carousel>
                    {children}
                </Box>
                <Box color="white" w={{ base: "full", md: "30%" }} p="4">
                    <Text fontSize="md" fontWeight="normal" mb="4">
                        Trending
                    </Text>
                    <Widget
                        title="Monkey NFT"
                        href="/"
                        bgImage="/widget1.png"
                    />
                    <EventCardRightWidget />
                    <Widget
                        title="Bored Ape NFT"
                        href="/"
                        bgImage="/widget2.png"
                    />
                </Box>
            </Flex>
        </>
    );
}
