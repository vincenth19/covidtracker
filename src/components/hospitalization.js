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
  SimpleGrid,
} from "@chakra-ui/react";
import { MdLocalHospital } from "react-icons/md";
import {
  RiThermometerFill,
  RiThermometerLine,
  RiHeartFill,
  RiHeartLine,
} from "react-icons/ri";

export default function Mortality({
  caseData,
  caseYesterday,
  changesCounter,
  ...props
}) {
  let today = {};
  let yesterday = {};
  let todayArr = [];
  let yesterdayArr = [];

  if (caseData && caseYesterday) {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        let {
          positif,
          positif_kumulatif,
          meninggal,
          meninggal_kumulatif,
          lastUpdate,
          tanggal,
          ...data1
        } = caseData;
        today = data1;
      } else if (i === 1) {
        let {
          positif,
          positif_kumulatif,
          meninggal,
          meninggal_kumulatif,
          lastUpdate,
          tanggal,
          ...data2
        } = caseYesterday;
        yesterday = data2;
      }
    }

    todayArr = [
      {
        iconBg: "orange.100",
        iconColor: "orange.500",
        icon: <RiThermometerFill />,
        cardTitle: "TOTAL RAWATAN",
        data: today.dirawat_kumulatif,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
      },
      {
        iconBg: "orange.100",
        iconColor: "orange.500",
        icon: <RiThermometerLine />,
        cardTitle: "RAWATAN HARI INI",
        data: today.dirawat,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
      },
      {
        iconBg: "teal.100",
        iconColor: "teal.500",
        icon: <RiHeartFill />,
        cardTitle: "TOTAL KESEMBUHAN",
        data: today.sembuh_kumulatif,
        increaseArrowColor: "teal.500",
        decreaseArrowColor: "red.500",
      },
      {
        iconBg: "teal.100",
        iconColor: "teal.500",
        icon: <RiHeartLine />,
        cardTitle: "KESEMBUHAN HARI INI",
        data: today.sembuh,
        increaseArrowColor: "teal.500",
        decreaseArrowColor: "red.500",
      },
    ];
    yesterdayArr = [
      { data: yesterday.dirawat_kumulatif },
      { data: yesterday.dirawat },
      { data: yesterday.sembuh_kumulatif },
      { data: yesterday.sembuh },
    ];
  }

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

      <SimpleGrid
        minChildWidth={{ lg: "23.5%", md: "47%", sm: "47%", base: "94%" }}
        spacing="2%"
      >
        {caseData ? (
          todayArr.map((key, index) => {
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
                    <Text fontSize="2rem" color={key.iconColor}>
                      {key.icon}
                    </Text>
                  </Box>
                  <Stat>
                    <StatLabel fontSize="0.65em" color="gray.500">
                      {key.cardTitle}
                    </StatLabel>
                    <StatNumber>{key.data.toLocaleString("en-US")}</StatNumber>
                    <StatHelpText>
                      {changesCounter(key.data, yesterdayArr[index].data) >
                      0 ? (
                        <StatArrow type="increase" color="red.500" />
                      ) : (
                        <StatArrow type="decrease" color="teal.500" />
                      )}
                      {changesCounter(key.data, yesterdayArr[index].data)} %
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
