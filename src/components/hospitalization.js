import {
  HStack,
  Flex,
  Box,
  Text,
  SkeletonText,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  StatArrow,
} from "@chakra-ui/react";
import { MdLocalHospital } from "react-icons/md";
import {
  RiEmotionUnhappyFill,
  RiEmotionUnhappyLine,
  RiHeartFill,
  RiHeartLine,
} from "react-icons/ri";

export default function Mortality({
  caseData,
  caseYesterday,
  changesCounter,
  ...props
}) {
  return (
    <Box {...props}>
      <HStack pb={2}>
        <Text fontSize="4xl" color="red.400">
          <MdLocalHospital />
        </Text>
        <Text fontSize="lg">
          <strong>Rawat Inap</strong>
        </Text>
      </HStack>

      <Flex flexWrap="wrap" alignContent="stretch">
        {/* total dirawat */}
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
            <Box p={2} bg="yellow.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="yellow.800">
                <RiEmotionUnhappyFill />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                TOTAL RAWATAN
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.dirawat_kumulatif.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(
                      caseData.dirawat_kumulatif,
                      caseYesterday.dirawat_kumulatif
                    ) > 0 ? (
                      <StatArrow type="increase" color="red.500" />
                    ) : (
                      <StatArrow type="decrease" color="teal.500" />
                    )}
                    {changesCounter(
                      caseData.dirawat_kumulatif,
                      caseYesterday.dirawat_kumulatif
                    )}{" "}
                    %
                  </StatHelpText>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
        {/* dirawat hr ini */}
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
            <Box p={2} bg="yellow.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="yellow.800">
                <RiEmotionUnhappyLine />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                RAWATAN HARI INI
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.dirawat.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(caseData.dirawat, caseYesterday.dirawat) >
                    0 ? (
                      <StatArrow type="increase" color="red.500" />
                    ) : (
                      <StatArrow type="decrease" color="teal.500" />
                    )}
                    {changesCounter(caseData.dirawat, caseYesterday.dirawat)} %
                  </StatHelpText>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
        {/* total KESEMBUHAN */}
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
            <Box p={2} bg="teal.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="teal.800">
                <RiHeartFill />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                TOTAL KESEMBUHAN
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.sembuh_kumulatif.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(
                      caseData.sembuh_kumulatif,
                      caseYesterday.sembuh_kumulatif
                    ) > 0 ? (
                      <StatArrow type="increase" />
                    ) : (
                      <StatArrow type="decrease" />
                    )}
                    {changesCounter(
                      caseData.sembuh_kumulatif,
                      caseYesterday.sembuh_kumulatif
                    )}{" "}
                    %
                  </StatHelpText>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
        {/* KESEMBUHAN hr ini */}
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
            <Box p={2} bg="teal.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="teal.800">
                <RiHeartLine />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                KESEMBUHAN HARI INI
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.sembuh.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(caseData.sembuh, caseYesterday.sembuh) >
                    0 ? (
                      <StatArrow type="increase" />
                    ) : (
                      <StatArrow type="decrease" />
                    )}
                    {changesCounter(caseData.sembuh, caseYesterday.sembuh)} %
                  </StatHelpText>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
