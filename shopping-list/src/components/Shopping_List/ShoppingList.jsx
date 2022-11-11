import { Container, Stack } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../../App";
import { useGetData } from "../../Utils/apiService";
import Spinner from "../../Utils/Spinner";
import ItemCard from "./ShoppingItem";

function ShoppingList() {
  const [toDoList, setToDoList] = useState([]);
  const { apiResponse, spinnerFlag } = useContext(Context);
  const data = useGetData(`todo`, [apiResponse]);

  useEffect(() => {
    console.log(data);
    if (data) setToDoList([...data.data]);
  }, [data, apiResponse]);
  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2}>
          <h2>Shopping List</h2>
          {spinnerFlag && <Spinner />}
          {!spinnerFlag &&
            toDoList.map((item, index) => (
              <ItemCard
                key={item.id}
                itemNumber={index + 1}
                uniqueKey={item.id}
                item={item.todotext}
              />
            ))}
        </Stack>
      </Container>
    </>
  );
}

export default ShoppingList;
