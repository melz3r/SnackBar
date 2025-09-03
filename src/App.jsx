import "./App.css";
import products from "./data/products";

function App() {
  return (
    <section className="product-section">
      <h1>Snackbar</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">
                Legg til for kr {product.price},-
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
