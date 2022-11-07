import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { Context } from "../../App";
import giveRandomKey from "../../Utils/RandomKeyGenerator";
function AddItemList() {
  const { setItems, editState, setEditState } = useContext(Context);
  const [inputFieldState, setInputFieldState] = useState();
  const addItemToList = (value) => {
    let key = giveRandomKey();

    setItems((items) => {
      items[key] = value;
      return { ...items };
    });
  };

  useEffect(() => {
    if (editState) {
      setInputFieldState(editState.textFieldValue);
    } else setInputFieldState("");
  }, [editState]);

  const editItemInList = (uniqueKey, value) => {
    setItems((items) => {
      items[uniqueKey] = value;
      return { ...items };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const itemValue = data.get("newItem");

    if (editState) {
      editItemInList(editState.uniqueKey, itemValue);
      setEditState(null);
    } else {
      addItemToList(itemValue);
    }
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
            <InputLabel>{editState ? "Edit Item" : "Add new item"}</InputLabel>
            <TextField
              value={inputFieldState}
              onChange={(e) => setInputFieldState(e.target.value)}
              name="newItem"
              type="text"
            />
            <Button type="submit" variant="contained">
              {editState ? "Save" : "Submit"}
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}

export default AddItemList;
