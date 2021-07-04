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
} from "@chakra-ui/react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import { RiExternalLinkLine, RiMenu3Fill } from "react-icons/ri";
import { icons } from "./icons";
import Home from "./components/home/home";
import Footer from "./components/footer";
import DataProvinsi from "./components/dataProvinsi/dataProvinsi";

function App() {
  const [caseData, setCaseData] = useState(0);
  const [caseYesterday, setCaseYesterday] = useState(0);
  const [vaccination, setVaccination] = useState(0);
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [asd, setasd] = useState();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  function setData1(data) {
    let top = data.pop();
    setCaseData(top);
    let dayMin1 = data.pop();
    setCaseYesterday(dayMin1);
  }

  function changesCounter(currentData, prevData) {
    if (currentData && prevData) {
      let res = ((currentData - prevData) / currentData) * 100;
      return res.toFixed(2);
    }
  }

  async function apiGet(apiURL, setter, queryParam = "") {
    // const response = await fetch(apiURL + queryParam);
    // const data = await response.json();
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
  async function a() {
    fetch("https://api.covidtracking.com/v2/us/daily/2021-01-02.json")
      .then((response) => {
        console.log("here");
        response.json();
        console.log(response);
      })
      .then((data) => {
        console.log(data);
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
    a();
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
                alignItems="right"
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
                  <Flex align="center">
                    About Me <RiExternalLinkLine ml={7} />
                  </Flex>
                </a>
                <UpdateTime
                  date={
                    caseData && new Date(caseData.tanggal).toLocaleDateString()
                  }
                />
              </Stack>
            </Flex>
            {/* router */}

            <Switch>
              <Route path="/data-provinsi" component={DataProvinsi} />
              <Route path="/home">
                <Home
                  caseData={caseData}
                  caseYesterday={caseYesterday}
                  vaccData={vaccination}
                  changesCounter={changesCounter}
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

const Eksdee = () => {
  return <Text>asdfasdf</Text>;
};

function UpdateTime({ date, ...props }) {
  return (
    <Flex {...props} color="gray.500">
      <Text>Last Data Update: </Text>
      <Text ml={2}>{date !== 0 ? <strong>{date}</strong> : <Spinner />}</Text>
    </Flex>
  );
}

export default App;
