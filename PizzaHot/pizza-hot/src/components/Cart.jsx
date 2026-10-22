import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../context/CartContext-Reducer";
import CartItem from "./UI/CartItem";
import { UIContext } from "../context/UIContext";

export default function Cart() {
  const { items, addItem, deleteItem } = useContext(CartContext);
  const { uiProgress, hideCart, showCheckout } = useContext(UIContext);

  const cartTotal = items.reduce(
    (total, item) => item.price * item.quantity + total,
    0,
  );

  return (
    //-> if the uiProgress usestate equal to cart, Modal will open
    <Modal open={uiProgress === "cart"}>
      <h2>Your Basket:</h2>
      {cartTotal == 0 ? (
        <div className="alert alert-danger">Your basket is empty</div>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => addItem(item)}
              onDecrease={() => deleteItem(item.id)}
            />
          ))}
        </ul>
      )}

      <div className="cart-summary ps-4">
        <div className="modal-actions text-end">
          <button
            className="btn btn-sm btn-danger me-2"
            onClick={() => hideCart()}
          >
            Close
          </button>
          {cartTotal != 0 && (
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => showCheckout()}
            >
              Order
            </button>
          )}
        </div>
        {cartTotal != 0 && (
          <p className="badge text-bg-success mb-0 fs-5 ">{cartTotal} ₺</p>
        )}
      </div>
    </Modal>
  );
}
