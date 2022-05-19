import React from "react";
import {
    Drawer as BaseDrawer,
    DrawerOverlay,
    DrawerContent,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Drawer({ open, close }) {
    return (
        <BaseDrawer isOpen={open} onClose={close} placement="left">
            <DrawerOverlay />
            <DrawerContent>
                <Navbar w="full" borderRight="none" />
            </DrawerContent>
        </BaseDrawer>
    );
}
