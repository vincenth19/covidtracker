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
import CountUp from "react-countup";

export default function Vaccination({
  caseToday,
  caseYesterday,
  changesCounter,
  ...props
}) {
  let todayArr = [];
  //rearranging and adding data key value for easy looping
  if (caseToday && caseYesterday) {
    todayArr = [
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusFill />,
        cardTitle: "TOTAL KASUS POSITIF",
        data: caseToday.jumlah_positif_kum.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: changesCounter(
          caseToday.jumlah_positif_kum.value,
          caseYesterday.jumlah_positif_kum.value
        ),
      },
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusLine />,
        cardTitle: "KASUS POSITIF HARI INI",
        data: caseToday.jumlah_positif.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: changesCounter(
          caseToday.jumlah_positif.value,
          caseYesterday.jumlah_positif.value
        ),
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <RiEmotionUnhappyFill />,
        cardTitle: "TOTAL KEMATIAN",
        data: caseToday.jumlah_meninggal_kum.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: changesCounter(
          caseToday.jumlah_meninggal_kum.value,
          caseYesterday.jumlah_meninggal_kum.value
        ),
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <RiEmotionUnhappyLine />,
        cardTitle: "KEMATIAN HARI INI",
        data: caseToday.jumlah_meninggal.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: changesCounter(
          caseToday.jumlah_meninggal.value,
          caseYesterday.jumlah_meninggal.value
        ),
      },
    ];
    // yesterdayArr = [
    //   { data: caseYesterday.jumlah_positif_kum.value },
    //   { data: caseYesterday.jumlah_positif.value },
    //   { data: caseYesterday.jumlah_meninggal_kum.value },
    //   { data: caseYesterday.jumlah_meninggal.value },
    // ];
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
                    <StatNumber>
                      <CountUp separator=" " end={key.data} />
                    </StatNumber>
                    <StatHelpText>
                      {key.changes > 0 ? (
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
                      <CountUp
                        separator=" "
                        decimal="."
                        decimals={2}
                        suffix="%"
                        end={key.changes}
                      />
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
