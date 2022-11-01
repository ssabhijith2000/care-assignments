import React, { useContext } from "react";
import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { Context } from "../App";
import giveRandomKey from "../Utils/RandomKeyGenerator";
function AddItemList() {
  const { items, setItems } = useContext(Context);

  const addItemToList = (item) => {
    let key = giveRandomKey();

    setItems((items) => {
      items[key] = item;
      return { ...items };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = data.get("newItem");

    addItemToList(item);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" marginTop={5}>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <InputLabel>Add new Item</InputLabel>
            <TextField name="newItem" type="text" />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}

export default AddItemList;
