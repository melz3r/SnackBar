import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Cart from "./components/Cart";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);

  // filtrering

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  // legg til i handlekurv

function addToCart(product) {
  setCart((prev) => {
    const found = prev.find((item) => item.id === product.id);
    return found
      ? prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...prev, { ...product, quantity: 1 }];
  });
}

  // summering av handlekurv

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main>
      <h1>Snackbar</h1>

      <div className="filter-bar">
        <button onClick={() => setFilter("all")}>Vis alle produkter</button>
        <button onClick={() => setFilter("burger")}>Hamburgere</button>
        <button onClick={() => setFilter("polse")}>Pølser</button>
        <button onClick={() => setFilter("drikke")}>Drikke</button>
      </div>

      <section className="product-section">
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={addToCart} />
          ))}
        </ul>
      </section>

      <Cart items={cart} total={total} />
    </main>
  );
}
