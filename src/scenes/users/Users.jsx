import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
// import { mockDataUsers } from "../../data/mockData";
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { LockOpenOutlinedIcon } from "@mui/icons-material/LockOpenOutlined";
import { SecurityOutlinedIcon } from "@mui/icons-material/SecurityOutlined";
import AdminHeader from "../../adminComponents/AdminHeader";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const action = <Button>Details</Button>

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "street_no",
        headerName: "Balance",
        type: 'number',
        headerAlign: 'left',
        align: "left",
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: `action`,
        headerName: "Action",
        flex: 1,
      },
  ];
  return (
    <Box>
      <AdminHeader title="Users" subtitle="Managing users" />
      {/* <Box>
        <DataGrid rows={mockDataUsers} columns={columns} />
      </Box> */}
    </Box>
  );
};

export default Users;
