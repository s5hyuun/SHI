import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: 입력된 keyword 값을 onSearch에 전달해서 검색이 실행되도록 하세요.
    onSearch(keyword);

  };

  return (

    // TODO: onSubmit 이벤트 사용 handleSubmit 연결
    <form onSubmit={handleSubmit} style={{ margin: "16px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="검색어 입력"
        value={keyword}

        // TODO: onChange로 검색어를 keyword 저장
        onChange={(e) => setKeyword(e.target.value)}

        style={{ padding: "8px", width: "250px", marginRight: "8px" }}
      />
      <button type="submit">검색</button>
    </form>

  );
}
