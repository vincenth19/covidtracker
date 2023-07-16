import { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import DataTable, { debounceSearchRender } from "mui-datatables";
import CountUp from "react-countup";
import Loading from "../loading";
import ApiError from "../shared_comp/apiError/apiError";

export default function TableProvince({ ...props }) {
  const [localCaseData, setLocalCaseData] = useState();
  const [apiError, setApiError] = useState();
  const options = {
    selectableRows: "none",
    rowsPerPageOptions: [10, 20, 34],
    responsive: "simple",
    customSearchRender: debounceSearchRender(500),
    filter: true,
    enableNestedDataAccess: ".",
    draggableColumns: { enabled: true },
  };
  const cols = [
    {
      name: "provinceName",
      label: "Provinsi",
      options: {
        draggable: false,
        sort: true,
        viewColumns: false,
        filterType: "multiselect",
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
      name: "total.positive",
      label: "Kasus",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].total.positive;
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
      name: "update.positive",
      label: "Kasus per Hari",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].update.positive;
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
      name: "total.hospitalized",
      label: "Dirawat",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].total.hospitalized;
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
      name: "total.recovered",
      label: "Sembuh",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].total.recovered;
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
      name: "update.recovered",
      label: "Sembuh per Hari",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].update.recovered;
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
      name: "total.death",
      label: "Meninggal",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].total.death;
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
      name: "update.death",
      label: "Meninggal per Hari",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].update.death;
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
      "https://covidtracker-vincenth19-be.herokuapp.com/api/province/more"
    )
      .then((response) => response.json())
      .then((data) => {
        setLocalCaseData(data.provinces);
        sessionStorage.setItem("data_provinsi", JSON.stringify(data.provinces));
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
      // console.log("fff", JSON.parse(sessionStorage.getItem("data_provinsi")));
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
        <ApiError
          errorTitle="Ada masalah di API untuk mengambil data provinsi."
          errorMessage={apiError}
        />
      ) : (
        isDataReady()
      )}
    </Box>
  );
}
