import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Divider,
	Text,
} from "@chakra-ui/react";
import React from "react";
import BetHistory from "../Modules/BetHistory";
import Withdrawal from "../Modules/Withdrawal";

const AccountInfoTab = () => {
	return (
		<Box mt="2">
			<Text>My Balance</Text>
			<Divider mb="3" />
			<Accordion allowToggle>
				<AccordionItem border="none">
					<AccordionButton>
						<Box as="span" flex="1" textAlign="left">
							Withdraw
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Withdrawal />
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem border="none">
					<AccordionButton>
						<Box as="span" flex="1" textAlign="left">
							My Account Info
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<BetHistory />
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
};

export default AccountInfoTab;
