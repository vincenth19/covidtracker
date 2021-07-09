import { useState } from "react";
import { HStack, Box, useRadioGroup, useRadio } from "@chakra-ui/react";
import ProvinceChart from "./provinceChart";
import CityChart from "./cityChart";
import Loading from "../loading";

export default function KemkesCharts() {
  const [area, setArea] = useState("nasional");

  function renderChart() {
    switch (area) {
      case "nasional":
        return <ProvinceChart />;
        break;
      case "kota":
        return <CityChart />;
        break;
      default:
        return <Loading minH="10vh" mt={5} />;
        break;
    }
  }

  return (
    <>
      <RadioArea setArea={setArea} />
      {renderChart()}
    </>
  );
}

function RadioArea({ setArea }) {
  const options = ["nasional", "kota"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "area",
    defaultValue: "nasional",
    onChange: setArea,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <CustomRadio key={value} {...radio}>
            {value.toUpperCase()}
          </CustomRadio>
        );
      })}
    </HStack>
  );
}

function CustomRadio(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        fontSize="0.8rem"
        fontWeight="semibold"
        {...checkbox}
        cursor="pointer"
        borderRadius={50}
        _checked={{
          bg: "red.100",
          color: "red.800",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
