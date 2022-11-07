import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  useEffect(() => {
    if (!isAuthenticated) navigate("/signin");
  }, []);
  return <>{children}</>;
}

export default ProtectedRoute;
