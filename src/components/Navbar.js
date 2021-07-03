import { Flex, Box, VStack, Text, Spacer, Spinner } from "@chakra-ui/react";
import { icons } from "../icons";

export default function Navbar({ data }) {
  // let date = "";
  // let x = new Date(data.lastUpdate);
  // date = x.toLocaleString();

  return (
    <Flex boxShadow="md" padding={5} borderBottomRadius={10} bg="white">
      <Box borderBottomLeftRadius={10}>
        <Flex flexWrap="wrap">
          {icons[0]}
          <VStack ml={3} spacing={0} align="left">
            <Text fontSize={{ lg: "4xl", md: "xl" }}>
              <strong>KopitTracker</strong>
            </Text>
            <Text>By Vincent Haryadi</Text>
            {/* <Link>By Vincent Haryadi</Link> */}
          </VStack>
        </Flex>
      </Box>
      <Spacer />
      <Box align="right" verticalAlign="middle" color="gray.500">
        <VStack spacing={1} align="right">
          <Text fontSize={{ lg: "md", md: "sm" }}>Last Data Update</Text>
          <Text fontSize={{ lg: "xl", md: "md" }}>
            {data !== 0 ? <strong>{data}</strong> : <Spinner />}
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
