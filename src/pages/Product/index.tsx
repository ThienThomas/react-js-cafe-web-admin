import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DiscountIcon from "@mui/icons-material/Discount";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "./product.module.css";
import { Button } from "@material-ui/core";
import FormDialog from "./Modal.component";
const Product = () => {
  const columns = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 0.1 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.1,
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      minWidth: 150,
      flex: 0.2,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 70,
      flex: 0.1,
    },

    {
      field: "imgUrl",
      headerName: "Image Url",
      type: "string",
      minWidth: 170,
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
      description: "description",
      price: 1000,
      name: "thomas",
      imgUrl: "link thomas nude",
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
          <h1 id="productListHeading">ALL PRODUCTS</h1>

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

export default Product;
