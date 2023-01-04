import { Box, Flex, Text } from "@chakra-ui/react";
import {
    Field,
    Form,
    FormLayout,
    SubmitButton,
    useSnackbar,
} from "@saas-ui/react";

import Page from "../../components/Layouts/Page";

export default function Create({ sidebar }) {
    const snackbar = useSnackbar();
    return (
        <>
            <Page title="Create a Pool" sidebar={sidebar}>
                <Box py="4" color="white">
                    <Flex justifyContent="space-between" color="white">
                        <Text id="live" fontSize="xl" fontWeight="bold">
                            Create a Pool
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        mt="4"
                        mr={{ base: "4", md: 0 }}
                    >
                        <Form w="50%">
                            <FormLayout>
                                <Field
                                    name="category"
                                    type="native-select"
                                    options={[
                                        { label: "Sports", color: "black" },
                                    ]}
                                    label="Category"
                                />
                                <Field
                                    name="outcome"
                                    type="native-select"
                                    w="15vh"
                                    options={[
                                        { value: 2, color: "black" },
                                        { value: 3 },
                                    ]}
                                    label="No. Outcome"
                                />
                                <Field
                                    name="eventTopic"
                                    type="text"
                                    label="Event Topic"
                                    placeholder="English Premier League"
                                />
                                <Field
                                    name="event"
                                    type="text"
                                    label="Event"
                                    placeholder="Will Chelsea beat Manchester United"
                                />

                                <Flex
                                    mt="4"
                                    alignItems="center"
                                    justifyContent="space-around"
                                ></Flex>
                                <Field
                                    name="amount"
                                    type="number"
                                    label="Amount(USD)"
                                    defaultValue={5}
                                    min={5}
                                    required
                                    w="25vh"
                                />
                                <SubmitButton
                                    label="Create Pool"
                                    bg="tete.card"
                                    onClick={() =>
                                        getContract()
                                            .then((contract) =>
                                                contract.CreateBettingPool()
                                            )
                                            .catch((err) =>
                                                snackbar({
                                                    description: prettyError(
                                                        err
                                                    ),
                                                    status: "error",
                                                })
                                            )
                                    }
                                />
                            </FormLayout>
                        </Form>
                    </Flex>
                </Box>
            </Page>
        </>
    );
}
