import React, { useState, createContext } from "react";
import AddItemList from "./Shopping_List/AddItemForm";
import ShoppingList from "./Shopping_List/ShoppingList";

export const Context = createContext();

function App() {
  const [items, setItems] = useState({
    xxxcdrypud: "Banana",
    dfqogmudfe: "Onions",
    dferikdcbut: "Tomatoes",
  });
  return (
    <Context.Provider
      value={{
        items,
        setItems,
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
