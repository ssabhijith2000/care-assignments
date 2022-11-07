import { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header/Header";
import AddItemList from "../components/Shopping_List/AddItemForm";
import ShoppingList from "../components/Shopping_List/ShoppingList";
function Shopping() {
  const { items } = useContext(Context);
  return (
    <>
      <Header />
      <AddItemList />
      <ShoppingList items={items} />
    </>
  );
}

export default Shopping;
