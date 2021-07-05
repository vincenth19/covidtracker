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
  Heading,
  Spinner,
  Link,
} from "@chakra-ui/react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { RiExternalLinkLine, RiMenu3Fill } from "react-icons/ri";
import { icons } from "./icons";
import Home from "./components/home/home";
import Footer from "./components/footer";
import DataProvinsi from "./components/dataProvinsi/dataProvinsi";

function App() {
  const [caseToday, setCaseToday] = useState();
  const [caseYesterday, setCaseYesterday] = useState();
  const [vaccination, setVaccination] = useState();
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  function setData1(data) {
    let top = data.update.update.harian.pop();
    setCaseToday(top);
    let dayMin1 = data.update.update.harian.pop();
    setCaseYesterday(dayMin1);
  }

  function changesCounter(currentData, prevData) {
    if (currentData && prevData) {
      let res = ((currentData - prevData) / currentData) * 100;
      return res.toFixed(2);
    }
  }

  async function apiGet(apiURL, setter, queryParam = "") {
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
    apiGet("https://disease.sh/v3/covid-19/gov/ID", setData1);
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
              <Flex wrap="wrap" justifyContent="center" align="center">
                {icons[0]}
                <Stack ml={3}>
                  <Heading as="h1" size="lg">
                    <strong>CovidTracker</strong>
                  </Heading>
                  <Text>By Vincent Haryadi</Text>
                </Stack>
              </Flex>
              <Spacer />
              <Button
                display={{ base: "block", md: "none" }}
                color="grey.500"
                onClick={handleToggle}
              >
                <RiMenu3Fill />
              </Button>

              <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                justifyContent="flex-end"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                spacing={5}
              >
                <NavLink activeStyle={ACTIVE_LINK} to="/home">
                  Beranda
                </NavLink>
                <NavLink activeStyle={ACTIVE_LINK} to="/data-provinsi">
                  Data Provinsi
                </NavLink>
                {/* <Link>RS Rujukan</Link> */}
                <a
                  href="https://linkedin.com/in/vincenth19"
                  target="_blank"
                  rel="noopener"
                >
                  <Link align="center">
                    <Link href="https://vincenth19.com" target="_blank">
                      About Me
                    </Link>
                  </Link>
                </a>
                <UpdateTime
                  date={
                    caseToday && new Date(caseToday.key).toLocaleDateString()
                  }
                />
              </Stack>
            </Flex>
            {/* router */}

            <Switch>
              <Route path="/data-provinsi">
                <DataProvinsi data={caseToday} />
              </Route>
              <Route path="/home">
                <Home
                  caseToday={caseToday}
                  caseYesterday={caseYesterday}
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
    <Flex {...props} color="gray.500">
      <Text>Last Data Update: </Text>
      <Text ml={2}>{date !== 0 ? <strong>{date}</strong> : <Spinner />}</Text>
    </Flex>
  );
}

export default App;
