import "./App.css";
import MainLayout from "./Layout/main-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Home, Products } from "./pages";
import ShopBasket from "./pages/shop-basket";
import SelectProduct from "./components/select-product/select-product";
import { Information, Introduction, ProductCheck } from "./components/display-product";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="shop-basket" element={<ShopBasket/>}/>
          {/* <Route path={`products/sneakers-model/:id/:model`} element={<SelectProduct/>}/> */}
          <Route  path={`products/sneakers-model/:id/:model`} element={<SelectProduct/>}>
            <Route path="introduction/:country" element={<Introduction/>}/>
            <Route path="information" element={<Information/>}/>
            <Route path="product-check" element={<ProductCheck/>}/>
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
