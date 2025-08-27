import "./App.css";
import products from "./data/products";

function App() {
  return (
    <main>
      <h1>Snackbar</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
