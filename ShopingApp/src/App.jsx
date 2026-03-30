import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";

function App() {
  const [shopingList, setShopingList] = useState([]);

  function addItemHandler(data) {
    setShopingList((currentList) => [
      ...currentList,
      {
        text: data.text,
        option: data.option,
        id: shopingList.length.toString(),
        completed: false,
      },
    ]);
  }

  function deleteItemHendler(id) {
    setShopingList((currentList) => {
      return currentList.filter((item) => item.id !== id);
    });
  }

  function onUpdateItemHandler(id) {
    setShopingList((currentList) => {
      return currentList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      );
    });
  }

  function cleareHandler() {
    //? Burada bir alert mesaji doner true yada false seklinde.
    let confirm = window.confirm(
      "Are you sure you want to delete all items from the list?",
    );
    if (confirm) {
      // setShopingList([]) ///bu sekildede listeyi bosaltabiliriz.
      setShopingList((currentList) =>
        currentList.splice(0, shopingList.length),
      );
    }
  }

  return (
    <div className="app">
      <Header />
      <Form addItem={addItemHandler} clearHandle={cleareHandler} />
      <List
        listOfItems={shopingList}
        deleteItem={deleteItemHendler}
        onUpdateItem={onUpdateItemHandler}
      />
      <Summary items={shopingList} />
    </div>
  );
}

export default App;
