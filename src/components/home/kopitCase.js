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
import useCovidStatistics from "../../hooks/useCovidStatistics";

const transformData = (data) => {
  if (!data || data.length === 0) {
    return {
      date: "-",
      data: null,
    };
  }
  const extractedData = data[0];
  const caseDate = extractedData?.time && new Date(extractedData?.time);
  const formattedDate =
    caseDate &&
    new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(caseDate);
  const cases = extractedData?.cases ?? 0;
  const deaths = extractedData?.deaths ?? 0;
  const active = extractedData?.cases?.active ?? 0;
  const recovered = extractedData?.cases?.recovered ?? 0;

  return {
    date: formattedDate,
    data: [
      {
        iconBg: "red.100",
        iconColor: "red.500",
        icon: <RiVirusFill />,
        cardTitle: "TOTAL KASUS POSITIF",
        data: cases.total,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: cases.new,
      },
      {
        iconBg: "gray.100",
        iconColor: "gray.500",
        icon: <GiTombstone />,
        cardTitle: "TOTAL KEMATIAN",
        data: deaths.total,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: deaths.new,
      },
      {
        iconBg: "orange.100",
        iconColor: "orange.500",
        icon: <RiSyringeFill />,
        cardTitle: "TOTAL KASUS AKTIF",
        data: active,
        increaseArrowColor: "red.500",
        decreaseArrowColor: "teal.500",
        changes: null,
      },
      {
        iconBg: "teal.100",
        iconColor: "teal.500",
        icon: <RiHeartFill />,
        cardTitle: "TOTAL KESEMBUHAN",
        data: recovered,
        increaseArrowColor: "teal.500",
        decreaseArrowColor: "red.500",
        changes: null,
      },
    ],
  };
};

export default function KopitCase() {
  const [loading, caseData, error] = useCovidStatistics(transformData);
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
                                <Text>{key.changes[0]}</Text>
                                <Text>
                                  <CountUp
                                    end={parseInt(key.changes.slice(1), 10)}
                                  />
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
