import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  useRadioGroup,
  useRadio,
  Text,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
import Loading from "../loading";

export default function DailyCase({ mainData, ...props }) {
  const [chartData, setChartData] = useState();
  const [quantity, setQuatity] = useState("harian");

  useEffect(() => {
    if (mainData) {
      setChartData(mainData);
      //console.log("a", mainData);
    } else {
      //console.log("zzz");
    }
  }, [mainData]);

  return (
    <Box mt={6} {...props}>
      <Text mb={3} fontSize="xl" fontWeight="bold">
        Grafik Gabungan{" "}
        {quantity === "harian"
          ? "Perkembangan Kasus Per Hari"
          : "Perkembangan Kasus Secara Kumulatif"}
      </Text>
      <RadioQuantity setQuatity={setQuatity} />
      {mainData ? (
        <>
          <Chart data={chartData} quantity={quantity} />
        </>
      ) : (
        <Loading minH="10vh" mt={5} />
      )}
    </Box>
  );
}

function RadioQuantity({ setQuatity }) {
  const options = ["harian", "kumulatif"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "quantity",
    defaultValue: "harian",
    onChange: setQuatity,
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

function Chart({ data, quantity }) {
  return (
    <Box>
      <Flex justifyContent="center" mt={5}>
        <LineChart
          width={window.innerWidth > 1000 ? 1000 : window.innerWidth - 20}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Brush travellerWidth={30} />
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            name="Positif"
            dataKey={quantity === "harian" ? "positif" : "positif_kumulatif"}
            // dataKey
            stroke="#E53E3E"
            dot={false}
          />
          <Line
            type="monotone"
            name="Dirawat"
            dataKey={quantity === "harian" ? "dirawat" : "dirawat_kumulatif"}
            stroke="#ED8936"
            dot={false}
          />
          <Line
            type="monotone"
            name="Sembuh"
            dataKey={quantity === "harian" ? "sembuh" : "sembuh_kumulatif"}
            stroke="#82ca9d"
            dot={false}
          />
          <Line
            type="monotone"
            name="Meninggal"
            dataKey={
              quantity === "harian" ? "meninggal" : "meninggal_kumulatif"
            }
            stroke="#000"
            dot={false}
          />
        </LineChart>
      </Flex>
    </Box>
  );
}
