export default function ProductCard({ product }) {
  return (
    <li className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">Legg til for kr {product.price},-</span>
      </div>
    </li>
  );
}
