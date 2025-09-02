export default function Header({ title, search, totalCount, totalPages }) {
  return (
    <header
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>
      <p style={{ marginTop: "8px", fontSize: "14px" }}>
        현재 검색: {search ? `"${search}"` : "전체"} | 총 {totalCount}건 | 총 {totalPages}페이지
      </p>
    </header>
  );
}
