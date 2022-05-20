import { Box, Flex, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "./Header";
import Footer from "./Footer";
import Widget from "../Widgets/Base";
import SlideCard from "../Cards/Slide";
import SportWidget from "../Widgets/Sport";
import { home_slides } from "../../utils/const";

export default function Page({ sidebar, title, children }) {
    return (
        <>
            <Header title={title} sidebar={sidebar} />
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="start"
                mt="50px"
            >
                <Box w={{ base: "full", md: "77%" }} p="4">
                    <Carousel showThumbs={false} autoPlay infiniteLoop>
                        {home_slides.map((slide, index) => (
                            <SlideCard slide={slide} key={index} />
                        ))}
                    </Carousel>
                    {children}
                </Box>
                <Box
                    pos={{ md: "fixed" }}
                    right="0"
                    color="white"
                    w={{ base: "full", md: "20%" }}
                    p="4"
                >
                    <Text fontSize="md" fontWeight="normal" mb="4">
                        Trending
                    </Text>
                    <Widget
                        title="Monkey NFT"
                        href="/"
                        bgImage="/widget1.png"
                    />
                    <SportWidget />
                    <Widget
                        title="Bored Ape NFT"
                        href="/"
                        bgImage="/widget2.png"
                    />
                </Box>
            </Flex>
            <Footer />
        </>
    );
}
