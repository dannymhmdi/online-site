import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./Layout/main-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, FilmDownload, Home } from "./pages";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="دانلود-فیلم" element={<FilmDownload />}/>
          <Route path="تماس-با-ما" element={<Contact />}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
