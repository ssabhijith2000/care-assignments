import { Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetData } from "../../Utils/apiService";
import ItemCard from "./ShoppingItem";

function ShoppingList({ items }) {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    const data = useGetData(`todolist`, []);
    setToDoList(data.data);
  });
  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2}>
          <h2>Shopping List</h2>
          {toDoList.map((key, index) => (
            <ItemCard
              key={index}
              itemNumber={index + 1}
              uniqueKey={key}
              item={items[key]}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default ShoppingList;
