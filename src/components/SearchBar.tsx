export function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Add a new task..."
        style={{
          width: "min(600px, 100%)",
          padding: "8px 12px",
          border: "0.5px solid var(--color-border-secondary)",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      />
      <button
        style={{
          marginLeft: "8px",
          padding: "8px 16px",
          backgroundColor: "grey",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}
