import "./App.css";
import MainLayout from "./Layout/main-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Home, Products } from "./pages";
import ShopBasket from "./pages/shop-basket";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="shop-basket" element={<ShopBasket/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
