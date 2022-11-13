import React, { useContext } from "react";
import { Card, Container, Box, Button } from "@mui/material";

import { Context } from "../../App";
import { useDeleteData } from "../../Utils/apiService";

function ItemCard({ uniqueKey, itemNumber, item }) {
  const { setItems, items, setEditState } = useContext(Context);
  // let data = useDeleteData(`delete`, id);
  // const deleteItem = () => {
  //   setItems((items) => {
  //     delete items[uniqueKey];
  //     return { ...items };
  //   });
  // };

  // const editItem = () => {
  //   setEditState({ uniqueKey: uniqueKey, textFieldValue: items[uniqueKey] });
  // };

  return (
    <>
      <Container maxWidth="xl">
        <Card variant="elevation">
          <Box
            sx={{
              display: "flex",
              padding: "0.8rem",
              justifyContent: "space-between",
              alignItems: "space-between",
              fontSize: "1.2rem",
              fontWeight: "1.5rem",
            }}
          >
            <span>{`${itemNumber}.`}</span>
            <span>{`${item}`}</span>
            <Button variant="contained" color="error">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Remove
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default ItemCard;
