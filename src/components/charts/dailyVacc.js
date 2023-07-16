import { useState, useEffect, useCallback } from "react";
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
import axios from "axios";
import ApiError from "../shared_comp/apiError/apiError";
import Loading from "../loading";
import Radios from "../shared_comp/customRadio/customRadio";

export default function DailyCase({ ...props }) {
  const [chartData, setChartData] = useState();
  const [apiError, setApiError] = useState();
  const [quantity, setQuantity] = useState("harian");

  useEffect(() => {
    async function getDailyData() {
      await axios
        .get(
          "https://covidtracker-vincenth19-be.herokuapp.com/api/vaccination/all_daily"
        )
        .then((response) => {
          setChartData(response.data);
        })
        .catch((error) => {
          setApiError(error.toString());
          console.error("There was an error!", error);
        });
    }
    getDailyData();
  }, []);

  if (apiError) {
    return (
      <ApiError
        errorTitle="Ada masalah di API untuk mengambil data grafik"
        errorMessage={apiError}
      />
    );
  } else {
    return (
      <Box mt={5} {...props}>
        <Text mb={3} fontSize="xl" fontWeight="bold">
          Grafik Semua Vaksinasi{" "}
          {quantity === "harian" ? "Per Hari" : "Secara Kumulatif"}
        </Text>
        <Radios
          radioOptions={["harian", "kumulatif"]}
          radioName="quantity"
          radioDefaultValue="harian"
          setter={setQuantity}
          mt={5}
        />
        {chartData ? (
          <>
            {/* <Text color="gray.600" mt={3} fontSize={"sm"}>
              Klik label di legenda untuk menyembunyikan data label tersebut
            </Text> */}
            <Chart data={chartData} quantity={quantity} error={apiError} />
          </>
        ) : (
          <Loading minH="10vh" mt={5} />
        )}
      </Box>
    );
  }
}

function Chart({ data, quantity, error }) {
  const [opacity, setOpacity] = useState({
    dose1: 1,
    dose1plus: 1,
    dose2: 1,
  });
  const [hidden, setHidden] = useState({
    dose1: false,
    dose1plus: false,
    dose2: false,
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
            name="Semua"
            dataKey={
              quantity === "harian" ? "update.dose1plus" : "total.dose1plus"
            }
            strokeOpacity={opacity.dose1plus}
            strokeWidth={2}
            stroke="#1665C0"
            dot={false}
            hide={hidden.dirawat}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            name="1 Dosis"
            dataKey={quantity === "harian" ? "update.dose1" : "total.dose1"}
            strokeOpacity={opacity.dose1}
            strokeWidth={2}
            stroke="#DE6B1F"
            dot={false}
            hide={hidden.positif}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            name="2 Dosis"
            dataKey={quantity === "harian" ? "update.dose2" : "total.dose2"}
            strokeOpacity={opacity.dose2}
            strokeWidth={2}
            stroke="#319795"
            dot={false}
            hide={hidden.dirawat}
            isAnimationActive={false}
          />
        </LineChart>
      </Flex>
    </Box>
  );
}
