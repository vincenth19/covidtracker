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

export default function Vaccination({ vaccData }) {
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
          minW={{ lg: "32%", md: "100%", sm: "100%", base: "100%" }}
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
        {/* total vaksin 1*/}
        <Box
          mr={2}
          mb={2}
          minW={{ lg: "32%", md: "100%", sm: "100%", base: "100%" }}
          p={5}
          borderRadius={5}
          boxShadow="md"
          bg="white"
        >
          <Flex alignContent="center" align="center">
            <Box p={2} bg="blue.100" borderRadius={10} mr={4}>
              <Text fontSize="1.5rem" color="blue.800" px={3}>
                <strong>1</strong>
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                {"TOTAL VAKSINASI 1"}
              </StatLabel>
              {vaccData ? (
                <>
                  <StatNumber>
                    {vaccData.vaksinasi1.toLocaleString("en-US")}
                  </StatNumber>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
        {/* total vaksin 2*/}
        <Box
          mr={2}
          mb={2}
          minW={{ lg: "32%", md: "100%", sm: "100%", base: "100%" }}
          p={5}
          borderRadius={5}
          boxShadow="md"
          bg="white"
        >
          <Flex alignContent="center" align="center">
            <Box p={2} bg="blue.100" borderRadius={10} mr={4}>
              <Text fontSize="1.5rem" color="blue.800" px={3}>
                <strong>2</strong>
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                {"TOTAL VAKSINASI 2"}
              </StatLabel>
              {vaccData ? (
                <>
                  <StatNumber>
                    {vaccData.vaksinasi2.toLocaleString("en-US")}
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
