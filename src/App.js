import { Box, Container, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer";
import Info from "./components/info/info";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box bg="#FBFCFF" minHeight="100vh">
          <Navbar />
          <Container maxW="container.lg" mb={["5rem", "5rem", "5rem", 0]}>
            <Switch>
              <Route path="/info">
                <Info />
              </Route>
              <Route path="/home">
                <Home />
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

export default App;
