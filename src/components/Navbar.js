import { useRef } from "react";
import {
  Flex,
  Text,
  Spinner,
  useDisclosure,
  Button,
  Stack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { icons } from "../icons";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiExternalLinkLine } from "react-icons/ri";

export default function Navbar({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <Flex
      boxShadow="md"
      borderBottomRadius={10}
      bg="white"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
    >
      <Flex wrap="wrap" justifyContent="center" align="center">
        {icons[0]}
        <Heading as="h1" size="lg" ml={3}>
          <strong>CovidTracker</strong>
        </Heading>
      </Flex>
      <Spacer />
      <Button
        display={{ base: "block", md: "none" }}
        color="grey.500"
        onClick={handleToggle}
      >
        <RiMenu3Fill />
      </Button>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={5}
      >
        <Link to="/">Home</Link>
        <Link to="/data-provinsi">Data Provinsi</Link>
        {/* <Link>RS Rujukan</Link> */}
        <Link href="https://google.com">
          <Flex align="center">
            About Me <RiExternalLinkLine ml={7} />
          </Flex>
        </Link>
        <UpdateTime
          date={data && new Date(data.tanggal).toLocaleDateString()}
        />
      </Stack>
    </Flex>
  );
}

function UpdateTime({ date, ...props }) {
  return (
    <Flex {...props} color="gray.500">
      <Text>Last Data Update: </Text>
      <Text ml={2}>{date !== 0 ? <strong>{date}</strong> : <Spinner />}</Text>
    </Flex>
  );
}
