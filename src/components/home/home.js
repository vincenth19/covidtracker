import { Box, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import KopitCase from "./kopitCase";
import Vaccination from "./vaccination";
import Hospitalization from "./hospitalization";
import { MdReportProblem } from "react-icons/md";

export default function Home({
  caseToday,
  caseYesterday,
  changesCounter,
  vaccData,
  error,
}) {
  return (
    <>
      <Box>
        {error ? (
          <Box my={10} bg="gray.100" borderRadius={10} p={5} align="center">
            <Text color="yellow.500" fontSize="6xl" my={3}>
              <MdReportProblem />
            </Text>
            <Heading fontSize="lg">
              Ada masalah di API untuk mengambil data kasus.
            </Heading>
            <Text>Error: {error}</Text>
          </Box>
        ) : (
          <Box my={6}>
            <SimpleGrid
              minChildWidth={["94%", "94%", "94%", "47%"]}
              spacing={3}
            >
              <KopitCase
                caseToday={caseToday}
                caseYesterday={caseYesterday}
                changesCounter={changesCounter}
              />
              <Hospitalization
                caseToday={caseToday}
                caseYesterday={caseYesterday}
                changesCounter={changesCounter}
              />
            </SimpleGrid>
            <Vaccination mt={5} vaccData={vaccData} />
          </Box>
        )}
      </Box>
    </>
  );
}
