import { Heading, Box, Text } from "@chakra-ui/react";
import { BsConeStriped } from "react-icons/bs";
import Table from "./TableProvince";
export default function DataProvinsi({ data, ...props }) {
  return (
    <Box
      {...props}
      my={10}
      bg="gray.100"
      borderRadius={10}
      p={5}
      align="center"
    >
      <Text color="orange.500" fontSize="6xl" my={3}>
        <BsConeStriped />
      </Text>
      <Heading>Coming soon!</Heading>
      {/* <Table tableData={data} /> */}
    </Box>
  );
}
