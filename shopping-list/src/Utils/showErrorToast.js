import { toast } from "react-toastify";

const showErrorToast = (message) => {
  toast.error(message);
};

export default showErrorToast;
