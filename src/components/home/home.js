import { Divider, Box, Text, Heading } from "@chakra-ui/react";
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
            <Box color="yellow.500" fontSize="5xl">
              <MdReportProblem />
            </Box>
            <Heading fontSize="lg">
              Ada masalah di API untuk mengambil data.
            </Heading>
            <Text>Error: {error}</Text>
          </Box>
        ) : (
          <>
            <KopitCase
              py={6}
              caseToday={caseToday}
              caseYesterday={caseYesterday}
              changesCounter={changesCounter}
            />
            <Divider />
            <Vaccination py={6} vaccData={vaccData} />
            <Divider />
            <Hospitalization
              py={6}
              caseToday={caseToday}
              caseYesterday={caseYesterday}
              changesCounter={changesCounter}
            />
          </>
        )}
      </Box>
    </>
  );
}
