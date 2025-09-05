export default function Cart({ items, total, onRemove }) {
  return (
    <section className="cart-section">
      <h2>Handlekurv</h2>
      {items.length === 0 ? (
        <p>Handlekurven er tom</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.name} = {item.price * item.quantity} kr
              <button onClick={() => onRemove(item.id)}>Fjern vare</button>
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total:</strong> {total} kr
      </p>
    </section>
  );
}
