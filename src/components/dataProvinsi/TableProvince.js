import { useState, useEffect } from "react";
import { Text, Box, Heading } from "@chakra-ui/react";
import DataTable, { debounceSearchRender } from "mui-datatables";
import CountUp from "react-countup";
import { MdReportProblem } from "react-icons/md";
import Loading from "../loading";

export default function TableProvince({ ...props }) {
  const [localCaseData, setLocalCaseData] = useState();
  const [apiError, setApiError] = useState();
  const options = {
    selectableRows: "none",
    rowsPerPageOptions: [10, 20, 34],
    responsive: "simple",
    customSearchRender: debounceSearchRender(500),
  };
  const cols = [
    {
      name: "provinsi",
      label: "Provinsi",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customHeadLabelRender: (columnMeta) => {
          let colHead = (
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontSize="0.8rem"
              textAlign="left"
            >
              {columnMeta.label.toUpperCase()}
            </Text>
          );
          return colHead;
        },
      },
    },
    {
      name: "kasus",
      label: "Kasus",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kasus;
            let x = (
              <Text>
                <CountUp separator="," end={val} />
              </Text>
            );
            return x;
          }
        },
        customHeadLabelRender: (columnMeta) => {
          let colHead = (
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontSize="0.8rem"
              textAlign="left"
            >
              {columnMeta.label.toUpperCase()}
            </Text>
          );
          return colHead;
        },
      },
    },
    {
      name: "dirawat",
      label: "Dirawat",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].dirawat;
            let x = (
              <Text>
                <CountUp separator="," end={val} />
              </Text>
            );
            return x;
          }
        },
        customHeadLabelRender: (columnMeta) => {
          let colHead = (
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontSize="0.8rem"
              textAlign="left"
            >
              {columnMeta.label.toUpperCase()}
            </Text>
          );
          return colHead;
        },
      },
    },
    {
      name: "sembuh",
      label: "Sembuh",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].sembuh;
            let x = (
              <Text>
                <CountUp separator="," end={val} />
              </Text>
            );
            return x;
          }
        },
        customHeadLabelRender: (columnMeta) => {
          let colHead = (
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontSize="0.8rem"
              textAlign="left"
            >
              {columnMeta.label.toUpperCase()}
            </Text>
          );
          return colHead;
        },
      },
    },
    {
      name: "meninggal",
      label: "Meninggal",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].meninggal;
            let x = (
              <Text>
                <CountUp separator="," end={val} />
              </Text>
            );
            return x;
          }
        },
        customHeadLabelRender: (columnMeta) => {
          let colHead = (
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontSize="0.8rem"
              textAlign="left"
            >
              {columnMeta.label.toUpperCase()}
            </Text>
          );
          return colHead;
        },
      },
    },
  ];

  async function getDataTable() {
    await fetch(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
    )
      .then((response) => response.json())
      .then((data) => {
        setLocalCaseData(data);
        sessionStorage.setItem("data_provinsi", JSON.stringify(data));
        //console.log("api", data);
      })
      .catch((error) => {
        setApiError(error.toString());
        //console.error("There was an in the API: ", error);
      });
  }

  useEffect(() => {
    //console.log("render");
    if (sessionStorage["data_provinsi"]) {
      setLocalCaseData(JSON.parse(sessionStorage.getItem("data_provinsi")));
      //console.log("fff", JSON.parse(sessionStorage.getItem("data_provinsi")));
    } else {
      getDataTable();
    }
  }, []);

  function isDataReady() {
    if (localCaseData) {
      return (
        <DataTable
          title={"Data Provinsi"}
          data={localCaseData}
          columns={cols}
          options={options}
        />
      );
    } else {
      return <Loading minH="70vh" />;
    }
  }

  return (
    <Box {...props}>
      {apiError ? (
        <Box my={10} bg="gray.100" borderRadius={10} p={5} align="center">
          <Text color="yellow.500" fontSize="6xl" my={3}>
            <MdReportProblem />
          </Text>
          <Heading fontSize="lg">
            Ada masalah di API untuk mengambil data provinsi.
          </Heading>
          <Text>Error: {apiError}</Text>
        </Box>
      ) : (
        isDataReady()
      )}
    </Box>
  );
}
