import { createContext, useState } from "react";

export const CartContext = createContext();

//=> THIS IS BASIC CONTEXT API AND WE CAN DEFINE IT LIKE THIS AND SET UP OUR FUNCTIONS
//=> HOWEVER, WE WILL MOVE OUR FUNCTIONS TO A REDUCER FILE.
//=> THIS ALLOWS US TO MANAGE OUR STATE MORE EFFICINTLY.
export function CartContextProvider({ chidren }) {
  const [items, setItems] = useState([]);
  //# add items to cart
  function addItem() {}

  //# delate cart item
  function deleteItem() {}

  //# update cart item
  function updateItem() {}

  //# clear all items
  function clearAll() {}

  return (
    <CartContext.Provider
      value={{ items, addItem, deleteItem, updateItem, clearAll }}
    >
      {chidren}
    </CartContext.Provider>
  );
}
