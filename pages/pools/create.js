import { Box, Flex, Text } from "@chakra-ui/react";
import { Field, Form, FormLayout, Link } from "@saas-ui/react";

import Page from "../../components/Page";

export default function Create({ sidebar }) {
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
                                    name="type"
                                    type="native-select"
                                    options={[
                                        { label: "Football", color: "black" },
                                        { label: "Basketball" },
                                    ]}
                                    label="Type"
                                />
                                <Field
                                    name="outcome"
                                    type="native-select"
                                    options={[
                                        { value: 2, color: "black" },
                                        { value: 3 },
                                    ]}
                                    label="No. Outcome"
                                />
                                <Field
                                    name="amount"
                                    type="number"
                                    label="Amount(USD)"
                                    defaultValue={5}
                                    min={5}
                                    required
                                />
                            </FormLayout>
                        </Form>
                    </Flex>
                </Box>
            </Page>
        </>
    );
}
