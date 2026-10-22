import { createContext, useState } from "react";

export const UIContext = createContext();

//=>This context allows us switch app pages.
export function UIContextProvider({ children }) {
  //=> Base on uiProgress state we switch the pages.
  const [uiProgress, setUIProgress] = useState("");
  function showCart() {
    setUIProgress("cart");
  }
  function hideCart() {
    setUIProgress("");
  }
  function showCheckout() {
    setUIProgress("checkout");
  }
  function hideCheckout() {
    setUIProgress("");
  }

  const uiProgressContext = {
    uiProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UIContext.Provider value={uiProgressContext}>
      {children}
    </UIContext.Provider>
  );
}
