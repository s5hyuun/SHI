import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        background: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >

      {/* 
        TODO: 아래 <span> 태그를 react-router-dom의 <Link> 컴포넌트로 바꿔주세요.
        1) "명절/휴일 주차장" → /parking 주소로 이동
        2) "거제 관광지 정보" → /tourist 주소로 이동
      */}
      {/* <span style={{ color: "white", textDecoration: "none" }}>
        명절/휴일 주차장
      </span>
      <span style={{ color: "white", textDecoration: "none" }}>
        거제 관광지 정보
      </span> */}
      <Link to="/parking" style={{ color: "white", textDecoration: "none" }}>
        명절/휴일 주차장
      </Link>
      <Link to="/tourist" style={{ color: "white", textDecoration: "none" }}>
        거제 관광지 정보
      </Link>

    </nav>
  );
}
