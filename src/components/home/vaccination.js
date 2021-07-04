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
  StatHelpText,
} from "@chakra-ui/react";
import { RiSyringeFill } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";

export default function Vaccination({ vaccData, ...props }) {
  let vaccArr = [];
  let targetNasional = 181554465;
  if (vaccData) {
    let {
      sasaranvaksinsdmk,
      sasaranvaksinlansia,
      sasaranvaksinpetugaspublik,
      sembuh_kumulatif,
      lastUpdate,
      totalsasaran,
      ...data
    } = vaccData;

    vaccArr = [
      {
        iconBg: "blue.100",
        iconColor: "blue.500",
        fontSize: "2rem",
        icon: <BiTargetLock />,
        marginx: "0",
        cardTitle: "TARGET VAKSINASI NASIONAL",
        data: targetNasional,
        helperText: "-",
      },
      {
        iconBg: "purple.100",
        iconColor: "purple.500",
        fontSize: "1.4rem",
        icon: <strong>1</strong>,
        marginx: "10px",
        cardTitle: "TOTAL VAKSINASI DOSIS 1",
        data: data.vaksinasi1,
        helperText: ((data.vaksinasi1 / targetNasional) * 100).toFixed(2),
      },
      {
        iconBg: "purple.100",
        iconColor: "purple.500",
        fontSize: "1.4rem",
        icon: <strong>2</strong>,
        marginx: "10px",
        cardTitle: "TOTAL VAKSINASI DOSIS 2",
        data: data.vaksinasi2,
        helperText: ((data.vaksinasi2 / targetNasional) * 100).toFixed(2),
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
                    <StatHelpText>
                      {key.helperText}
                      {index !== 0 ? "%" : null}
                    </StatHelpText>
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
