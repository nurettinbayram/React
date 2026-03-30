/* eslint-disable react/prop-types */

function Item(props) {
  return (
    <li style={props.itemObj.completed ? { backgroundColor: "#322e3b" } : {}}>
      <input
        type="checkbox"
        checked={props.itemObj.completed}
        /// App componente id gonderilerek checkbox degisen elemen uzerinde degisiklik yapilir
        onChange={() => props.onUpdateItem(props.itemObj.id)}
      />
      <span
        style={
          props.itemObj.completed ? { textDecoration: "line-through" } : {}
        }
      >
        {props.itemObj.option} - {props.itemObj.text}
      </span>
      <button onClick={() => props.deleteItem(props.itemObj.id)}>X</button>
    </li>
  );
}

export default Item;
