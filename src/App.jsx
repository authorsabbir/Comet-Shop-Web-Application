import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer"
import Single from "./pages/shop/Single";
import Cart from "./pages/ecom/Cart";
import Checkout from "./pages/ecom/Checkout";
import Dashboard from "./pages/admin/Dashboard";
import Brand from "./pages/admin/Brand";
import Tag from "./pages/admin/Tag";
import Category from "./pages/admin/Category";
import CreateProduct from "./pages/admin/CreateProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/:slug" element={<Single/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="brand" element={<Brand/>}></Route>
          <Route path="tag" element={<Tag/>}></Route>
          <Route path="category" element={<Category/>}></Route>
          <Route path="product" element={<CreateProduct/>}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
