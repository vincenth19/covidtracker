import { Divider, Box } from "@chakra-ui/react";
import KopitCase from "./kopitCase";
import Vaccination from "./vaccination";
import Hospitalization from "./hospitalization";

export default function Home({
  caseData,
  caseYesterday,
  changesCounter,
  vaccData,
}) {
  return (
    <>
      <Box>
        <KopitCase
          py={6}
          caseData={caseData}
          caseYesterday={caseYesterday}
          changesCounter={changesCounter}
        />
        <Divider />
        <Vaccination py={6} vaccData={vaccData} />
        <Divider />
        <Hospitalization
          py={6}
          caseData={caseData}
          caseYesterday={caseYesterday}
          changesCounter={changesCounter}
        />
      </Box>
    </>
  );
}
