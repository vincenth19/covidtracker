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
import CountUp from "react-countup";

export default function Mortality({
  caseToday,
  caseYesterday,
  changesCounter,
  ...props
}) {
  let todayArr = [];
  let yesterdayArr = [];

  if (caseToday && caseYesterday) {
    todayArr = [
      {
        iconBg: "orange.100",
        iconColor: "orange.500",
        icon: <RiThermometerFill />,
        cardTitle: "TOTAL RAWATAN",
        data: caseToday.jumlah_dirawat_kum.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: changesCounter(
          caseToday.jumlah_dirawat_kum.value,
          caseYesterday.jumlah_dirawat_kum.value
        ),
      },
      {
        iconBg: "orange.100",
        iconColor: "orange.500",
        icon: <RiThermometerLine />,
        cardTitle: "RAWATAN HARI INI",
        data: caseToday.jumlah_dirawat.value,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: changesCounter(
          caseToday.jumlah_dirawat.value,
          caseYesterday.jumlah_dirawat.value
        ),
      },
      {
        iconBg: "teal.100",
        iconColor: "teal.500",
        icon: <RiHeartFill />,
        cardTitle: "TOTAL KESEMBUHAN",
        data: caseToday.jumlah_sembuh_kum.value,
        increaseArrowColor: "teal.500",
        decreaseArrowColor: "red.500",
        changes: changesCounter(
          caseToday.jumlah_sembuh_kum.value,
          caseYesterday.jumlah_sembuh_kum.value
        ),
      },
      {
        iconBg: "teal.100",
        iconColor: "teal.500",
        icon: <RiHeartLine />,
        cardTitle: "KESEMBUHAN HARI INI",
        data: caseToday.jumlah_sembuh.value,
        increaseArrowColor: "teal.500",
        decreaseArrowColor: "red.500",
        changes: changesCounter(
          caseToday.jumlah_sembuh.value,
          caseYesterday.jumlah_sembuh.value
        ),
      },
    ];
    yesterdayArr = [
      { data: caseYesterday.jumlah_dirawat_kum.value },
      { data: caseYesterday.jumlah_dirawat.value },
      { data: caseYesterday.jumlah_sembuh_kum.value },
      { data: caseYesterday.jumlah_sembuh.value },
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
                        end={key.changes}
                      />
                      %
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
