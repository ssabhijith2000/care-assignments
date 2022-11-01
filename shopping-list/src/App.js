import React, { useState, createContext, useEffect } from "react";
import AddItemList from "./Shopping_List/AddItemForm";
import ShoppingList from "./Shopping_List/ShoppingList";

export const Context = createContext();

function App() {
  const [items, setItems] = useState({
    xxxcd: "Banana",
    dfdfe: "Onions",
    dfert: "Tomatoes",
  });

  return (
    <Context.Provider value={{ items, setItems }}>
      <div className="App">
        <header className="App-header"></header>
        <AddItemList />
        <ShoppingList items={items} />
      </div>
    </Context.Provider>
  );
}

export default App;
