function FeatureGrid() {
  return (<section class="section" id="features">
    <h2>핵심 컴포넌트 섹션</h2>
    <div class="grid">
      <article class="card">
        <div class="icon" aria-hidden="true">⚡</div>
        <h3>빠른 구성</h3>
        <p>컴포넌트를 나누고 합성해 빠르게 페이지를 완성합니다.</p>
      </article>
      <article class="card">
        <div class="icon" aria-hidden="true">🧱</div>
        <h3>재사용성</h3>
        <p>같은 UI 패턴을 다양한 곳에서 재사용합니다.</p>
      </article>
      <article class="card">
        <div class="icon" aria-hidden="true">🛡️</div>
        <h3>명확한 책임</h3>
        <p>각 컴포넌트는 자신의 역할과 마크업에 집중합니다.</p>
      </article>
      <article class="card">
        <div class="icon" aria-hidden="true">🎨</div>
        <h3>디자인 일관성</h3>
        <p>공통 스타일을 통해 전문가스러운 인상을 줍니다.</p>
      </article>
    </div>
  </section>);
}

export default FeatureGrid;