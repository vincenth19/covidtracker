import { useRef } from "react";
import {
  Flex,
  Box,
  VStack,
  Text,
  Spacer,
  Spinner,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
} from "@chakra-ui/react";
import { icons } from "../icons";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      boxShadow="md"
      padding={5}
      borderBottomRadius={10}
      bg="white"
      align="center"
    >
      <Box borderBottomLeftRadius={10}>
        <Flex flexWrap="wrap">
          {icons[0]}
          <VStack ml={3} spacing={0} align="left" justifyContent="center">
            <Text fontSize={{ lg: "3xl", md: "xl" }}>
              <strong>CovidTracker</strong>
            </Text>
            <Text>By Vincent Haryadi</Text>
            {/* <Link>By Vincent Haryadi</Link> */}
          </VStack>
        </Flex>
      </Box>
      <Spacer />
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
              <Text>
                <UpdateTime date={data} />
              </Text>
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
                  onClick={console.log("btn1")}
                >
                  <Text align="left">Link 2</Text>
                </Button>
                <Button
                  display={{ base: "block", md: "none" }}
                  ref={btnRef}
                  colorScheme="linkedin"
                  variant="link"
                  width="100%"
                  onClick={console.log("btn1")}
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
        <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
          <UpdateTime date={data} align="right" verticalAlign="middle" />
        </Box>
      </>
    </Flex>
  );
}

function UpdateTime({ date, ...props }) {
  return (
    <Box {...props} color="gray.500">
      <VStack justifyContent="center" spacing={1} align="right">
        <Text fontSize={{ lg: "md", md: "sm" }}>Last Data Update</Text>
        <Text fontSize={{ lg: "xl", md: "md" }}>
          {date !== 0 ? <strong>{date}</strong> : <Spinner />}
        </Text>
      </VStack>
    </Box>
  );
}
