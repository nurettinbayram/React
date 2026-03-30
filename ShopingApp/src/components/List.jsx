/* eslint-disable react/prop-types */

import Item from "./Item";

function List(props) {
  if (props.listOfItems.length === 0) {
    return <div className="list">Sepette eleman yok</div>;
  }

  return (
    <div className="list">
      <ul>
        {props.listOfItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            deleteItem={props.deleteItem}
            onUpdateItem={props.onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
