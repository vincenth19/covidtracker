import {useState, useEffect} from "react";
import {Text, Box, Heading} from "@chakra-ui/react";
import DataTable, {debounceSearchRender} from "mui-datatables";
import CountUp from "react-countup";
import {MdReportProblem} from "react-icons/md";
import Loading from "../loading";

export default function TableProvince({...props}) {
  const [localCaseData, setLocalCaseData] = useState();
  const [apiError, setApiError] = useState();
  const options = {
    selectableRows: "none",
    rowsPerPageOptions: [10, 20, 34],
    responsive: "simple",
    customSearchRender: debounceSearchRender(500),
    filter: true,
    enableNestedDataAccess: '.',
    draggableColumns: {enabled: true},
  };
  const cols = [
    {
      name: "provinsi",
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
      name: "kasus",
      label: "Kasus",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kasus;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "penambahan.positif",
      label: "Kasus per Hari",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].penambahan.positif;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].dirawat;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].sembuh;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "penambahan.sembuh",
      label: "Sembuh per Hari",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].penambahan.sembuh;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].meninggal;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "penambahan.meninggal",
      label: "Meninggal per Hari",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].penambahan.meninggal;
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "jenis_kelamin.laki-laki",
      label: "Laki-laki",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].jenis_kelamin['laki-laki'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "jenis_kelamin.perempuan",
      label: "Perempuan",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].jenis_kelamin['perempuan'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "kelompok_umur.0-5",
      label: "0-5 th",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kelompok_umur['0-5'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "kelompok_umur.6-18",
      label: "6-18 th",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kelompok_umur['6-18'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "kelompok_umur.19-30",
      label: "19-30 th",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kelompok_umur['19-30'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "kelompok_umur.31-45",
      label: "31-45 th",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kelompok_umur['31-45'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "kelompok_umur.46-59",
      label: "46-59 th",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kelompok_umur['46-59'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
      name: "kelompok_umur.≥ 60",
      label: "≥ 60 th",
      options: {
        display: false,
        sort: true,
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].kelompok_umur['≥ 60'];
            let x = (
                <Text>
                  <CountUp separator="," end={val}/>
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
        "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more"
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
      return <Loading minH="70vh"/>;
    }
  }

  return (
      <Box {...props}>
        {apiError ? (
            <Box my={10} bg="gray.100" borderRadius={10} p={5} align="center">
              <Text color="yellow.500" fontSize="6xl" my={3}>
                <MdReportProblem/>
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