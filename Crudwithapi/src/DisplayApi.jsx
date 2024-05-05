import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export const DisplayApi = (props) => {
  const { handleopen, open } = props;

  const [data, setdata] = useState([]);

  const [id, setid] = useState(0);

  const datadelete = (id) => {
    fetch(
      "https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee" + id,
      {
        method: "Delete",
      }
    )
      .then((y) => {
        return y.json();
      })
      .then((y) => {
        setid(id);
      });
  };

  const columns = [
    { field: "firstname", headerName: "First Name", width: 150 },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "contactnumber", headerName: "Contact Number", width: 150 },
    {
      field: "id",
      headerName: "",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                handleopen(params.row);
              }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16, backgroundColor: "red" }}
              onClick={() => {
                datadelete(params.id);
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee")
      .then((y) => y.json())
      .then((y) => {
        setdata(y);
      });
  }, [id, open]);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};
