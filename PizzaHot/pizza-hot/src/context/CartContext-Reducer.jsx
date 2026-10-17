import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

//=> THIS IS BASIC CONTEXT API AND WE CAN DEFINE IT LIKE THIS AND SET UP OUR FUNCTIONS
//=> HOWEVER, WE WILL MOVE OUR FUNCTIONS TO A REDUCER FILE.
//=> THIS ALLOWS US TO MANAGE OUR STATE(REDUCER) MORE EFFICINTLY.
export function CartContextProvider({ children }) {
  //-> Our reducer use cartReducer(state, action) function.
  const [cart, dispatch] = useReducer(cartReducer, { items: [] }); //- cart == state  ||  dispatch ==action

  //# add items to cart
  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item }); //# { type: "ADD_ITEM", payload:item } we can use this format too but no ned it.
  }

  //# delate cart item
  function deleteItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  //# update cart item
  function updateItem() {}

  //# clear all items
  function clearAll() {
    dispatch({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    deleteItem,
    clearAll,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
