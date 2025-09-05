import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Cart from "./components/Cart";
import FilterBar from "./components/FilterBar";

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
    <main className="main-wrapper">
      <div className="topbar">
        <img src="logo.png" className="logo" alt="SNACKBAR" />
        <FilterBar setFilter={setFilter} />
      </div>

      <div className="layout">
        <section className="product-section">
          <ul className="product-list">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onBuy={addToCart} />
            ))}
          </ul>
        </section>

        <aside className="cart-aside">
          <Cart items={cart} total={total} />
        </aside>
      </div>
    </main>
  );
}
