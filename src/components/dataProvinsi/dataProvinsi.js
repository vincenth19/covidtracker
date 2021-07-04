import { Heading, Box, Text } from "@chakra-ui/react";
import { BsConeStriped } from "react-icons/bs";
export default function DataProvinsi() {
  return (
    <Box my={10} bg="gray.100" borderRadius={10} p={5} align="center">
      <Text color="orange.500" fontSize="6xl" my={3}>
        <BsConeStriped />
      </Text>
      <Heading>Coming soon!</Heading>
    </Box>
  );
}
