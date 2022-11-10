import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";

const API_URL = "http://localhost:5000";

export function useGetData(link, dependency) {
  const [data, setData] = useState();
  const { setSpinnerFlag } = useContext(Context);
  useEffect(() => {
    getData();
  }, dependency);

  const getData = async () => {
    setSpinnerFlag(true);
    const response = await fetch(`${API_URL}${link}`).catch(() => {
      toast.error("Something went wrong");
      setSpinnerFlag(false);
    });
    setSpinnerFlag(false);
    const data = await response.json();
    setData(data);
    //
  };
  return data;
}
