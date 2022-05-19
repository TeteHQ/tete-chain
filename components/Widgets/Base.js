import { Box, Text } from "@chakra-ui/react";
import { Card, Link } from "@saas-ui/react";

export default function Base({ href, title, children, ...rest }) {
    return (
        <Box my="2">
            <Link href={href}>
                <Card h="64" w="full" bgSize="cover" bgPos="center" {...rest}>
                    {children}
                </Card>
            </Link>
            <Box textAlign="right">
                <Text as="i" fontSize="sm" fontWeight="extrabold">
                    {title}
                </Text>
            </Box>
        </Box>
    );
}
