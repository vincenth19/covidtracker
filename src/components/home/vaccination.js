import {
  HStack,
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  SkeletonText,
  SimpleGrid,
} from "@chakra-ui/react";
import { RiSyringeFill } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";

export default function Vaccination({ vaccData, ...props }) {
  let vaccArr = [];

  if (vaccData) {
    let {
      sasaranvaksinsdmk,
      sasaranvaksinlansia,
      sasaranvaksinpetugaspublik,
      sembuh_kumulatif,
      lastUpdate,
      ...data
    } = vaccData;

    vaccArr = [
      {
        iconBg: "blue.100",
        iconColor: "blue.500",
        fontSize: "2rem",
        icon: <BiTargetLock />,
        marginx: "0",
        cardTitle: "TOTAL TARGET FASE 1 & 2",
        data: data.totalsasaran,
      },
      {
        iconBg: "purple.100",
        iconColor: "purple.500",
        fontSize: "1.4rem",
        icon: <strong>1</strong>,
        marginx: "10px",
        cardTitle: "TOTAL VAKSINASI DOSIS 1",
        data: data.vaksinasi1,
      },
      {
        iconBg: "purple.100",
        iconColor: "purple.500",
        fontSize: "1.4rem",
        icon: <strong>2</strong>,
        marginx: "10px",
        cardTitle: "TOTAL VAKSINASI DOSIS 2",
        data: data.vaksinasi2,
      },
    ];
  }

  return (
    <Box {...props}>
      <HStack pb={2}>
        <Text fontSize="4xl" color="blue.400">
          <RiSyringeFill />
        </Text>
        <Text fontSize="lg">
          <strong>Vaksinasi</strong>
        </Text>
      </HStack>
      <SimpleGrid
        minChildWidth={{ lg: "32%", md: "100%", sm: "100%", base: "100%" }}
        spacing="2%"
      >
        {vaccData ? (
          vaccArr.map((key, index) => {
            return (
              <Box
                px={5}
                py={{ lg: "5", md: "5", sm: "2.5", base: "2" }}
                borderRadius={5}
                boxShadow="md"
                bg="white"
                key={index}
              >
                <Flex alignContent="center" align="center">
                  <Box p={2} bg={key.iconBg} borderRadius={10} mr={4}>
                    <Text
                      fontSize={key.fontSize}
                      color={key.iconColor}
                      mx={key.marginx}
                    >
                      {key.icon}
                    </Text>
                  </Box>
                  <Stat>
                    <StatLabel fontSize="0.65em" color="gray.500">
                      {key.cardTitle}
                    </StatLabel>
                    <StatNumber>{key.data.toLocaleString("en-US")}</StatNumber>
                  </Stat>
                </Flex>
              </Box>
            );
          })
        ) : (
          <>
            <Box p={5} borderRadius={5} boxShadow="md" bg="white">
              <SkeletonText noOfLines={3} spacing="4" />
            </Box>
            <Box p={5} borderRadius={5} boxShadow="md" bg="white">
              <SkeletonText noOfLines={3} spacing="4" />
            </Box>
            <Box p={5} borderRadius={5} boxShadow="md" bg="white">
              <SkeletonText noOfLines={3} spacing="4" />
            </Box>
            <Box p={5} borderRadius={5} boxShadow="md" bg="white">
              <SkeletonText noOfLines={3} spacing="4" />
            </Box>
          </>
        )}
      </SimpleGrid>
    </Box>
  );
}
