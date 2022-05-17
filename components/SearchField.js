import {Box, Flex, Input, InputGroup,InputLeftElement} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import React from "react";

export default function SearchField() {
  return (
    <>
      <Flex mt='2'>
          <Box>
          <InputGroup >
          <Input   variant='filled' placeholder='Search' w='30vh' _placeholder={{ opacity: 1, color: 'gray.500' }}/>
          <InputLeftElement
      pointerEvents='none'
      
    >{<SearchIcon  w='10' h='5' color='gray.700'  />}</InputLeftElement>
          </InputGroup>
          </Box>
      </Flex>
    </>
  );
}
