import { useState } from "react";
import { Text, Box, HStack } from "@chakra-ui/react";
import { RiSyringeFill } from "react-icons/ri";
import ProvinceVaccChart from "./provinceVaccChart";
import CityVaccChart from "./cityVaccChart";
import Loading from "../loading";
import Radios from "../shared_comp/customRadio/customRadio";

export default function KemkesCovidCharts() {
  const [area, setArea] = useState("nasional");

  function renderChart() {
    if (area === "nasional") {
      return <ProvinceVaccChart />;
    } else if (area === "kota") {
      return <CityVaccChart />;
    } else {
      return <Loading minH="10vh" mt={5} />;
    }
  }

  return (
    <>
      <HStack>
        <Text fontSize="4xl" color="blue.400">
          <RiSyringeFill />
        </Text>
        <Text mt={5} fontSize="xl" fontWeight="bold">
          Data Vaksinasi Kementrian Kesehatan
        </Text>
      </HStack>
      <Radios
        radioOptions={["nasional", "kota"]}
        radioName="area"
        radioDefaultValue="nasional"
        setter={setArea}
        mt={5}
        mb={3}
      />
      {/* <RadioArea setArea={setArea} /> */}

      <Box borderColor="gray.300" borderWidth="1px">
        {renderChart()}
      </Box>
    </>
  );
}
