import FeatureCard from "./FeatureCard";

function FeatureGrid() {
  const items = [
    { icon: "⚡", title: "빠른 구성",   text: "컴포넌트를 나누고 합성해 빠르게 페이지를 완성합니다." },
    { icon: "🧱", title: "재사용성",   text: "같은 UI 패턴을 다양한 곳에서 재사용합니다." },
    { icon: "🛡️", title: "명확한 책임", text: "각 컴포넌트는 자신의 역할과 마크업에 집중합니다." },
    { icon: "🎨", title: "디자인 일관성", text: "공통 스타일을 통해 전문가스러운 인상을 줍니다." },
  ];

  return (
    <section className="section" id="features">
      <h2>핵심 컴포넌트 섹션</h2>
      <div className="grid">
        {items.map(({ icon, title, text }) => (
          <FeatureCard key={title} icon={icon} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}

export default FeatureGrid;