import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export default function MobileMenu({ updateTime }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button
        display={{ base: "block", md: "none" }}
        ref={btnRef}
        color="grey.500"
        onClick={onOpen}
      >
        <RiMenu3Fill />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CovidTracker</DrawerHeader>

          <DrawerBody>
            <Text>{updateTime}</Text>
            <Stack mt={4} align="right" spacing={5}>
              <Button
                display={{ base: "block", md: "none" }}
                ref={btnRef}
                colorScheme="linkedin"
                variant="link"
                width="100%"
                onClick={console.log("btn1")}
              >
                <Text align="left">Link 1</Text>
              </Button>
              <Button
                display={{ base: "block", md: "none" }}
                ref={btnRef}
                colorScheme="linkedin"
                variant="link"
                width="100%"
                onClick={console.log("btn2")}
              >
                <Text align="left">Link 2</Text>
              </Button>
              <Button
                display={{ base: "block", md: "none" }}
                ref={btnRef}
                colorScheme="linkedin"
                variant="link"
                width="100%"
                onClick={console.log("btn3")}
              >
                <Text align="left">Link 3</Text>
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Text>By Vincent Haryadi</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
