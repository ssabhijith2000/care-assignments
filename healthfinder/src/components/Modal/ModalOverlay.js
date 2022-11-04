import Card from "../../UI/Card";
import classes from "./Modal.module.css";

function ModalOverlay({ title, imageUrl, closeHandler }) {
  return (
    <>
      <Card className={classes.card}>
        <button onClick={closeHandler} className={classes.close}>
          X
        </button>
        <h2>{title}</h2>
        <img className={classes.image} src={imageUrl} />
      </Card>
    </>
  );
}

export default ModalOverlay;
