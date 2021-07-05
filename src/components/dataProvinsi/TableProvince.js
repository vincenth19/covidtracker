import { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import DataTable from "mui-datatables";
import CountUp from "react-countup";

export default function TableProvince({ tableData, ...props }) {
  const [localCaseData, setLocalCaseData] = useState();
  const options = {
    selectableRows: "none",
    rowsPerPageOptions: [10, 20, 34],
    responsive: "simple",
  };
  const cols = [
    {
      name: "key",
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
      name: "doc_count",
      label: "% Dari Semua Kasus",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].doc_count.toFixed(2);
            let x = (
              <Text>
                <CountUp
                  separator=" "
                  decimal="."
                  decimals={2}
                  end={val}
                  suffix="%"
                />
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
      name: "jumlah_kasus",
      label: "Jumlah Kasus",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].jumlah_kasus;
            let x = (
              <Text>
                <CountUp separator=" " end={val} />
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
      name: "jumlah_sembuh",
      label: "Jumlah Sembuh",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].jumlah_kasus;
            let x = (
              <Text>
                <CountUp separator=" " end={val} />
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
      name: "jumlah_meninggal",
      label: "Jumlah Meninggal",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].jumlah_kasus;
            let x = (
              <Text>
                <CountUp separator=" " end={val} />
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
      name: "jumlah_dirawat",
      label: "Jumlah Dirawat",
      options: {
        filter: true,
        sort: true,
        filterType: "textField",
        customBodyRenderLite: (dataIndex) => {
          if (dataIndex <= 33) {
            let val = localCaseData[dataIndex].jumlah_kasus;
            let x = (
              <Text>
                <CountUp separator=" " end={val} />
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
  useEffect(() => {
    //console.log("render");
    if (tableData) {
      tableData.prov.list_data.pop();
      tableData.prov.list_data.pop();
      setLocalCaseData(tableData.prov.list_data);
      //console.log("fff");
    } else {
      fetch("https://disease.sh/v3/covid-19/gov/ID")
        .then((response) => response.json())
        .then((data) => {
          data.prov.list_data.pop();
          data.prov.list_data.pop();
          setLocalCaseData(data.prov.list_data);
          //console.log("api");
        })
        .catch((error) => {
          //setError(error.toString());
          console.error("There was an error!", error);
        });
    }
  }, [tableData]);

  return (
    <Box {...props}>
      <DataTable
        title={"Data Provinsi"}
        data={localCaseData}
        columns={cols}
        options={options}
      />
    </Box>
  );
}
