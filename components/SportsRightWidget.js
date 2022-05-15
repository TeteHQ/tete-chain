import {
  Badge,
  Box,
  Flex,
  Image,
  Progress,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Button, Card, CardBody, CardHeader } from "@saas-ui/react";

export default function EventCardRightWidget({
  time = 60,
  category = "Sports / Football / EPL",
  teams = [],
  scores = [],
  isLive = true,
  is2ndHalf = false,
}) {
  return (
    <>
      <Card p="1" my="4" w="full" bg="tete.400" color="white">
        {/* <CardHeader p="0">
          
        </CardHeader> */}
        <CardBody>
          <Flex direction="column">
            <Flex direction="row" justifyContent="space-between" alignItems="center">
              <Image
                m="0.5"
                src="/teams/chelsea.png"
                w="60px"
                h="50px"
                alt="team"
              />
              <Text mx="2" align="center" fontSize="lg" fontWeight="bold">
                vs
              </Text>
              <Image m="0.5" src="/teams/manu.png" w="60px" h="50px" alt="team" />
            </Flex>

            <Flex justifyContent="space-between">
              <Text fontSize="sm" align="left">
                Chelsea
              </Text>
              <Text fontSize="sm" align="right">
                Man. United
              </Text>
            </Flex>

            <Flex justifyContent="space-around">
              <Box>
                <Text fontWeight="bold" fontSize="xl" align="center">
                  0
                </Text>
              </Box>
              <Text fontWeight="bold" fontSize="xl" align="center">
                4
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
