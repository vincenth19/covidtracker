import { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import ProvinceChart from "./provinceChart";
import CityChart from "./cityChart";
import Loading from "../loading";
import Radios from "../shared_comp/customRadio/customRadio";

export default function KemkesCovidCharts() {
  const [area, setArea] = useState("nasional");

  function renderChart() {
    if (area === "nasional") {
      return <ProvinceChart />;
    } else if (area === "kota") {
      return <CityChart />;
    } else {
      return <Loading minH="10vh" mt={5} />;
    }
  }

  return (
    <>
      <Text mt={5} fontSize="xl" fontWeight="bold">
        Data Kasus KemKes
      </Text>
      <Radios
        radioOptions={["nasional", "kota"]}
        radioName="area"
        radioDefaultValue="nasional"
        setter={setArea}
      />
      {/* <RadioArea setArea={setArea} /> */}

      <Box borderColor="gray.300" borderWidth="1px">
        {renderChart()}
      </Box>
    </>
  );
}
