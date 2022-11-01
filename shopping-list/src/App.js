import React, { useState, createContext, useRef } from "react";
import AddItemList from "./Shopping_List/AddItemForm";
import ShoppingList from "./Shopping_List/ShoppingList";

export const Context = createContext();

function App() {
  const [items, setItems] = useState({
    xxxcdrypud: "Banana",
    dfqogmudfe: "Onions",
    dferikdcbut: "Tomatoes",
  });
  const [formButtonText, setFormButtonText] = useState("Add");
  return (
    <Context.Provider
      value={{
        items,
        setItems,
        formButtonText,
        setFormButtonText,
      }}
    >
      <div className="App">
        <header className="App-header"></header>
        <AddItemList />
        <ShoppingList items={items} />
      </div>
    </Context.Provider>
  );
}

export default App;
