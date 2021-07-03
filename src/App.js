import { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Container,
  HStack,
  ChakraProvider,
  Spinner,
  //Link,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  StatArrow,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { icons } from "./icons";

function App() {
  const [caseData, setCaseData] = useState(0);
  const [caseYesterday, setCaseYesterday] = useState(0);
  const [error, setError] = useState("");
  const [timeperiod, setTimeperiod] = useState("total");

  function setData1(data) {
    let top = data.pop();
    setCaseData(top);
    let dayMin1 = data.pop();
    setCaseYesterday(dayMin1);
  }

  async function apiGet(apiURL, setter, queryParam = "") {
    const response = await fetch(apiURL + queryParam);
    const data = await response.json();
    fetch(apiURL + queryParam)
      .then((response) => response.json())
      .then((data) => {
        setter(data);
      })
      .catch((error) => {
        setError(error.toString());
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    apiGet(
      "http://apicovid19indonesia-v2.vercel.app/api/indonesia/harian",
      setData1
    );
  }, []);

  return (
    <ChakraProvider>
      <Box bg="#FBFCFF" minHeight="100vh">
        <Container maxW="container.lg">
          <Navbar
            data={caseData && new Date(caseData.tanggal).toLocaleDateString()}
          />
          <Text fontSize="3xl" pt={5}>
            <strong>Indonesia </strong>
          </Text>
          <RadioTimePeriod value={timeperiod} setter={setTimeperiod} />
          <HStack pb={1}>
            {icons[1]}
            <Text fontSize="lg">
              <strong>Kasus COVID-19</strong>
            </Text>
          </HStack>
          <Flex flexWrap="wrap" alignContent="stretch">
            <Box
              mr={2}
              mb={2}
              minW={{ lg: "24.15%", md: "32%", sm: "48%", base: "100%" }}
              p={5}
              borderRadius={5}
              boxShadow="md"
              bg="white"
            >
              <Stat>
                <StatLabel fontSize="0.65em" color="gray.500">
                  TOTAL KASUS POSITIF
                </StatLabel>
                {caseData ? (
                  <>
                    <StatNumber>
                      {caseData.positif_kumulatif.toLocaleString("en-US")}
                    </StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      {caseYesterday.positif_kumulatif} %
                    </StatHelpText>
                  </>
                ) : (
                  <Spinner color="red.500" />
                )}
              </Stat>
            </Box>
          </Flex>
          <Box>
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              bg="white"
              borderRadius={5}
              boxShadow="md"
            >
              <AccordionItem borderRadius={5}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      More data
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

function RadioTimePeriod({ value, setter }) {
  return (
    <RadioGroup onChange={setter} value={value} pt={4} pb={2}>
      <Stack direction="row">
        <Radio value="total">Kumulatif</Radio>
        <Radio value="daily">Harian</Radio>
      </Stack>
    </RadioGroup>
  );
}

export default App;
