import useSWR from "swr";
import { SimpleGrid } from "@chakra-ui/react";

import StakeModule from "./StakeModule";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StakeList() {
    const { data, error } = useSWR("/api/nfts", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
            <SimpleGrid
                columns={[2, null, 3]}
                spacing={{ base: "3", md: 5 }}
                py="2"
            >
                {data.map((nft, i) => (
                    <>
                        <StakeModule
                            key={i}
                            nft={nft}
                            id={nft.id}
                            title={nft.title}
                            description={nft.description}
                            chainLogo={nft.chainLogo}
                            value={nft.value}
                            href="/"
                            bgImage={nft.bgImage}
                        />
                    </>
                ))}
            </SimpleGrid>
        </>
    );
}
