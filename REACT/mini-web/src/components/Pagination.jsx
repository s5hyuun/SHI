export default function Pagination({ totalPages, page, onPageChange }) {
  
  const maxPageButtons = 10; // 한번에 보여줄 페이지 버튼 수 (페이지네이션)

  // TODO: 현재 페이지(page)가 속한 그룹의 시작(start)과 끝(end)을 계산하세요.
  const start = Math.floor((page - 1) / maxPageButtons) * maxPageButtons + 1;
  let end = start + maxPageButtons - 1;
  // const start = 1;
  // let end = start + maxPageButtons - 1;
  if (end > totalPages) end = totalPages;

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* TODO: 맨 앞으로(«), 이전 그룹(<), 다음 그룹(>), 맨 뒤로(») 버튼을 조건에 맞게 작성하세요 */}
      
      {/* 
        TODO: pages 배열을 map으로 버튼을 출력하세요. 
        현재 page와 같은 번호는 스타일을 다르게 적용하세요. 
      */}
      {/* {
        pages.map((v) => {
          return (
            <button>{v}</button>
          )
        })
      } */}

      {/* 첫 페이지로 이동 */}
      {page > 1 && (
        <button onClick={() => onPageChange(1)} style={btnStyle}>
          «
        </button>
      )}

      {/* 이전 그룹 ex) 현재 11~20 그룹이면 1~10 페이지 그룹으로 이동 */}
      {start > maxPageButtons && (
        <button onClick={() => onPageChange(start - 1)} style={btnStyle}>
          &lt;
        </button>
      )}

      {/* 페이지 번호 */}
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          style={{
            ...btnStyle,
            border: num === page ? "2px solid #4CAF50" : "1px solid #ccc",
            backgroundColor: num === page ? "#E8F5E9" : "white",
          }}
        >
          {num}
        </button>
      ))}

      {/* 다음 그룹 ex) 현재 11~20 그룹이면 1~10 페이지 그룹으로 이동 */}
      {end < totalPages && (
        <button onClick={() => onPageChange(end + 1)} style={btnStyle}>
          &gt;
        </button>
      )}

      {/* 마지막 페이지로 이동 */}
      {page < totalPages && (
        <button onClick={() => onPageChange(totalPages)} style={btnStyle}>
          »
        </button>
      )}
    </div>
  );
}

const btnStyle = {
  margin: "4px",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};
