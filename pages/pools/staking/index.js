import {  Flex,  SimpleGrid, Text } from "@chakra-ui/react";

import Page from "../../../components/Page";
import NftStaking from "../../../components/NftStaking";
import SearchField from "../../../components/SearchField";

export default function Realtime({ sidebar }) {
  return (
    <>
      <Page title=" NFT Staking" sidebar={sidebar}>
        <Flex direction="column" justifyContent="space-between" color="white">
          <Flex direction='row' justifyContent="space-between" alignItems='center'>
          <Text my="2" id="live" fontSize="2xl" fontWeight="bold">
            NFT Staking
          </Text>
          <SearchField/>
          </Flex>
          
          <Text pl="2" mt="4" id="live" fontSize="md" fontWeight="thin">
            Crypto Punk
          </Text>
        </Flex>
        
        <SimpleGrid columns={[2, null, 3]} spacing={5} py="2">
          <NftStaking
            id='1'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
          <NftStaking
          id='2'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget2.png"
          />
          <NftStaking
          id='3'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
          <NftStaking
          id='4'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget2.png"
          />
          <NftStaking
          id='5'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
          <NftStaking
          id='6'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget2.png"
          />
          <NftStaking
          id='7'
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/staking/7"
            bgImage="/widget1.png"
          />
        </SimpleGrid>
      </Page>
    </>
  );
}

