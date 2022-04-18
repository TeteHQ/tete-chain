import { Box, Flex, Text } from "@chakra-ui/react";
import {
    Button,
    DisplayIf,
    Field,
    Form,
    FormLayout,
    SubmitButton,
    useSnackbar,
} from "@saas-ui/react";

import Page from "../../components/Page";
import { getContract, prettyError } from "../../utils/contract";

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
                                    <DisplayIf
                                        name="outcome"
                                        condition={(value) => value == 3}
                                    >
                                        <Button
                                            label="D"
                                            fontSize="xl"
                                            bg="gray.500"
                                            _hover={{ bg: "tete.hover" }}
                                        />
                                    </DisplayIf>
                                    <Button
                                        label="L"
                                        fontSize="xl"
                                        bg="gray.500"
                                        _hover={{ bg: "tete.hover" }}
                                    />
                                </Flex>
                                <Field
                                    name="amount"
                                    type="number"
                                    label="Amount(USD)"
                                    defaultValue={5}
                                    min={5}
                                    required
                                />
                                <SubmitButton
                                    label="Create Pool"
                                    bg="tete.card"
                                    onClick={() =>
                                        getContract().then((contract) =>
                                            contract.CreateBettingPool()
                                        ).catch((err) => snackbar({
                                            description: prettyError(err),
                                            status: "error",
                                        }))
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
