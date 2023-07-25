import {
  Flex,
  Spacer,
  Button,
  Stack,
  Text,
  Link,
  Image,
  Container,
} from "@chakra-ui/react";
import { useState, useMemo, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Virus from "../../virus.png";

export default function NavbarDesktop({ ...props }) {
  const [currentPageText, setCurrentPageText] = useState("");
  const URL_LOCATION = useLocation();
  const ACTIVE_LINK = {
    fontWeight: "700",
    color: "#FFFFFF",
    backgroundColor: "#EB5569",
    padding: "0px 10px",
    borderRadius: "5px",
    textDecoration: "none",
  };

  const NAV_LINKS = useMemo(
    () => [
      {
        path: "/home",
        text: "Beranda",
      },
      {
        path: "/info",
        text: "Info Bantuan",
      },
    ],
    []
  );

  useEffect(() => {
    switch (URL_LOCATION.pathname) {
      case "/home":
        setCurrentPageText("Beranda");
        break;
      case "/vaccination":
        setCurrentPageText("Vaksinasi");
        break;
      case "/info":
        setCurrentPageText("Info");
        break;
      default:
        setCurrentPageText("");
        break;
    }
  }, [URL_LOCATION]);

  return (
    <Container maxW="container.lg">
      <Flex
        {...props}
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
          <Image src={Virus} boxSize={["35px", "50px"]} />
          <Flex ml={3}>
            <Text
              fontWeight="bold"
              fontSize={["xl", "3xl"]}
              display={["none", "none", "none", "inline"]}
            >
              CovidTracker
            </Text>
            <Text
              fontWeight="bold"
              fontSize={["xl", "3xl"]}
              display={["inline", "inline", "inline", "none"]}
            >
              {currentPageText}
            </Text>
          </Flex>
        </Flex>
        <Spacer />

        <Stack
          display={["none", "none", "none", "flex"]}
          direction="row"
          width="auto"
          textAlign={"right"}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
          spacing={3}
        >
          {NAV_LINKS.map((data, index) => {
            return (
              <Link
                key={`desktop_${index}`}
                as={NavLink}
                activeStyle={ACTIVE_LINK}
                to={data.path}
              >
                <Text textDecoration="none">{data.text}</Text>
              </Link>
            );
          })}
          <Link
            href="https://isoman.kemkes.go.id/panduan"
            target="_blank"
            rel="noreferrer"
          >
            Lapor Mandiri
          </Link>
          <Button
            as={Link}
            size="sm"
            colorScheme="red"
            variant="outline"
            href="https://vincenth19.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Tentang Saya
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
