import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="product-section">
      <h1>Snackbar</h1>

      {/* filtreringsknapper */}
      <div className="filter-bar">
        <button onClick={() => setFilter("all")}>Vis alle produkter</button>
        <button onClick={() => setFilter("burger")}>Hamburgere</button>
        <button onClick={() => setFilter("hotdog")}>Pølser</button>
        <button onClick={() => setFilter("beverage")}>Drikke</button>
      </div>

      {/* produkter */}
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
