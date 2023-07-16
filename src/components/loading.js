import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading({ minHeight, ...props }) {
  return (
    <Flex {...props} justifyContent="center" alignItems="center">
      <Spinner color="red.500" size="xl" />
    </Flex>
  );
}
