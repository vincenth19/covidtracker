import { useEffect, useState } from "react";
import {
  Box,
  Container,
  ChakraProvider,
  Flex,
  Text,
  Stack,
  Spacer,
  useDisclosure,
  Button,
  Spinner,
  Link,
  Image,
} from "@chakra-ui/react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import Virus from "./virus.png";
import Home from "./components/home/home";
import Footer from "./components/footer";
import DataProvinsi from "./components/dataProvinsi/dataProvinsi";
import axios from "axios";

function App() {
  const [caseData, setCaseData] = useState();
  const [vaccination, setVaccination] = useState();
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  function setData1(data) {
    let temp;
    data.forEach((element) => {
      temp = new Date(element.tanggal);
      element.tanggal = temp.toLocaleDateString();
    });
    setCaseData(data);
  }

  function changesCounter(currentData, prevData) {
    if (currentData && prevData) {
      let res = ((currentData - prevData) / currentData) * 100;
      return res.toFixed(2);
    }
  }

  async function apiGet(apiURL, setter, queryParam = "") {
    axios
      .get(apiURL + queryParam)
      .then((response) => {
        //"res", response.data);
        setter(response.data);
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

  const ACTIVE_LINK = {
    fontWeight: "700",
    color: "#FFFFFF",
    backgroundColor: "#EB5569",
    padding: "0px 10px",
    borderRadius: "5px",
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box bg="#FBFCFF" minHeight="100vh">
          <Container maxW="container.lg">
            <Flex
              boxShadow="md"
              borderBottomRadius={10}
              bg="white"
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              padding={6}
            >
              <Flex wrap="wrap" align="center">
                <Image src={Virus} boxSize="50px" />
                <Stack spacing={0} ml={3}>
                  <Text fontSize={["lg", "xl", "2xl", "3xl"]}>
                    <strong>CovidTracker</strong>
                  </Text>
                  <UpdateTime
                    textAlign="left"
                    display={["none", "flex"]}
                    date={
                      caseData &&
                      new Date(
                        caseData[caseData.length - 1].tanggal
                      ).toLocaleDateString()
                    }
                  />
                </Stack>
              </Flex>
              <Spacer />
              <Button
                display={["block", "block", "block", "none"]}
                color="grey.500"
                onClick={handleToggle}
              >
                <RiMenu3Fill />
              </Button>

              <Stack
                direction={{ base: "column", md: "row" }}
                display={{
                  base: isOpen ? "flex" : "none",
                  md: isOpen ? "flex" : "none",
                  lg: "flex",
                }}
                width={["full", "full", "full", "auto"]}
                textAlign={"right"}
                alignItems={["flex-end", "flex-end", "flex-end", "center"]}
                justifyContent="flex-end"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                spacing={3}
              >
                <Link as={NavLink} activeStyle={ACTIVE_LINK} to="/home">
                  Beranda
                </Link>
                <Link
                  as={NavLink}
                  activeStyle={ACTIVE_LINK}
                  to="/data-provinsi"
                >
                  Data Provinsi
                </Link>
                <Link
                  href="http://yankes.kemkes.go.id/app/siranap/"
                  target="_blank"
                >
                  Cari RS COVID
                </Link>
                <a
                  href="https://linkedin.com/in/vincenth19"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    as={Link}
                    size="sm"
                    colorScheme="red"
                    variant="outline"
                    href="https://vincenth19.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About Me
                  </Button>
                </a>
                <UpdateTime
                  textAlign="right"
                  date={
                    caseData &&
                    new Date(
                      caseData[caseData.length - 1].tanggal
                    ).toLocaleDateString()
                  }
                  display={["flex", "none"]}
                />
              </Stack>
            </Flex>
            {/* router */}
            <Switch>
              <Route path="/data-provinsi">
                <DataProvinsi />
              </Route>
              <Route path="/home">
                <Home
                  caseData={caseData}
                  vaccData={vaccination}
                  changesCounter={changesCounter}
                  error={error}
                />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>

            <Footer />
          </Container>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

function UpdateTime({ date, ...props }) {
  return (
    <Flex wrap="wrap" alignItems="center" {...props} fontSize="0.8rem">
      <Text color="gray.500" fontWeight="semibold" f>
        TERAKHIR DIPERBARUI:{" "}
      </Text>
      <Text color="gray.600" ml={1}>
        {date !== 0 ? <strong>{date}</strong> : <Spinner />}
      </Text>
    </Flex>
  );
}

export default App;
