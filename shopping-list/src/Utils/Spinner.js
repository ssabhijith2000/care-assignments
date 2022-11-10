import classes from "./Spinner.module.css";
import CircularProgress from "@mui/material/CircularProgress";

function Spinner() {
  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;
