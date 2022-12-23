import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Coupon from "./pages/Coupon";
import Order from "./pages/Order";
import Product from "./pages/Product";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/coupon" element={<Coupon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
