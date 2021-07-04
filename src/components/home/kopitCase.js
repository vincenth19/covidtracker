import {
  HStack,
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  StatArrow,
  SimpleGrid,
  SkeletonText,
} from "@chakra-ui/react";

import {
  RiVirusLine,
  RiVirusFill,
  RiSurgicalMaskFill,
  RiEmotionUnhappyFill,
  RiEmotionUnhappyLine,
} from "react-icons/ri";

export default function Vaccination({
  caseToday,
  caseYesterday,
  changesCounter,
  ...props
}) {
  let today = {};
  let yesterday = {};
  let todayArr = [];
  let yesterdayArr = [];
  //rearranging and adding data key value for easy looping
  if (caseToday && caseYesterday) {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        let {
          jumlah_dirawat,
          jumlah_sembuh,
          jumlah_dirawat_kum,
          jumlah_sembuh_kum,
          key,
          key_as_string,
          doc_count,
          ...data1
        } = caseToday;
        today = data1;
      } else if (i === 1) {
        let {
          jumlah_dirawat,
          jumlah_sembuh,
          jumlah_dirawat_kum,
          jumlah_sembuh_kumu,
          key,
          key_as_string,
          doc_count,
          ...data2
        } = caseYesterday;
        yesterday = data2;
      }
    }

    todayArr = [
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusFill />,
        cardTitle: "TOTAL KASUS POSITIF",
        data: today.jumlah_positif_kum.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
      },
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusLine />,
        cardTitle: "KASUS POSITIF HARI INI",
        data: today.jumlah_positif.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <RiEmotionUnhappyFill />,
        cardTitle: "TOTAL KEMATIAN",
        data: today.jumlah_meninggal_kum.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <RiEmotionUnhappyLine />,
        cardTitle: "KEMATIAN HARI INI",
        data: today.jumlah_meninggal.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
      },
    ];
    yesterdayArr = [
      { data: yesterday.jumlah_positif_kum.value },
      { data: yesterday.jumlah_positif.value },
      { data: yesterday.jumlah_meninggal_kum.value },
      { data: yesterday.jumlah_meninggal.value },
    ];
  }

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
      {/* {{lg: "23.5%", md: "47%", sm: "47%", base: "94%"}} */}
      <SimpleGrid
        minChildWidth={{ lg: "23.5%", md: "47%", sm: "47%", base: "94%" }}
        spacing="2%"
      >
        {caseToday ? (
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
                        <StatArrow
                          type="increase"
                          color={key.increaseArrowColor}
                        />
                      ) : (
                        <StatArrow
                          type="decrease"
                          color={key.decreaseArrowColor}
                        />
                      )}
                      {changesCounter(key.data, yesterdayArr[index].data)}%
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

      {/* <Flex flexWrap="wrap" justifyContent="stretch">
        
      </Flex> */}
    </Box>
  );
}
