import { useContext } from "react";
import Modal from "./UI/Modal";
import { UIContext } from "../context/UIContext";
import { CartContext } from "../context/CartContext-Reducer";
import useFetch from "../hooks/useFetch";

//->We define config outsite of function becouse useFetch has config dependancy
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { uiProgress, hideCheckout } = useContext(UIContext);
  const { items, clearAll } = useContext(CartContext);

  const { data, isLoading, error, SendRequest } = useFetch(
    "http://localhost:3000/orders",
    config,
  );

  const cartTotal = items.reduce(
    (total, item) => item.price * item.quantity + total,
    0,
  );

  function handleSubmit(e) {
    e.preventDefault();

    //-> Call form values.
    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    SendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      }),
    );

    /** 
    //=>HERE WE USE FATCH AND SEND OUR DATA TO SERVER.
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      }),
    });
    */
  }

  function handleClose() {
    hideCheckout();
    clearAll();
    hideCheckout();
  }

  if (data && !error) {
    return (
      <Modal open={uiProgress === "checkout"}>
        <h2>Order succesfully has added.</h2>
        <button
          type="button"
          className="btn btn-sm btn-danger me-2"
          onClick={() => handleClose()}
        >
          Close
        </button>
      </Modal>
    );
  }

  return (
    <Modal open={uiProgress === "checkout"}>
      <h2>Checkout</h2>
      <h5 className="text-danger">Your Total : {cartTotal} ₺</h5>

      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
            name="name"
          />
        </div>
        <div className="row">
          <div className="mb-3 mt-3 col-6">
            <label for="phone" className="form-label">
              Phone Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
              name="phone"
            />
          </div>
          <div className="mb-3 mt-3 col-6">
            <label for="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
        </div>

        <div className="mb-3 mt-3 ">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            name="address"
          />
        </div>
        <div className="row">
          <div className="mb-3 mt-3 col-6">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Enter city"
              name="city"
            />
          </div>
          <div className="mb-3 mt-3 col-6">
            <label htmlFor="state" className="form-label">
              State:
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="Enter state"
              name="state"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="alert alert-warning">Loading...</div>
        ) : (
          <>
            <button
              type="button"
              className="btn btn-sm btn-danger me-2"
              onClick={() => hideCheckout()}
            >
              Close
            </button>
            <button type="submit" className="btn btn-sm btn-primary me-2">
              Save
            </button>
          </>
        )}
      </form>
    </Modal>
  );
}
