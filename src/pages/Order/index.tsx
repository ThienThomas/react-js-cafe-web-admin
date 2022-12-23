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

const Order = () => {
  const columns = [
    { field: "id", headerName: "ID", minWidth: 50, flex: 0.1 },

    {
      field: "customer_name",
      headerName: "Customer Name",
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      minWidth: 150,
      flex: 0.2,
    },

    {
      field: "note",
      headerName: "Note",
      type: "string",
      minWidth: 70,
      flex: 0.2,
    },

    {
      field: "status",
      headerName: "Status",
      type: "string",
      minWidth: 170,
      flex: 0.1,
    },

    {
      field: "code_coupon",
      headerName: "Code coupon",
      type: "string",
      minWidth: 170,
      flex: 0.1,
    },

    {
      field: "total_price",
      headerName: "Total Price",
      type: "number",
      minWidth: 170,
      flex: 0.1,
    },

    {
      field: "user_id",
      headerName: "User ID",
      type: "string",
      minWidth: 170,
      flex: 0.1,
    },

    {
      field: "payment_id",
      headerName: "Payment ID",
      type: "string",
      minWidth: 170,
      flex: 0.1,
    },

    {
      field: "discount_id",
      headerName: "Discount ID",
      type: "string",
      minWidth: 170,
      flex: 0.1,
    },

    {
      field: "actions",
      flex: 0.15,
      headerName: "Actions",
      minWidth: 100,
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

  //push data in here
  const rows = [
    {
      id: 1,
      customer_name: "description",
      address: "description",
      note: "description",
      status: "description",
      code_coupon: "description",
      total_price: "description",
      user_id: "description",
      payment_id: "description",
      discount_id: "description",
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
          <h1 id="productListHeading">ALL ORDERS</h1>

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

export default Order;
