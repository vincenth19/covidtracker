import {
  HStack,
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  SkeletonText,
} from "@chakra-ui/react";
import {
  RiSurgicalMaskFill,
  RiVirusFill,
  RiHeartFill,
  RiSyringeFill,
} from "react-icons/ri";
import { GiTombstone } from "react-icons/gi";
import CountUp from "react-countup";
import UpdateTime from "../updateTime/updateTime";
import ApiError from "../shared_comp/apiError/apiError";
import useCovidDataToday from "../../hooks/useCovidDataToday";

const transformData = (data) => {
  if (!data || data.length === 0) {
    return {
      date: "-",
      data: null,
    };
  }

  const extractedData = data[0];
  const caseDate =
    extractedData?.last_update && new Date(extractedData?.last_update);
  const formattedDate =
    caseDate &&
    new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(caseDate);
  const cases = extractedData?.confirmed ?? 0;
  const casesDiff = extractedData?.confirmed_diff ?? 0;
  const deaths = extractedData?.deaths ?? 0;
  const deathsDiff = extractedData?.deaths_diff ?? 0;
  const active = extractedData?.active_diff ?? 0;
  const activeDiff = extractedData?.active_diff ?? 0;
  const recovered = extractedData?.recovered ?? 0;
  const recoveredDiff = extractedData?.recovered_diff ?? 0;

  return {
    date: formattedDate,
    data: [
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusFill />,
        cardTitle: "TOTAL KASUS POSITIF",
        data: cases,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: casesDiff,
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <GiTombstone />,
        cardTitle: "TOTAL KEMATIAN",
        data: deaths,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: deathsDiff,
      },
      {
        iconBg: "orange.100",
        iconColor: "orange.500",
        icon: <RiSyringeFill />,
        cardTitle: "TOTAL KASUS AKTIF",
        data: active,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: activeDiff,
      },
      {
        iconBg: "teal.100",
        iconColor: "teal.500",
        icon: <RiHeartFill />,
        cardTitle: "TOTAL KESEMBUHAN",
        data: recovered,
        increaseArrowColor: "teal.500",
        decreaseArrowColor: "red.500",
        changes: recoveredDiff,
      },
    ],
  };
};

export default function KopitCase() {
  const [loading, caseData, error] = useCovidDataToday(transformData);
  return (
    <Box>
      <HStack>
        <Text fontSize="4xl" color="teal.400">
          <RiSurgicalMaskFill />
        </Text>
        <Text fontSize="lg">
          <strong>Kasus COVID-19</strong>
        </Text>
      </HStack>
      <SimpleGrid
        mt={2}
        minChildWidth={["94%", "47%", "47%", "23.5%"]}
        spacing="2%"
      >
        {loading ? (
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
        ) : null}
        {error ? (
          <ApiError errorTitle="Ada masalah di API untuk mengambil data kasus" />
        ) : null}
        {!error ? (
          <>
            {caseData?.data ? (
              <>
                {caseData?.data.map((key, index) => {
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
                            {key.changes ? (
                              <Flex color="gray.600">
                                <Text>+</Text>
                                <Text>
                                  <CountUp end={key.changes} />
                                </Text>
                              </Flex>
                            ) : null}
                          </Flex>
                        </Stat>
                      </Flex>
                    </Box>
                  );
                })}
              </>
            ) : null}
          </>
        ) : null}
      </SimpleGrid>
      {!error ? (
        <>
          <Flex
            mt={[3, 0]}
            justifyContent="flex-end"
            borderBottom="1px"
            borderBottomColor="gray.200"
            pb={[0, 2]}
          >
            <UpdateTime date={caseData?.date ?? "-"} />
          </Flex>
        </>
      ) : null}
    </Box>
  );
}
