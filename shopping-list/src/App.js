import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Shopping from "./pages/Shopping";
import SignIn from "./pages/SignInForm";
import ProtectedRoute from "./Utils/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();
import { ToastContainer } from "react-toastify";
function App() {
  const [items, setItems] = useState({
    xxxcdrypud: "Banana",
    dfqogmudfe: "Onions",
    dferikdcbut: "Tomatoes",
  });
  const [editState, setEditState] = useState();
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  return (
    <Context.Provider
      value={{
        items,
        setItems,
        editState,
        setEditState,
        spinnerFlag,
        setSpinnerFlag,
        apiResponse,
        setApiResponse,
      }}
    >
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Shopping />
                </ProtectedRoute>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/shoppinglist"
              element={
                <ProtectedRoute>
                  <Shopping />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
