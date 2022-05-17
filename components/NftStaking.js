import { Box, Button, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { Card, Link } from "@saas-ui/react";

export default function Widget({
  href,
  id,
  title,
  value,
  description,
  price,
  chainLogo,
  children,
  ...rest
}) {
  const clicked = async () => {
    const data = { title, description, id, chainLogo, value };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/nfts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
    
  };
 

  return (<>


    <Box m="2">
      <Link href={href}>
        <Card
          mb="0.5"
          rounded="none"
          h="64"
          w="xs-1"
          bgSize="cover"
          bgPos="center"
          {...rest}
        >
          {children}
        </Card>
      </Link>
      
      <Box
        mb="0.5"
        bg="gray.600"
        textAlign="center"
        h="8vh"
        w="xs-1"
        p="2"
        textColor="white"
      >
        <Flex fontSize="xs" justifyContent="space-between">
          <Text fontWeight="thin">{title}</Text>

          <Text fontWeight="thin">{price}</Text>
        </Flex>
        <Flex fontSize="sm" justifyContent="space-between">
          <Text fontWeight="extrabold">{description}</Text>

          <Spacer />

          <Image boxSize="20px" src={chainLogo} alt="eth" />

          <Text fontWeight="extrabold"> {value}</Text>
        </Flex>
      </Box>

      <Link href={`/pools/staking/${id}`}>
      <Button onClick={clicked} bgColor="#1638B0" w="full" roundedTop="none" _hover="none">
        <Text textColor="white" fontWeight="extrabold">
          Stake Now
        </Text>
      </Button>
      </Link>
      
    </Box>

  </>
    
  );
}
