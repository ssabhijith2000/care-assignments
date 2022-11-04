import { useParams } from "react-router-dom";
import Modal from "../components/Modal/Modal";
function Details() {
  let { id } = useParams();
  return <Modal id={id} />;
}

export default Details;
