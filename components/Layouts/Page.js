import { Box, Flex } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header";
import Footer from "./Footer";
import SlideCard from "../Cards/Slide";
import { home_slides } from "../../const";
import AccountInfoTab from "../Widgets/AccountInfoTab";

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
					// w="100%"
					p="2"
					background="#050514cd"
				>
					<AccountInfoTab />
				</Box>
			</Flex>
			<Footer />
		</>
	);
}
