import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Widget from "../Widgets/Base";
import SlideCard from "../Cards/Slide";
import SportWidget from "../Widgets/Sport";
import { home_slides } from "../../const";

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
					background="#050514cd"
				>
					<Text>My Balance</Text>
					<Divider mb="3" />
					<Accordion allowToggle>
						<AccordionItem border="none">
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Withdraw
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae, architecto!
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem border="none">
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									My Account Info
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Recusandae, architecto!
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					{/* <Text fontSize="md" fontWeight="normal" mb="4">
						Trending
					</Text>
					<Widget title="Monkey NFT" href="/" bgImage="/widget1.png" />
					<SportWidget />
					<Widget title="Bored Ape NFT" href="/" bgImage="/widget2.png" /> */}
				</Box>
			</Flex>
			<Footer />
		</>
	);
}
