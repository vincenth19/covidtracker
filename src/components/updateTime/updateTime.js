import { Flex, Text, Spinner } from "@chakra-ui/react";

export default function UpdateTime({ date, ...props }) {
  return (
    <Flex
      mt={[6, 3]}
      mb={[3, 0]}
      wrap="wrap"
      alignItems="center"
      {...props}
      fontSize="0.9rem"
    >
      <Text color="gray.500" fontWeight="semibold" f>
        TERAKHIR DIPERBARUI:{" "}
      </Text>
      <Text color="gray.600" ml={1}>
        {date !== 0 ? <strong>{date}</strong> : <Spinner />}
      </Text>
    </Flex>
  );
}
