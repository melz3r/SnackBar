import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <section className="product-section">
      <h1>Snackbar</h1>
      <ul className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

export default App;
