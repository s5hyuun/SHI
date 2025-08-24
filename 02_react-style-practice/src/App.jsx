/* TODO: module 스타일 CSS 가져오기 */
import sectionStyle from './InfoSection.module.css'

function Nav() {
  const styles = {
    /* TODO: inline 스타일 CSS 작성 */
    textDecoration:'none', padding:'8px 12px', borderRadius:'8px', color:'#333'
  }
  return (
    /* TODO: inline 스타일 CSS 적용 */
    <nav style={{background:'white', margin:'16px', borderRadius:'12px', border:'1px solid #eee'}}>
      <div style={{display:'flex', gap:'12px', padding:'12px 16px'}}>
        <a style={styles} href="#">홈</a>
        <a style={styles} href="#">가이드</a>
        <a style={styles} href="#">문의</a>
      </div>
    </nav>
  );
}

/* TODO: module 스타일 CSS 적용 */
function InfoSection() {
  return (
    <section className={sectionStyle.card}>
      <span className={sectionStyle.badge}>GUIDE </span>
      <h3 >동일 UI를 다른 방식으로 스타일링</h3>
      <p>
        지금 보는 화면을 React로 옮겨서 인라인 → 모듈 순서로 바꿔봅시다.
      </p>
      <a className={sectionStyle.cta}href="#">시작하기</a>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f8", minHeight: "100vh" }}>

      <header style={{ padding: 24, background: "white", borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>스타일 연습 프로젝트</h1>
        <p style={{ margin: "6px 0 0", color: "#666" }}>
          Inline → CSS Module 로 자연스럽게 전환해봅시다.
        </p>
      </header>

      {/* 인라인 스타일 컴포넌트 */}
      <Nav />

      {/* CSS Module 컴포넌트 */}
      <InfoSection />
    </div>
  );
}
