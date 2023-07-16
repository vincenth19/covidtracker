import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const options = {
  method: "GET",
  url: `${process.env.REACT_APP_API_URL}/history`,
  params: {
    country: "Indonesia",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  },
};

const useCovidHistory = (transformer = null) => {
  const [stat, setStat] = useState(null);
  const [loading, data, error] = useAxios(options);

  useEffect(() => {
    if (transformer) {
      setStat(transformer(data?.response ?? null));
    } else {
      setStat(data);
    }
  }, [data, transformer]);

  return [loading, stat, error];
};

export default useCovidHistory;
