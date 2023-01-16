import { CheckIcon, SmallCloseIcon, SpinnerIcon } from "@chakra-ui/icons";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ticketDetails = [
	{ ticketId: 1234, status: "Running" },
	{ ticketId: 2345, status: "Lost" },
	{ ticketId: 3456, status: "Won" },
];

const betHistory = [
	{
		game: "CHE vs MUN",
		status: "Running",
		pick: "12",
		outcome: "X",
		gameID: 1234,
	},
	{ game: "ATL vs MAR", status: "Lost", pick: "1", outcome: "2", gameID: 2345 },
	{ game: "RMD vs BAR", status: "Won", pick: "1", outcome: "1", gameID: 3456 },
];

const BetHistory = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box>
			<TableContainer>
				<Table variant="striped" colorScheme={"whiteAlpha"}>
					<TableCaption>Bet History</TableCaption>
					<Thead>
						<Tr>
							<Th>Ticket ID</Th>
							<Th>Status</Th>
						</Tr>
					</Thead>
					<Tbody>
						{ticketDetails.map((ticketDetail) => (
							<Tr
								key={ticketDetail.ticketId}
								fontSize={14}
								cursor="pointer"
								onClick={onOpen}
							>
								<Td>{ticketDetail.ticketId}</Td>
								<Td>{ticketDetail.status}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Ticket Info</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<TableContainer>
							<Table variant="striped" colorScheme={"whiteAlpha"}>
								<TableCaption>Bet History</TableCaption>
								<Thead>
									<Tr>
										<Th>ID</Th>
										<Th>Game</Th>
										<Th>Pick</Th>
										<Th>Status</Th>
									</Tr>
								</Thead>
								<Tbody>
									{betHistory.map((bet) => (
										<Tr key={bet.gameID}>
											<Th>{bet.gameID}</Th>
											<Th>{bet.game}</Th>
											<Th>{bet.pick}</Th>
											<Th>
												{bet.status === "Running" ? (
													<SpinnerIcon color={"tete.hover"} />
												) : null || bet.status === "Won" ? (
													<CheckIcon color={"green"} />
												) : null || bet.status === "Lost" ? (
													<SmallCloseIcon color={"red"} />
												) : null}
											</Th>
										</Tr>
									))}
								</Tbody>
							</Table>
						</TableContainer>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default BetHistory;
