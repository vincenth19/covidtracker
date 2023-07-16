import { useState, useCallback } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
import Radios from "../shared_comp/customRadio/customRadio";
import useCovidHistory from "../../hooks/useCovidHistory";
import ApiError from "../shared_comp/apiError/apiError";

const transformForChart = (data) => {
  if (!data || data.length === 0) {
    return null;
  }
  const transformed = data.reverse().map((daily) => {
    const caseDate = daily.day;
    const positiveDaily = daily?.cases?.new ?? 0;
    const positiveTotal = daily?.cases?.active ?? 0;
    const deathsDaily = daily?.deaths?.new ?? 0;
    const deathsTotal = daily?.deaths?.total ?? 0;
    const recoveredTotal = daily?.cases?.recovered ?? 0;

    return {
      date: caseDate,
      update: {
        positive: positiveDaily,
        deaths: deathsDaily,
        recovered: 0,
      },
      total: {
        positive: positiveTotal,
        deaths: deathsTotal,
        recovered: recoveredTotal,
      },
    };
  });

  return transformed;
};

export default function DailyCase({ ...props }) {
  const [quantity, setQuantity] = useState("harian");
  const [loading, historicalData, error] = useCovidHistory(transformForChart);

  return (
    <Box mt={5} {...props}>
      <Text mb={3} fontSize="xl" fontWeight="bold">
        Grafik Gabungan{" "}
        {quantity === "harian"
          ? "Perkembangan Kasus Per Hari"
          : "Perkembangan Kasus Secara Kumulatif"}
      </Text>
      <Radios
        radioOptions={["harian", "kumulatif"]}
        radioName="quantity"
        radioDefaultValue="harian"
        setter={setQuantity}
        mt={5}
      />
      {loading ? <Loading minH="10vh" mt={5} /> : null}
      {error ? (
        <ApiError errorTitle="Ada masalah di API untuk mengambil data grafik" />
      ) : null}
      {historicalData ? (
        <>
          {/* <Text color="gray.600" mt={3} fontSize={"sm"}>
              Klik label di legenda untuk menyembunyikan data label tersebut
            </Text> */}
          <Chart data={historicalData} quantity={quantity} />
        </>
      ) : null}
    </Box>
  );
}

function Chart({ data, quantity }) {
  const [opacity, setOpacity] = useState({
    positif: 1,
    dirawat: 1,
    sembuh: 1,
    meninggal: 1,
  });
  const [hidden, setHidden] = useState({
    positif: false,
    dirawat: false,
    sembuh: false,
    meninggal: false,
  });
  // const handleMouseEnter = (e) => {
  //     setOpacity({...opacity, [e.dataKey]: 0.5})
  // };
  // const handleMouseLeave = (e) => {
  //     setOpacity({...opacity, [e.dataKey]: 1})
  // };
  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );
  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );
  // const selectKey = (e) => {
  //     setHidden({...hidden, [e.dataKey]: !hidden[e.dataKey]});
  // };
  const selectKey = useCallback(
    (h) => {
      const { dataKey } = h;
      setHidden({ ...hidden, [dataKey]: !hidden[dataKey] });
    },
    [hidden, setHidden]
  );

  const chartWidth = () => {
    return window.innerWidth > 1000 ? 1000 : window.innerWidth - 20;
  };

  return (
    <Box>
      <Flex justifyContent="center">
        <LineChart
          width={chartWidth()}
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
          <Brush
            travellerWidth={chartWidth() < 1000 ? 30 : 15}
            width={chartWidth() * 0.8}
            dataKey="date"
            x={chartWidth() * 0.1}
            startIndex={data ? data.length - 30 : 0}
          />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            height={36}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={selectKey}
          />
          <Line
            type="monotone"
            name="Kasus"
            dataKey={
              quantity === "harian" ? "update.positive" : "total.positive"
            }
            strokeOpacity={opacity.positif}
            stroke="#E53E3E"
            strokeWidth={2}
            dot={false}
            hide={hidden.positif}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            name="Sembuh"
            dataKey={
              quantity === "harian" ? "update.recovered" : "total.recovered"
            }
            strokeOpacity={opacity.sembuh}
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
            hide={hidden.sembuh}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            name="Meninggal"
            dataKey={quantity === "harian" ? "update.deaths" : "total.deaths"}
            strokeOpacity={opacity.meninggal}
            stroke="#000"
            strokeWidth={2}
            dot={false}
            hide={hidden.meninggal}
            isAnimationActive={false}
          />
        </LineChart>
      </Flex>
    </Box>
  );
}
