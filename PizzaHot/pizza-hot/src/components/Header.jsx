import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext-Reducer";
import { CartContext } from "../context/CartContext-Reducer";
import { UIContext } from "../context/UIContext";

export default function Header() {
  //=> How to call and use useContext.
  const { color } = useContext(ThemeContext);
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UIContext);

  //=> How to use reduce  method get all quantity itims from different items.
  //-> Burasi onemli cunku her itemin icindeki quantity degerlerini bir araya getiriyoruz.
  const totalCartItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <header>
      <nav
        className={`navbar navbar-expand bg-${color} border-bottom border-body`}
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            🍕 Pizza Hot
          </a>
          <button className="btn btn-dark" onClick={() => showCart()}>
            <i className="bi bi-cart3"></i>
            <span className="ms-2">({totalCartItems})</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
