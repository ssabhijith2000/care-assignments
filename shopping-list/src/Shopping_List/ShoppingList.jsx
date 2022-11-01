import { Container, Stack } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";
import ItemCard from "./ShoppingItem";

function ShoppingList({ items }) {
  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2}>
          <h2>Shopping List</h2>
          {Object.keys(items).map((key, index) => (
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
