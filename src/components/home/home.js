import { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Link,
  Button,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { RiCloseCircleLine, RiInformationFill } from "react-icons/ri";
import { FaPrayingHands } from "react-icons/fa";
import KopitCase from "./kopitCase";
import Vaccination from "./vaccination";
import DailyCase from "../charts/dailyCase";
import RiskProfile from "./riskProfile";
import DailyVacc from "../charts/dailyVacc";
import DailyTesting from "../charts/dailyTesting";
import Testing from "./testing";

export default function Home() {
  const [showInfo, setShowInfo] = useState(true);
  // function changesCounter(currentData, todayData) {
  //   let res = (todayData / currentData) * 100;
  //   return parseFloat(res.toFixed(2));
  // }

  return (
    <>
      <Box>
        <Box my={6}>
          {showInfo && <InfoAlert setShowInfo={setShowInfo} />}
          {/* <VStack align={"center"}>
            <Text color="blue.500" fontSize="6xl" my={3}>
              <FaPrayingHands />
            </Text>
            <Heading fontSize="lg">Sumber Data Sudah Tidak Tersedia</Heading>
            <Text>API pemerintah sudah tidak dapat diakses lagi.</Text>
            <Text>
              Untuk sementara belum ada rencana dalam waktu dekat untuk
              memperbaiki dan merawat website ini.
            </Text>
            <Text>Terima kasih.</Text>
          </VStack> */}
          <Stack mt={7} spacing={2}>
            <KopitCase />
            {/* <Vaccination changesCounter={changesCounter} />
            <RiskProfile />
            <Testing changesCounter={changesCounter} /> */}
            <Box>
              <Text
                fontWeight="bold"
                fontSize="2xl"
                borderBottom="1px"
                borderBottomColor="gray.200"
              >
                Statistik
              </Text>
              <Stack spacing={5}>
                <DailyCase />
                {/* <DailyVacc />
                <DailyTesting />

                <KemkesCharts /> */}
              </Stack>
            </Box>
          </Stack>
        </Box>
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
              Butuh bantuan donor darah, oksigen, info rumah sakit, dll?
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
        <Link as={NavLink} to="/info">
          Klik tautan ini untuk cari informasi/buka halaman "Info Bantuan"
        </Link>
      </Stack>
    </Box>
  );
}
