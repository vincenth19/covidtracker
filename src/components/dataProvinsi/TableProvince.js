// import { useMemo } from "react";
// import { Text, Box } from "@chakra-ui/react";
// import DataTable from "mui-datatables";

// export default function TableProvince({ tableData, ...props }) {
//   let provinceData = tableData.prov.list_data;
//   const cols = useMemo(() => {
//     [
//       {
//         name: "key",
//         label: "Provinsi",
//         options: {
//           filter: true,
//           sort: true,
//         },
//       },
//       {
//         name: "doc_count",
//         label: "% Dari Semua Kasus",
//         options: {
//           filter: true,
//           sort: true,
//         },
//       },
//     ];
//   }, []);
//   return (
//     <Box {...props}>
//       <DataTable title={"Data Provinsi"} data={provinceData} columns={cols} />
//     </Box>
//   );
// }
