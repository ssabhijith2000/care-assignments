import Backdrop from "./Backdrop";
import { useEffect, useState, useContext } from "react";
import ModalOverlay from "./ModalOverlay";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../Utils/apiServices";
import { context } from "../../App";
import Spinner from "../../UI/Spinner";

function Modal({ id }) {
  const navigate = useNavigate();
  const { language, spinnerFlag } = useContext(context);

  const data = useGetData(`topicsearch.json?TopicId=${id}&Lang=${language}`, [
    language,
    id,
  ]);

  const [title, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();

  const closeHandler = () => navigate("/");

  useEffect(() => {
    if (data) {
      setTitle(data.Result.Resources.Resource[0].Title);
      setImageUrl(data.Result.Resources.Resource[0].ImageUrl);
    }
  }, [data]);

  return (
    <>
      <Backdrop closeHandler={closeHandler} />

      {spinnerFlag && <Spinner />}
      {data && (
        <ModalOverlay
          closeHandler={closeHandler}
          title={title}
          imageUrl={imageUrl}
        />
      )}
    </>
  );
}

export default Modal;
