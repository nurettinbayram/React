export default function cartReducer(state, action) {
  //#--------------------------------ADD_ITEM--------------------------------------------
  if (action.type === "ADD_ITEM") {
    //=> if we add item which we already added(it exist) so we have to update them.
    //->If there is item match with action.item.id it will keep the index number of the item.
    const index = state.items.findIndex((item) => item.id === action.item.id);

    //=> Create a new array by copying the existing items from the current state.
    //=> We do this because we should not directly modify the existing state.
    const updatedItems = [...state.items]; //# [{id:.., title:.., desc:..,},{id:.., title:.., desc:..,},..]

    //=> if there is a item existing
    if (index > -1) {
      const existingItem = state.items[index];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1, //- Here, we increase the quantity by one based on the previous quantity.
      };
      //-> Here we replace item
      updatedItems[index] = updatedItem;
    }

    //=> Add the new item to the copied array and set its initial quantity to 1.
    //=> action.item contains the item data sent by dispatch.
    else {
      updatedItems.push({ ...action.item, quantity: 1 }); //# [{},{},{}, {id:.., title:.., desc:.., quantity:1}]
    }

    //=> Return a new state object.
    //=> Keep the existing state properties and replace the items array
    //=> with the updatedItems array.
    return { ...state, items: updatedItems }; //# [items=[..], items=updatedItems] Set items with updateItems.
  }

  //#--------------------------------REMOVE_ITEM--------------------------------------------

  if (action.type === "REMOVE_ITEM") {
    const index = state.items.findIndex((item) => item.id === action.id);

    const existingItem = state.items[index];

    const updatedItems = [...state.items]; //# [{id:.., title:.., desc:..,},{id:.., title:.., desc:..,},..]

    if (existingItem.quantity === 1) {
      //-> Here we access the item in list and delete from list.
      updatedItems.splice(existingItem, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1, //- Here, we decrease the quantity by one based on the previous quantity.
      };
      updatedItems[index] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }
  //#--------------------------------CLEAR_ITEM--------------------------------------------
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  //=> If no action matches, return the current state without changing it.
  return state;
}
