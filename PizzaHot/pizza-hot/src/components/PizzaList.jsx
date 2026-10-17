import useFetch from "../hooks/useFetch";
import Pizza from "./Pizza";

//-> we must define config outside of PizzaList component otherwise it will triger SendRequest() function in useFatch hooks.
const config = {
  method: "GET",
};

export default function PizzaList() {
  /* 
  const [loadedPizzas, setLoadedPizzas] = useState([]);

  /// Here, we use useEffect because every response result is going to change the loadedPizzas state.
  /// This would cause the component to render again, resulting in an infinite loop.
  //=>This part moved in useFetch file,
  useEffect(() => {
    async function getPizzaList() {
      const response = await fetch("http://localhost:3000/pizzas");

      if (!response.ok) {
        //Error method
        console.log("----response error----!!!");
      }
      const pizzas = await response.json();

      setLoadedPizzas(pizzas);
    }

    getPizzaList();
  }, []); /// The empty parentheses mean that it doesn't depend on any parameters, so it runs once when the component is first rendered.
*/

  const { data, isLoading, error } = useFetch(
    "http://localhost:3000/pizzas",
    config,
    [],
  );

  if (isLoading) {
    return <div className="alert alert-warning">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {data.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
