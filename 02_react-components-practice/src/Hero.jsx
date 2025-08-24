function Hero() {
  return (<section class="hero" aria-labelledby="heroTitle">
    <span class="badge">REACT • COMPONENTS</span>
    <h1 id="heroTitle">순수 HTML에서 React 컴포넌트로 변환하기</h1>
    <p>먼저 순수 HTML을 보고 시맨틱 구조와 클래스를 이해한 뒤, 같은 UI를 컴포넌트로 쪼개어 재구성해봅니다.</p>
    <div class="cta">
      <a class="primary" href="#features">바로 보기</a>
      <a href="#about">가이드 읽기</a>
    </div>
  </section>);
}

export default Hero;