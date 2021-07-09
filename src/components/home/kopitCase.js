import {
  HStack,
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  SimpleGrid,
  SkeletonText,
} from "@chakra-ui/react";

import { RiVirusFill, RiSurgicalMaskFill } from "react-icons/ri";

import { GiTombstone } from "react-icons/gi";
import CountUp from "react-countup";

export default function Vaccination({ caseData, changesCounter, ...props }) {
  let todayArr = [];
  let today, dMin1;
  //rearranging and adding data key value for easy looping
  if (caseData) {
    let localData = JSON.parse(JSON.stringify(caseData));
    today = localData.pop();
    dMin1 = localData.pop();
    todayArr = [
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusFill />,
        cardTitle: "TOTAL KASUS POSITIF",
        data: today.positif_kumulatif,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: {
          totalYtd: today.positif,
          percentage: changesCounter(
            today.positif_kumulatif,
            dMin1.positif_kumulatif
          ),
        },
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <GiTombstone />,
        cardTitle: "TOTAL KEMATIAN",
        data: today.meninggal_kumulatif,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: {
          totalYtd: today.meninggal,
          percentage: changesCounter(
            today.meninggal_kumulatif,
            dMin1.meninggal_kumulatif
          ),
        },
      },
    ];
  }

  return (
    <Box {...props}>
      <HStack>
        <Text fontSize="4xl" color="teal.400">
          <RiSurgicalMaskFill />
        </Text>
        <Text fontSize="lg">
          <strong>Kasus COVID-19</strong>
        </Text>
      </HStack>
      {/* {{lg: "23.5%", md: "47%", sm: "47%", base: "94%"}} */}
      <SimpleGrid
        mt={2}
        minChildWidth={["94%", "47%", "47%", "23.5%"]}
        spacing="2%"
      >
        {today ? (
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
                      <CountUp separator="." end={key.data} />
                    </StatNumber>
                    <Flex alignItems="center" fontSize="0.8rem">
                      {key.changes.percentage > 0 ? (
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
                      <Flex color="gray.600">
                        <Text>
                          <CountUp separator="." end={key.changes.totalYtd} />
                        </Text>
                        <Text ml={1}>
                          {"("}
                          <CountUp
                            separator="."
                            decimal=","
                            decimals={2}
                            suffix="%"
                            end={key.changes.percentage}
                          />
                          {")"}
                        </Text>
                      </Flex>
                    </Flex>
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
          </>
        )}
      </SimpleGrid>

      {/* <Flex flexWrap="wrap" justifyContent="stretch">
        
      </Flex> */}
    </Box>
  );
}
