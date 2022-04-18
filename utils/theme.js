import { extendTheme } from "@chakra-ui/react";
import { baseTheme, createPalette } from "@saas-ui/react";
import "@fontsource/montserrat";
import "@fontsource/poppins";

export const theme = extendTheme(
    {
        fonts: {
            body: "Poppins",
            heading: "Montserrat",
        },
        config: {
            cssVarPrefix: "tete",
        },
        colors: {
            tete: {
                900: "#131A33", // header
                500: "#2A3149", // pool
                400: "#4C536B", // card
                300: "#4C536B", // button
                hover: "#1638B0",
                card: "linear-gradient(258.69deg, #1638B0 1.51%, #7107B1 49.81%)",
            },
        },
    },
    baseTheme
);
