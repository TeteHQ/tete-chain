import {  Flex,  SimpleGrid, Text } from "@chakra-ui/react";

import Page from "../../components/Page";
import NftStaking from "../../components/NftStaking";

export default function Realtime({ sidebar }) {
  return (
    <>
      <Page title=" NFT Staking" sidebar={sidebar}>
        <Flex direction="column" justifyContent="space-between" color="white">
          
          <Text my="2" id="live" fontSize="2xl" fontWeight="bold">
            NFT Staking
          </Text>
          <Text pl="2" mt="4" id="live" fontSize="md" fontWeight="thin">
            Crypto Punk
          </Text>
        </Flex>
        
        <SimpleGrid columns={[2, null, 3]} spacing={5} py="2">
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget2.png"
          />
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget2.png"
          />
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget2.png"
          />
          <NftStaking
            title="Crypto Punk"
            price="Price"
            description="PunkEE Punk"
            chainLogo="/eth.png"
            value="0.004"
            href="/"
            bgImage="/widget1.png"
          />
        </SimpleGrid>
      </Page>
    </>
  );
}
