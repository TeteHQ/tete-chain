import { Box, Button, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { Card } from "@saas-ui/react";
import Link from "next/link";

export default function StakeModule({
    nft,
    href,
    id,
    title,
    value,
    description,
    chainLogo,
    children,
    ...rest
}) {
    return (
        <>
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
                    h="9vh"
                    w="xs-1"
                    py="1"
                    px="3"
                    textColor="white"
                >
                    <Flex fontSize="xs" justifyContent="space-between">
                        <Text fontWeight="thin">{title}</Text>

                        <Text fontWeight="thin">Price</Text>
                    </Flex>
                    <Flex fontSize="sm" justifyContent="space-between">
                        <Text fontWeight="extrabold">{description}</Text>

                        <Spacer />

                        <Image boxSize="20px" src={chainLogo} alt="eth" />

                        <Text fontWeight="extrabold"> {value}</Text>
                    </Flex>
                </Box>

                <Link
                    href="/pools/staking/[id]"
                    as={`/pools/staking/${nft.id}`}
                >
                    <a>
                        <Button
                            bgColor="#1638B0"
                            w="full"
                            roundedTop="none"
                            _hover="none"
                        >
                            <Text textColor="white" fontWeight="extrabold">
                                Stake Now
                            </Text>
                        </Button>
                    </a>
                </Link>
            </Box>
        </>
    );
}
