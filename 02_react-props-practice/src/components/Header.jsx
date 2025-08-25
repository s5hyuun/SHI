export default function Header({ title = "Props Workshop", navLinks = [] }){
  return (
    <header className="header">
      <div className="brand">
        <span className="dot" aria-hidden="true"></span>
        <span className="title">{title}</span>
      </div>
      <nav className="nav" aria-label="primary">

        {/* TODO: navLinks 의 모든 요소를 a 태그로 출력 */}
        {/* 배열 API 중 map 사용 */}
        {/* <a href=''>각 요소</a> */}
        {
          navLinks.map(v => {
            return <a href=''>{v}</a>
          })
        }

      </nav>
    </header>
  );
}
