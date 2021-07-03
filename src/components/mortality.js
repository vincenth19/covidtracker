import {
  HStack,
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  SkeletonText,
} from "@chakra-ui/react";
import { RiSyringeFill } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";

export default function Mortality({ mortData }) {
  return (
    <>
      <HStack py={3}>
        <Text fontSize="4xl" color="blue.400">
          <RiSyringeFill />
        </Text>
        <Text fontSize="lg">
          <strong>Vaksinasi</strong>
        </Text>
      </HStack>
      <Flex flexWrap="wrap">
        {/* total vaksin */}
        <Box
          mr={2}
          mb={2}
          minW={{ lg: "24.15%", md: "32%", sm: "48%", base: "100%" }}
          p={5}
          borderRadius={5}
          boxShadow="md"
          bg="white"
        >
          <Flex alignContent="center" align="center">
            <Box p={2} bg="blue.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="blue.800">
                <BiTargetLock />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                {"SASARAN VAKSINASI TAHAP 1 & 2"}
              </StatLabel>
              {vaccData ? (
                <>
                  <StatNumber>
                    {vaccData.totalsasaran.toLocaleString("en-US")}
                  </StatNumber>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
