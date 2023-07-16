import { Box, Heading, Text } from "@chakra-ui/react";
import { MdReportProblem } from "react-icons/md";

export default function ApiError({ errorMessage, errorTitle }) {
  return (
    <Box mt={5} bg="gray.100" borderRadius={10} p={5} align="center">
      <Text color="yellow.500" fontSize="6xl" my={3}>
        <MdReportProblem />
      </Text>
      <Heading fontSize="lg">{errorTitle}</Heading>
      <Text>{JSON.stringify(errorMessage)}</Text>
    </Box>
  );
}
