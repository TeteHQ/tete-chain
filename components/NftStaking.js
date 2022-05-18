import {  SimpleGrid } from "@chakra-ui/react";

import NftStake from "./NftStake";
import { useEffect, useState } from "react";

export default function NftStaking() {

  const [nfts, setNfts]=useState([])
    
    const fetchNfts= async()=>{
      const res= await fetch('/api/nfts')
      const data = await res.json()
      setNfts(data)
    }

    useEffect(()=>{
      fetchNfts()
    },[])
  return (
    <>
        

        <SimpleGrid columns={[2, null, 3]} spacing={5} py="2">
          {nfts.map((nft)=>{
            return(
              <>
              <NftStake
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
          })}       

        </SimpleGrid>  
    </>
  );
}

