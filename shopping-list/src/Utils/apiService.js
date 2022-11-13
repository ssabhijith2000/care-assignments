import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";
import axios from "axios";
const API_URL = "http://localhost:5000/";

const useApiCall = function (fn) {
  return async function () {
    const { setSpinnerFlag } = useContext(Context);
    const makeApiCall = async () => {
      let response = undefined;
      setSpinnerFlag(false);
      try {
        response = await fn.apply(this, arguments);
      } catch (e) {
        toast.error("Something went wrong");
        setSpinnerFlag(false);
      }
      setSpinnerFlag(false);
      return response;
    };
    return { makeApiCall };
  };
};

export function useGetData(link) {
  let data = undefined;
  const useApiCalll = useApiCall(() => axios.get(`${API_URL}${link}`));
  const { makeApiCall } = useApiCalll();
  const getData = async () => {
    const response = makeApiCall();
    console.log(response);
    if (response) data = response.data.data;
    return data;
    //
  };
  return { getData };
}

// export function usePostData(link, postRequestBody) {
//   const { setSpinnerFlag, apiResponse, setApiResponse } = useContext(Context);
//   useEffect(() => {
//     postData();
//   }, [postRequestBody]);

//   const postData = async () => {
//     setSpinnerFlag(true);
//     const response = await axios
//       .post(`${API_URL}${link}`, postRequestBody)
//       .catch(() => {
//         toast.error("Something went wrong");
//         setSpinnerFlag(false);
//       });
//     setSpinnerFlag(false);

//     setApiResponse(response.data);
//   };
//   return { apiResponse };
// }

// export function useDeleteData(link, itemId) {
//   const { setSpinnerFlag, apiResponse, setApiResponse } = useContext(Context);
//   useEffect(() => {
//     deleteData();
//   }, []);

//   const deleteData = async () => {
//     setSpinnerFlag(true);
//     const response = await axios
//       .delete(`${API_URL}${link}/${itemId}`)
//       .catch(() => {
//         toast.error("Something went wrong");
//         setSpinnerFlag(false);
//       });
//     setSpinnerFlag(false);

//     setApiResponse(response.data);
//   };
//   return { apiResponse };
// }
