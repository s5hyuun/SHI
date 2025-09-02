export default function DataList({ items, renderItem }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => renderItem(item))}
    </ul>
  );
}