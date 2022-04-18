import { Text } from "@chakra-ui/react";
import { Card, Link } from "@saas-ui/react";

export default function Widget({ href, title, children, ...rest }) {
    return (
        <>
            <Text fontSize="xl" fontWeight="extrabold">
                {title}
            </Text>
            <Link href={href}>
                <Card h="32" w="full" {...rest}>
                    {children}
                </Card>
            </Link>
        </>
    );
}
