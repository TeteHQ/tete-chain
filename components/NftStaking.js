import {  SimpleGrid } from "@chakra-ui/react";

import NftStake from "./NftStake";
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())


export default function NftStaking() {

  const { data, error } = useSWR('/api/nfts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  
  return (
    <>
        

        <SimpleGrid columns={[2, null, 3]} spacing={5} py="2">
          {data.map((nft,i)=>
            (
              <>
              <NftStake key={i} nft={nft}
            id={nft.id}
            title={nft.title}
            description={nft.description}
            chainLogo={nft.chainLogo}
            value={nft.value}
            href="/"
            bgImage={nft.bgImage}
          />
            </>  
            )
          )}       

        </SimpleGrid>  
    </>
  );
}

