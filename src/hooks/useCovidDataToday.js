import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const options = {
  method: "GET",
  url: `${process.env.REACT_APP_API_URL_2}/reports`,
  params: {
    iso: "IDN",
    per_page: 20,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  },
};

const useCovidDataToday = (transformer = null) => {
  const [stat, setStat] = useState(null);
  const [loading, data, error] = useAxios(options);

  useEffect(() => {
    if (transformer) {
      setStat(transformer(data?.data ?? null));
    } else {
      setStat(data);
    }
  }, [data, transformer]);

  return [loading, stat, error];
};

export default useCovidDataToday;
