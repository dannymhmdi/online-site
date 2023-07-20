import "./App.css";
import MainLayout from "./Layout/main-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Home, Products } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact-us" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
