import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Details from "./pages/Details";
import Home from "./pages/Home";

export const context = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  const [spinnerFlag, setSpinnerFlag] = useState(true);

  return (
    <>
      <context.Provider
        value={{ language, setLanguage, spinnerFlag, setSpinnerFlag }}
      >
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </>
  );
}

export default App;
