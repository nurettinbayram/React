//=> createPortal is a React API that lets you render a component or element into
//=> a different DOM node than its normal React tree position.
//=> This helps because those UI elements often need to visually appear above the rest of the app,
//=> even if they are logically part of a component deeper in the tree.
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open }) {
  const dialog = useRef();

  //-> We determine whether the content should be rendered based on the 'open' prop.
  useEffect(() => {
    const modal = dialog.current; //# we access the properties of elements using current object.

    //- shawModal() AND close() ARE PROVIDED BY MODAL ELEMENT.
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  //-> modal-box::backdrop Pseudo-elements allaws us to style background of dialog box.

  return createPortal(
    <dialog className="modal-box" ref={dialog}>
      {children}
    </dialog>, //# CONTENT
    document.getElementById("modal"), //# THE LOCATION
  );
}
