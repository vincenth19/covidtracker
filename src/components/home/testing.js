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
import { RiTestTubeFill } from "react-icons/ri";
import CountUp from "react-countup";
import UpdateTime from "../updateTime/updateTime";
import ApiError from "../shared_comp/apiError/apiError";

export default function RiskProfile({ changesCounter, ...props }) {
  const [testingData, setTestingData] = useState();
  const [date, setDate] = useState(0);
  const [apiError, setApiError] = useState();

  useEffect(() => {
    async function getRiskData() {
      await axios
        .get("https://covidtracker-vincenth19-be.herokuapp.com/api/testing/")
        .then((response) => {
          setDate(response.data.updateDate);
          setTestingData([
            {
              cardTitle: "TOTAL TES",
              data: response.data.total.all,
              changes: {
                totalYtd: response.data.update.all,
                percentage: changesCounter(
                  response.data.total.all,
                  response.data.update.all
                ),
              },
            },
            {
              cardTitle: "TOTAL TES PCR + TCM",
              data: response.data.total.pcrTcm,
              changes: {
                totalYtd: response.data.update.pcrTcm,
                percentage: changesCounter(
                  response.data.total.pcrTcm,
                  response.data.update.pcrTcm
                ),
              },
            },
            {
              cardTitle: "TOTAL TES ANTIGEN",
              data: response.data.total.antigen,
              changes: {
                totalYtd: response.data.update.antigen,
                percentage: changesCounter(
                  response.data.total.antigen,
                  response.data.update.antigen
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

    getRiskData();
  }, [changesCounter]);

  if (apiError) {
    return (
      <ApiError
        errorTitle="Ada masalah di API untuk mengambil data test"
        errorMessage={apiError}
      />
    );
  } else {
    return (
      <Box mt={5} {...props}>
        <HStack>
          <Text fontSize="4xl" color="teal.600">
            <RiTestTubeFill />
          </Text>
          <Text fontSize="lg">
            <strong>Testing</strong>
          </Text>
        </HStack>
        <SimpleGrid
          minChildWidth={{ lg: "32%", md: "100%", sm: "100%", base: "100%" }}
          spacing="2%"
        >
          {testingData ? (
            testingData.map((key, index) => {
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
                    <Stat>
                      <StatLabel fontSize="0.65em" color="gray.500">
                        {key.cardTitle}
                      </StatLabel>
                      <StatNumber>
                        <CountUp separator="." end={key.data} />
                      </StatNumber>
                      <Flex alignItems="center" fontSize="0.8rem">
                        <StatArrow type="increase" color="teal.500" />
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
