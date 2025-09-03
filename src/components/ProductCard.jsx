export default function ProductCard({ product, onBuy }) {
  return (
    <li className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">
          Kun {product.price} kr!
        </span>
      </div>
      <button className="buy-button" onClick={() => onBuy(product)}>
        Legg til
      </button>
    </li>
  );
}
