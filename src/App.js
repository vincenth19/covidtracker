import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Container,
  ChakraProvider,
  Divider,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import KopitCase from "./components/kopitCase";
import Vaccination from "./components/vaccination";
import Hospitalization from "./components/hospitalization";

function App() {
  const [caseData, setCaseData] = useState(0);
  const [caseYesterday, setCaseYesterday] = useState(0);
  const [vaccination, setVaccination] = useState(0);
  const [error, setError] = useState("");

  function setData1(data) {
    let top = data.pop();
    setCaseData(top);
    let dayMin1 = data.pop();
    setCaseYesterday(dayMin1);
  }

  function changesCounter(total, currentData) {
    let res = ((total - currentData) / total) * 100;
    return res.toFixed(2);
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
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian",
      setData1
    );
    apiGet("https://vaksincovid19-api.vercel.app/api/vaksin", setVaccination);
  }, []);

  return (
    <ChakraProvider>
      <Box bg="#FBFCFF" minHeight="100vh">
        <Container maxW="container.lg">
          <Navbar
            data={caseData && new Date(caseData.tanggal).toLocaleDateString()}
          />
          <Text fontSize="3xl" pt={5} pb={2}>
            <strong>Indonesia </strong>
          </Text>
          <Divider />
          <KopitCase
            py={3}
            caseData={caseData}
            caseYesterday={caseYesterday}
            changesCounter={changesCounter}
          />
          <Divider />
          <Vaccination py={3} vaccData={vaccination} />
          <Divider />
          <Hospitalization
            py={3}
            caseData={caseData}
            caseYesterday={caseYesterday}
            changesCounter={changesCounter}
          />
          <Divider />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
