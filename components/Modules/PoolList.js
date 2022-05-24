import { SimpleGrid } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import PoolModule from "./PoolModule";

export default function PoolList() {
    const [tete, setTete] = useState([]);

    const fetchTete = async () => {
        const res = await fetch(`/api/tete`);
        const data = await res.json();
        setTete(data);
    };

    useEffect(() => {
        fetchTete();
    }, []);
    return (
        <>
            <SimpleGrid
                columns={[2, null, 3]}
                spacing={{ base: 3, md: 10 }}
                py="2"
            >
                {tete.map((tete) => {
                    return (
                        <>
                            <PoolModule
                                id={tete.id}
                                isLive={tete.isLive}
                                placedBets={tete.placedBets}
                                league={tete.league}
                                date={tete.date}
                                time={tete.time}
                                item={tete.item}
                            />
                        </>
                    );
                })}
            </SimpleGrid>
        </>
    );
}
