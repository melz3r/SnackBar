import "./App.css";
import products from "./data/products";

function App() {
  return (
    <main>
      <h1>Snackbar</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
