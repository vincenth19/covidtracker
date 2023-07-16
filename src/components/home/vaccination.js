import { useEffect, useState } from "react";
import axios from "axios";
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
  StatArrow,
} from "@chakra-ui/react";
import { RiSyringeFill } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import CountUp from "react-countup";
import UpdateTime from "../updateTime/updateTime";
import ApiError from "../shared_comp/apiError/apiError";

export default function Vaccination({ changesCounter, ...props }) {
  const [vaccData, setVaccData] = useState([]);
  const [date, setDate] = useState(0);
  const [apiError, setApiError] = useState();
  const VACC_TARGET = 208265720;

  useEffect(() => {
    async function getVaccData() {
      await axios
        .get(
          "https://covidtracker-vincenth19-be.herokuapp.com/api/vaccination/"
        )
        .then((response) => {
          setDate(response.data.updateDate);
          setVaccData([
            {
              iconBg: "blue.100",
              iconColor: "blue.500",
              fontSize: "2rem",
              icon: <BiTargetLock />,
              marginx: "0",
              cardTitle: "TARGET VAKSINASI NASIONAL",
              data: VACC_TARGET,
              changes: {
                totalYtd: null,
                percentage: changesCounter(
                  VACC_TARGET,
                  response.data.total.dose1plus
                ),
              },
            },
            {
              iconBg: "purple.100",
              iconColor: "purple.500",
              fontSize: "1.4rem",
              icon: <strong>1</strong>,
              marginx: "10px",
              increaseArrowColor: "teal.500",
              decreaseArrowColor: "red.500",
              cardTitle: "TOTAL VAKSINASI 1+ DOSIS ",
              data: response.data.total.dose1plus,
              changes: {
                totalYtd: response.data.update.dose1,
                percentage: changesCounter(
                  response.data.total.dose1,
                  response.data.update.dose1
                ),
              },
            },
            {
              iconBg: "purple.100",
              iconColor: "purple.500",
              fontSize: "1.4rem",
              icon: <strong>2</strong>,
              marginx: "10px",
              increaseArrowColor: "teal.500",
              decreaseArrowColor: "red.500",
              cardTitle: "TOTAL VAKSINASI 2 DOSIS",
              data: response.data.total.dose2,
              changes: {
                totalYtd: response.data.update.dose2,
                percentage: changesCounter(
                  response.data.total.dose2,
                  response.data.update.dose2
                ),
              },
            },
          ]);
        })
        .catch((error) => {
          setApiError(error.toString());
          console.error("There was an error!", error);
        });
    }

    getVaccData();
  }, [changesCounter]);

  if (apiError) {
    return (
      <ApiError
        errorTitle="Ada masalah di API untuk mengambil data vaksinasi"
        errorMessage={apiError}
      />
    );
  } else {
    return (
      <Box {...props}>
        <HStack>
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
          {vaccData.length > 0 ? (
            vaccData.map((key, index) => {
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
                      <StatNumber>
                        <CountUp separator="." end={key.data} />
                      </StatNumber>
                      <Flex alignItems="center" fontSize="0.8rem">
                        {key.changes.percentage === null ? null : key.changes
                            .percentage > 0 ? (
                          key.data !== VACC_TARGET && (
                            <StatArrow
                              type="increase"
                              color={key.increaseArrowColor}
                            />
                          )
                        ) : (
                          <StatArrow
                            type="decrease"
                            color={key.decreaseArrowColor}
                          />
                        )}
                        <Flex color="gray.600">
                          <Text>
                            {key.changes.totalYtd && (
                              <CountUp
                                separator="."
                                end={key.changes.totalYtd}
                              />
                            )}
                          </Text>
                          <Text ml={1}>
                            {key.changes.percentage && (
                              <>
                                {"("}
                                <CountUp
                                  separator="."
                                  decimal=","
                                  decimals={2}
                                  suffix="%"
                                  end={key.changes.percentage}
                                />
                                {")"}
                              </>
                            )}
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
              <Box p={5} borderRadius={5} boxShadow="md" bg="white">
                <SkeletonText noOfLines={3} spacing="4" />
              </Box>
            </>
          )}
        </SimpleGrid>
        <Flex
          borderBottom="1px"
          borderBottomColor="gray.200"
          pb={[0, 2]}
          justifyContent="flex-end"
        >
          <UpdateTime date={date} />
        </Flex>
      </Box>
    );
  }
}
