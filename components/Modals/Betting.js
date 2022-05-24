import {
    Flex,
    Box,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
} from "@chakra-ui/react";

export default function Betting({ item }) {
    return (
        <>
            <Flex direction="column" alignItems="center">
                <Text mt="3" fontWeight="bold" fontSize="lg" noOfLines={1}>
                    {item}
                </Text>
                <Flex
                    mt="4"
                    textColor="white"
                    justifyContent="space-around"
                    gap="10"
                >
                    <Button textColor="white" bg="tete.500">
                        Yes{" "}
                    </Button>
                    <Button textColor="white" bg="tete.500">
                        No
                    </Button>
                </Flex>

                <Box mt="3" mb="2" w="40vh">
                    <NumberInput
                        variant="filled"
                        defaultValue={15}
                        precision={2}
                        step={0.2}
                    >
                        <NumberInputField />

                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Button mt="4" textColor="white" bg="#1638B0">
                    Place Bet
                </Button>
            </Flex>
        </>
    );
}
