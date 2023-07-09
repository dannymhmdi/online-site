import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./Layout/main-layout";
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
