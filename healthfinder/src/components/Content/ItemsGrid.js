import classes from "./ItemsGrid.module.css";
import ItemCard from "./ItemCard";
import useGetData from "../../Utils/apiServices";
import { useContext, useEffect, useState } from "react";
import { context } from "../../App";
import Spinner from "../../UI/Spinner";
function ItemGrid() {
  const [items, setItems] = useState([]);
  const { language, spinnerFlag } = useContext(context);
  const data = useGetData(`itemlist.json?lang=${language}`, [language]);

  useEffect(() => {
    if (data) setItems([...data.Result.Items.Item]);
  }, [language, data]);

  return (
    <>
      <div className={classes["grid-container"]}>
        {spinnerFlag && <Spinner />}
        {!spinnerFlag &&
          items.map((item, index) => (
            <ItemCard title={item.Title} id={item.Id} key={index} />
          ))}
      </div>
    </>
  );
}

export default ItemGrid;
