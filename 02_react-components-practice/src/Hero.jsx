// Hero.jsx
import Badge from "./Badge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import CTAButton from "./CTAButton";

function Hero() {
  return (
    <section className="hero" aria-labelledby="heroTitle">
      <Badge text="REACT • COMPONENTS" />
      <HeroTitle id="heroTitle">순수 HTML에서 React 컴포넌트로 변환하기</HeroTitle>
      <HeroDescription>
        먼저 순수 HTML을 보고 시맨틱 구조와 클래스를 이해한 뒤, 같은 UI를
        컴포넌트로 쪼개어 재구성해봅니다.
      </HeroDescription>
      <div className="cta">
        <CTAButton href="#features" primary>
          바로 보기
        </CTAButton>
        <CTAButton href="#about">가이드 읽기</CTAButton>
      </div>
    </section>
  );
}

export default Hero;
