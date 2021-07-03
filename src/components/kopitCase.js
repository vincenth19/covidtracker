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

import {
  RiVirusLine,
  RiVirusFill,
  RiSurgicalMaskFill,
  RiSkullFill,
  RiSkullLine,
} from "react-icons/ri";

export default function Vaccination({
  caseData,
  caseYesterday,
  changesCounter,
  ...props
}) {
  return (
    <Box {...props}>
      <HStack pb={2}>
        <Text fontSize="4xl" color="teal.400">
          <RiSurgicalMaskFill />
        </Text>
        <Text fontSize="lg">
          <strong>Kasus COVID-19</strong>
        </Text>
      </HStack>

      <Flex flexWrap="wrap" alignContent="stretch">
        {/* satu */}
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
            <Box p={2} bg="red.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="red.800">
                <RiVirusFill />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                TOTAL KASUS POSITIF
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.positif_kumulatif.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(
                      caseData.positif_kumulatif,
                      caseYesterday.positif_kumulatif
                    ) > 0 ? (
                      <StatArrow type="increase" color="red.500" />
                    ) : (
                      <StatArrow type="decrease" color="teal.500" />
                    )}
                    {changesCounter(
                      caseData.positif_kumulatif,
                      caseYesterday.positif_kumulatif
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
        {/* hr ini */}
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
            <Box p={2} bg="red.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="red.800">
                <RiVirusLine />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                KASUS HARI INI
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.positif.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(caseData.positif, caseYesterday.positif) >
                    0 ? (
                      <StatArrow type="increase" color="red.500" />
                    ) : (
                      <StatArrow type="decrease" color="teal.500" />
                    )}
                    {changesCounter(caseData.positif, caseYesterday.positif)} %
                  </StatHelpText>
                </>
              ) : (
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              )}
            </Stat>
          </Flex>
        </Box>
        {/* kematian */}
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
            <Box p={2} bg="gray.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="gray.800">
                <RiSkullFill />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                TOTAL KEMATIAN
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.meninggal_kumulatif.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(
                      caseData.meninggal_kumulatif,
                      caseYesterday.meninggal_kumulatif
                    ) > 0 ? (
                      <StatArrow type="increase" color="red.500" />
                    ) : (
                      <StatArrow type="decrease" color="teal.500" />
                    )}
                    {changesCounter(
                      caseData.meninggal_kumulatif,
                      caseYesterday.meninggal_kumulatif
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
        {/* kematian hr ini */}
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
            <Box p={2} bg="gray.100" borderRadius={10} mr={4}>
              <Text fontSize="2rem" color="gray.800">
                <RiSkullLine />
              </Text>
            </Box>
            <Stat>
              <StatLabel fontSize="0.65em" color="gray.500">
                KEMATIAN HARI INI
              </StatLabel>
              {caseData ? (
                <>
                  <StatNumber>
                    {caseData.meninggal.toLocaleString("en-US")}
                  </StatNumber>
                  {}
                  <StatHelpText>
                    {changesCounter(
                      caseData.meninggal,
                      caseYesterday.meninggal
                    ) > 0 ? (
                      <StatArrow type="increase" color="red.500" />
                    ) : (
                      <StatArrow type="decrease" color="teal.500" />
                    )}
                    {changesCounter(
                      caseData.meninggal,
                      caseYesterday.meninggal
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
      </Flex>
    </Box>
  );
}
