import classes from "./Modal.module.css";
function Backdrop({ closeHandler }) {
  return <div className={classes.backdrop} onClick={closeHandler}></div>;
}

export default Backdrop;
