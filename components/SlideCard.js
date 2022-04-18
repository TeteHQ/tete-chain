import { Box, Flex, Text } from "@chakra-ui/react";
import { Button, Card, Link } from "@saas-ui/react";

export default function SlideCard({ slide, text }) {
    return (
        <Card px="6" py="12" w="full" bg={slide.bg} color="white">
            <Flex>
                <Box textAlign="left" w={{ base: "full", md: "40%" }}>
                    <Text fontSize="xl" fontWeight="bold" d="block" mb="4">
                        {slide.intro}
                    </Text>
                    <Text>{text}</Text>
                    <Link href={slide.buttons[0]?.href || "#"}>
                        <Button
                            bg={slide.bg === "tete.hover" ? "white" : slide.bg}
                            size="sm"
                            label={slide.buttons[0].text}
                            color={slide.bg}
                            _hover={{
                                bg: "transparent",
                                color: "white",
                            }}
                            {...slide.buttons[0]}
                        />
                    </Link>
                    {slide.buttons.length > 1 ? (
                        <Link href={slide.buttons[1]?.href || "#"}>
                            <Button
                                ml="4"
                                size="sm"
                                label={slide.buttons[1].text}
                                color="white"
                                bg="transparent"
                                _hover={{
                                    bg:
                                        slide.bg === "tete.hover"
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
    );
}
