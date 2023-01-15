import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spacer,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const Withdrawal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [amount, setAmount] = useState("");
	return (
		<Box>
			<Flex>
				<Text>Balance: $50</Text>
				<Spacer />
				<Button
					bg="tete.hover"
					_hover={{
						bg: "tete.500",
					}}
					onClick={onOpen}
				>
					Withdraw
				</Button>
			</Flex>
			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
								children="$"
							/>
							<Input
								placeholder="Enter amount"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</InputGroup>
					</ModalBody>

					<ModalFooter>
						<Button bg="tete.hover" mr={3} onClick={onClose} color="white">
							Back
						</Button>
						<Button
							variant="ghost"
							bg={amount !== "" && amount > 0 ? "tete.hover" : null}
							_hover={amount !== "" && amount > 0 ? "tete.500" : null}
							color={amount !== "" && amount > 0 ? "white" : null}
						>
							Proceed
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default Withdrawal;
