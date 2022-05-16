import React from "react";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function NavDrawer({open,close}) {
  return (
    
      <Drawer
          isOpen={open}
          onClose={close}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <Navbar w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
    
  );
}
