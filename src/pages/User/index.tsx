import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DiscountIcon from "@mui/icons-material/Discount";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./product.module.css";
import { Button } from "@material-ui/core";
import FormDialog from "./Modal.component";

const User = () => {
  const columns = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 0.1 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.1,
    },
    {
      field: "gender",
      headerName: "Gender",
      type: "string",
      minWidth: 150,
      flex: 0.1,
    },

    {
      field: "birth",
      headerName: "BirthDay",
      type: "string",
      minWidth: 100,
      flex: 0.1,
    },

    {
      field: "email",
      headerName: "Email",
      type: "string",
      minWidth: 100,
      flex: 0.1,
    },

    {
      field: "avatar",
      headerName: "Avatar",
      type: "string",
      minWidth: 100,
      flex: 0.1,
    },

    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      minWidth: 100,
      flex: 0.1,
    },

    {
      field: "actions",
      flex: 0.1,
      headerName: "Actions",
      minWidth: 50,
      type: "number",
      sortable: false,
      renderCell: () => {
        return (
          <>
            <Button>
              <FormDialog />
            </Button>

            <Button onClick={() => {}}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: "description",
      gender: "description",
      birth: "description",
      email: "description",
      avatar: "description",
      phone: "description",
    },
  ];

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/">
              <HomeIcon /> Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/user">
              <AccountBoxIcon /> User
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/product">
              <LocalCafeIcon />
              Product
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/order">
              <ReceiptLongIcon />
              Order
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/coupon">
              <DiscountIcon />
              Coupon
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="w-full p-[10px_30px]">
        <div className="productListContainer ">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default User;
