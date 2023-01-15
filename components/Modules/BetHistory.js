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
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";

const ticketDetails = [
	{
		game: "CHE vs MUN",
		pick: "1",
		outcome: "X",
		status: "Running",
		id: 1234,
	},
	{
		game: "VIL vs BAR",
		pick: "2",
		outcome: "1",
		status: "Lost",
		id: 2345,
	},
	{
		game: "RMD vs OSC",
		pick: "12",
		outcome: "12",
		status: "Won",
		id: 3456,
	},
];

const tickets = [
	{ ticketId: 1234, status: "Running" },
	{ ticketId: 2345, status: "Lost" },
	{ ticketId: 3456, status: "Won" },
];

const BetHistory = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<TableContainer>
				<Table variant={"striped"} colorScheme="whiteAlpha">
					<TableCaption>Bet History</TableCaption>
					<Thead>
						<Tr>
							<Th>Ticket id</Th>
							<Th>status</Th>
						</Tr>
					</Thead>
					{tickets.map((ticket) => (
						<Tbody mb={2}>
							<Tr onClick={onOpen} cursor="pointer">
								<Td>{ticket.ticketId}</Td>
								<Td>{ticket.status}</Td>
							</Tr>
						</Tbody>
					))}
				</Table>
			</TableContainer>
			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Ticket Info</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<TableContainer overflowX={"hidden"}>
							<Table variant="simple" color="black">
								<TableCaption>Ticket Info</TableCaption>
								<Thead>
									<Tr>
										<Th>ID</Th>
										<Th>Game</Th>
										<Th>Pick</Th>
										<Th>status</Th>
									</Tr>
								</Thead>
								{ticketDetails.map((ticketDetail) => (
									<Tbody fontSize={13}>
										<Tr>
											<Td>{ticketDetail.id}</Td>
											<Td>{ticketDetail.game}</Td>
											<Td>{ticketDetail.pick}</Td>
											<Td>
												{ticketDetail.status === "Lost" ? (
													<SmallCloseIcon color="red" />
												) : null || ticketDetail.status === "Won" ? (
													<CheckIcon color="green" />
												) : null || ticketDetail.status === "Running" ? (
													<SpinnerIcon color="tere.hover" />
												) : null}
											</Td>
										</Tr>
									</Tbody>
								))}
							</Table>
						</TableContainer>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default BetHistory;
