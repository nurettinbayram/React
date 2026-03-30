/* eslint-disable react/prop-types */

function Summary(props) {
  const completedItems = props.items.filter((item) => item.completed);
  return (
    <footer className="summary">
      Alışveriş sepetinizde {props.items.length} ürün bulunmaktadır.{" "}
      {completedItems.length} urun alindi.
    </footer>
  );
}
export default Summary;
