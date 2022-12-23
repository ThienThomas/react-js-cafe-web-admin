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

const Coupon = () => {
  const columns = [
    { field: "id", headerName: "ID", minWidth: 50, flex: 0.1 },

    {
      field: "code",
      headerName: "Code",
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      minWidth: 150,
      flex: 0.2,
    },

    {
      field: "allow_users",
      headerName: "Allow Users",
      type: "string",
      minWidth: 70,
      flex: 0.2,
    },

    {
      field: "discount_type",
      headerName: "Discount Type",
      type: "string",
      minWidth: 150,
      flex: 0.2,
    },

    {
      field: "discount_amount",
      headerName: "Discount Amount",
      type: "number",
      minWidth: 200,
      flex: 0.2,
    },

    {
      field: "effective_day",
      headerName: "Effective Day",
      type: "string",
      minWidth: 180,
      flex: 0.2,
    },

    {
      field: "expiration_day",
      headerName: "Expiration Day",
      type: "string",
      minWidth: 170,
      flex: 0.2,
    },

    {
      field: "actions",
      flex: 0.2,
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

  //push data in here
  const rows = [
    {
      id: 1,
      code: "description",
      description: "description",
      allow_users: "description",
      discount_type: "description",
      discount_amount: "description",
      effective_day: "description",
      expiration_day: "description",
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
          <h1 id="productListHeading">ALL COUPONS</h1>

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

export default Coupon;
