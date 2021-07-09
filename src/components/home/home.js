import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  Link,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
} from "@chakra-ui/react";
import KopitCase from "./kopitCase";
import Vaccination from "./vaccination";
import Hospitalization from "./hospitalization";
import { MdReportProblem } from "react-icons/md";
import DailyCase from "../charts/dailyCase";
// import ProvinceChart from "../kemkesTableau/provinceChart";
// import CityChart from "../kemkesTableau/cityChart";
import KemkesCharts from "../kemkesTableau/kemkesCharts";
import {
  RiWhatsappFill,
  RiCloseCircleLine,
  RiSearch2Line,
  RiPhoneFill,
  RiInformationFill,
} from "react-icons/ri";

export default function Home({ caseData, changesCounter, vaccData, error }) {
  const [showInfo, setShowInfo] = useState(true);

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
            {showInfo && <InfoAlert setShowInfo={setShowInfo} />}
            <SimpleGrid
              minChildWidth={["94%", "94%", "94%", "47%"]}
              spacing={6}
            >
              <KopitCase caseData={caseData} changesCounter={changesCounter} />
              <Hospitalization
                caseData={caseData}
                changesCounter={changesCounter}
              />
            </SimpleGrid>
            <Vaccination mt={5} vaccData={vaccData} />
            <DailyCase mainData={caseData} />
          </Box>
        )}
        <Stack>
          <Text mt={5} fontSize="xl" fontWeight="bold">
            Statistik Kemenkes
          </Text>
          <KemkesCharts />
        </Stack>
      </Box>
    </>
  );
}

function InfoAlert({ setShowInfo, ...props }) {
  return (
    <Box mb={6} bg="blue.50" {...props} p={5} borderRadius={10}>
      <Stack>
        <Flex justifyContent="space-between" alignItems="start">
          <Flex>
            <Text color="blue.500" fontSize="1.3rem" mr={2}>
              <RiInformationFill />
            </Text>
            <Text fontWeight="bold">
              Butuh bantuan donor darah, oxygen, info RS, dll?
            </Text>
          </Flex>
          <Flex>
            <Button
              variant="link"
              color="gray.700"
              onClick={() => {
                setShowInfo(false);
              }}
            >
              <Text fontSize="1.5rem">
                <RiCloseCircleLine />
              </Text>
            </Button>
          </Flex>
        </Flex>
        <InfoStack />
      </Stack>
    </Box>
  );
}

function InfoStack() {
  return (
    <Stack spacing={0}>
      <Text>
        <List>
          <Stack mt={2} spacing={[4, 1]}>
            <ListItem>
              <ListIcon as={RiPhoneFill} color="teal.500" fontSize="1.3rem" />
              <Text as="u">
                <Link href="tel:119p9">
                  Hotline telpon Kemenkes (119 extension 9)
                </Link>
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={RiPhoneFill} color="teal.500" fontSize="1.3rem" />
              <Text as="u">
                <Link href="tel:117p5">
                  Hotline Contact Center BNPB, Donor Konvalesen (117 extension
                  5)
                </Link>
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={RiSearch2Line} color="teal.500" fontSize="1.3rem" />
              <Text as="u">
                <Link
                  href="https://www.wargabantuwarga.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website informasi COVID oleh tim WargaBantuWarga.com
                </Link>
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon
                as={RiWhatsappFill}
                color="teal.500"
                fontSize="1.3rem"
              />
              <Text as="u">
                <Link
                  href="https://api.whatsapp.com/send/?phone=6281257579812&text&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hotline chat WhatsApp WargaBantuWarga
                </Link>
              </Text>
            </ListItem>
          </Stack>
        </List>
      </Text>
    </Stack>
  );
}
