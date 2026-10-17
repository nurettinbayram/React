import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext-Reducer";
import { CartContext } from "../context/CartContext-Reducer";

export default function Pizza({ pizza }) {
  //-> Call context and use.
  const { color, mode } = useContext(ThemeContext);
  const { addItem } = useContext(CartContext);

  //!!!! handleAddItem(pizza) fonksiyonu seklinde parametre almiyor aksi halde event olarak algilar!!!
  function handleAddItem() {
    addItem(pizza);
  }

  return (
    <div className="col ">
      <div
        className={`card item ${mode === "dark" ? "bg-dark text-light" : "bg-light"}`}
      >
        <img
          src={`http://localhost:3000/images/${pizza.image}`}
          alt={pizza.title}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h3 className="card-title">{pizza.title}</h3>
          <p className="card-text">{pizza.description}</p>
          <div className="item-price">
            <b>{pizza.price} ₺</b>
            <button
              className={`btn btn-sm btn-outline-${color}`}
              onClick={handleAddItem}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
