import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";
import axios from "axios";
const API_URL = "http://localhost:5000/";

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

export function usePostData(link, postRequestBody) {
  const { setSpinnerFlag, apiResponse, setApiResponse } = useContext(Context);
  useEffect(() => {
    postData();
  }, [postRequestBody]);

  const postData = async () => {
    setSpinnerFlag(true);
    const response = await axios
      .post(`${API_URL}${link}`, postRequestBody)
      .catch(() => {
        toast.error("Something went wrong");
        setSpinnerFlag(false);
      });
    setSpinnerFlag(false);

    setApiResponse(response.data);
  };
  return { apiResponse };
}

export function useDeleteData(link, itemId) {
  const { setSpinnerFlag, apiResponse, setApiResponse } = useContext(Context);
  useEffect(() => {
    deleteData();
  }, []);

  const deleteData = async () => {
    setSpinnerFlag(true);
    const response = await axios
      .delete(`${API_URL}${link}/${itemId}`)
      .catch(() => {
        toast.error("Something went wrong");
        setSpinnerFlag(false);
      });
    setSpinnerFlag(false);

    setApiResponse(response.data);
  };
  return { apiResponse };
}
