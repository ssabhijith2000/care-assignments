import React from "react";
import { Card, Container, Box, Button } from "@mui/material";

function ItemCard({ itemNumber, item }) {
  const deleteItem = () => {};
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
            <Button
              variant="contained"
              onClick={deleteItem(itemNumber)}
              color="error"
            >
              Remove
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default ItemCard;
