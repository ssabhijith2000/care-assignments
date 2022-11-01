import { Container, Grid } from "@mui/material";

function AddItemList() {
  return (
    <>
      <label>Add new item</label>
      <Container maxWidth="xs">
        <Grid container justifyContent="center">
          S
          <form>
            <input name="newItem" type="text" />
            <button type="submit" value="Add">
              Add
            </button>
          </form>
        </Grid>
      </Container>
    </>
  );
}

export default AddItemList;
