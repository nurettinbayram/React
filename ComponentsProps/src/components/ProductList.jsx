import Product from "./Product";
import { product_list } from "../data";

export default function ProductList() {
  return (
    <div>
      {/* <h2 className="">Product List</h2> */}

      {product_list.length > 0 ? (
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4 ">
          {product_list.map((item, index) => (
            <div className="col" key={index}>
              <Product propsObj={item} />
            </div>
          ))}
        </div>
      ) : (
        <p style={{ backgroundColor: "red" }}>Eleman bulunamadi!!!</p>
      )}
    </div>
  );
}
