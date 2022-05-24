import { Badge, Box, Flex, Image, Progress, Text } from "@chakra-ui/react";
import { Button, Card, CardBody, CardHeader } from "@saas-ui/react";

export default function EventCard({
    time = 60,
    category = "Sports / Football / EPL",
    teams = [],
    scores = [],
    isLive = true,
    is2ndHalf = false,
}) {
    return (
        <>
            <Card p="2" m="2" w="full" bg="tete.400" color="white">
                <CardHeader p="0">
                    <Badge
                        py="1"
                        px="2"
                        colorScheme={isLive ? "red" : "green"}
                        variant="solid"
                        cursor="pointer"
                    >
                        {isLive ? "Live" : "Completed"}
                    </Badge>
                </CardHeader>
                <CardBody>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Image
                            m="2"
                            src="/teams/chelsea.png"
                            w="100px"
                            h="90px"
                            alt="team"
                        />
                        <Text fontSize="xl" fontWeight="bold">
                            vs
                        </Text>
                        <Image
                            m="2"
                            src="/teams/manu.png"
                            w="100px"
                            h="90px"
                            alt="team"
                        />
                    </Flex>
                    <Box>
                        <Text fontSize="lg" fontWeight="bold">
                            {is2ndHalf ? "2nd Half" : "1st Half"} {time}
                        </Text>
                        <Progress
                            h="1"
                            isAnimated
                            hasStripe
                            borderRadius="8"
                            value={(100 * time) / 120}
                        />
                        <Text color="gray.300" fontSize="lg" fontWeight="bold">
                            {category}
                        </Text>
                        <Box m="2" fontWeight="bold">
                            <Flex justifyContent="space-between">
                                <Text>Chelsea</Text>
                                <Text>0</Text>
                            </Flex>
                            <Flex justifyContent="space-between">
                                <Text>Manchester United</Text>
                                <Text>4</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Flex
                        mt="4"
                        alignItems="center"
                        justifyContent="space-around"
                    >
                        <Button
                            label="W"
                            fontSize="xl"
                            bg="gray.500"
                            _hover={{ bg: "tete.hover" }}
                        />
                        <Button
                            label="D"
                            fontSize="xl"
                            bg="gray.500"
                            _hover={{ bg: "tete.hover" }}
                        />
                        <Button
                            label="L"
                            fontSize="xl"
                            bg="gray.500"
                            _hover={{ bg: "tete.hover" }}
                        />
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
}
