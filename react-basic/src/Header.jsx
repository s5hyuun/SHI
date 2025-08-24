const style = {
  fontSzie: "2rem",
  backgroundColor: "lightgray"
}

// 첫 글자 대문자
function Header(props) {
  return (
    <header>
      {/* style 속성에는 JS 객체 입력 */}
      <h1 style={{color: "red", backgroundColor: "yellow"}}>{props.a}</h1>
      <p style={style}>{props.b}</p>
    </header>
  );
}

export default Header;