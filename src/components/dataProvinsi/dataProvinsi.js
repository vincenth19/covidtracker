import { Box } from "@chakra-ui/react";
// import Table from "./TableProvince";
import VaccChart from "../kemkesTableau/vaccCharts";
export default function DataProvinsi({ data, ...props }) {
  return (
    <>
      <Box {...props} mt={5}>
        {/* <Table tableData={data} /> */}
        <VaccChart />
      </Box>
    </>
  );
}
