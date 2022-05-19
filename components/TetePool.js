import {
  Box,
  Button,
  Flex,
  Text,
  
} from "@chakra-ui/react";
import { useModals } from "@saas-ui/react";
import PlaceBetModal from "./PlaceBetModal";


export default function TetePool({
  
  isLive,
  placedBets,
  league,
  date,
  time,
  item,
}) {
    const modals = useModals()
  return (
    <>
      <Box>
        <Box
          mb="0.5"
          bg="gray.600"
          textAlign="center"
          h="30vh"
          w="xs-1"
       
          textColor="white"
        >
          <Flex fontSize="xs" justifyContent="space-between" alignItems="start">
            <Box
              px="2"
              py="1"
              roundedBottomRight="md"
              bgColor={isLive ? "#C20B0B" : "green"}
            >
              <Text fontWeight="thin">{isLive ? "Live" : "Completed"}</Text>
            </Box>

            <Box px="2" py="2" roundedBottomLeft="md" bgColor="#7006B1">
              <Text fontWeight="thin">{placedBets}</Text>
            </Box>
          </Flex>
          <Flex
            pl="4"
            direction="column"
            textAlign="left"
            fontSize="sm"
            justifyContent="space-between"
          >
            <Text fontWeight="extrabold">{league}</Text>

            <Text fontSize="xs" fontWeight="thin">
              {" "}
              {date} {time}
            </Text>
          </Flex>
          <Box mt="4">
            <Text pl="4" textAlign="left" fontSize="lg" fontWeight="extrabold">
              {item}
            </Text>
          </Box>
          <Box mt="4">
            <Text
              textAlign="right"
              pl="4"
              pr="1"
              fontSize="8px"
              fontWeight="thin"
            >
              Created by: vct 500y{" "}
            </Text>
          </Box>
        </Box>

       
        <Button
          onClick={() =>
        modals.open({
          
          body: <PlaceBetModal item={[item]}/>,
          bgColor:"tete",
          size:"md"})}
          
          bgColor="#1638B0"
          w="full"
          roundedTop="none"
          _hover="none"
          textColor="white" fontWeight="extrabold"
        >
            Place Bet
        </Button>
      
        
      </Box>
    </>
  );
}
