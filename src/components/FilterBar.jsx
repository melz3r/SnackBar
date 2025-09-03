export default function FilterBar({ setFilter }) {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>Vis alle produkter</button>
      <button onClick={() => setFilter("burger")}>Hamburgere</button>
      <button onClick={() => setFilter("hotdog")}>Pølser</button>
      <button onClick={() => setFilter("beverage")}>Drikke</button>
    </div>
  );
}
