import {
	Box,
	Button,
	Flex,
	Spacer,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	InputLeftElement,
	Input,
	InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Withdrawal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [amount, setAmount] = useState("");

	return (
		<Flex>
			<Text>Balance: $50</Text>
			<Spacer />
			<Button bg="tete.hover" _hover={{ bg: "tete.500" }} onClick={onOpen}>
				Withdraw
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Withdraw</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								color="gray.300"
								fontSize="1.2em"
							>
								{"$"}
							</InputLeftElement>
							<Input
								placeholder="Enter amount"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</InputGroup>
					</ModalBody>

					<ModalFooter>
						<Button
							mr={3}
							onClick={onClose}
							bg="tete.hover"
							_hover={{ bg: "tete.500" }}
							color="white"
						>
							Close
						</Button>
						<Button
							bg={amount > 0 ? "tete.hover" : null}
							color={amount > 0 ? "white" : null}
							_hover={amount > 0 ? { bg: "tete.500" } : null}
						>
							Proceed
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};

export default Withdrawal;
