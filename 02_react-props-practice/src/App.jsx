import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import PlanCard from './components/PlanCard.jsx';
import StatsBar from './components/StatsBar.jsx';
import TestimonialCard from './components/TestimonialCard.jsx';

/**
 * ✅ 과제 가이드(Props 집중)
 * - 상태/이벤트 없이 "모든 데이터는 props"로만 전달합니다.
 * - 배열/객체/문자열/숫자/children 등 다양한 props 패턴을 연습하세요.
 */
export default function App(){
  const navLinks = ['Mentors', 'Plans', 'Reviews'];
  const ctas = [{ text: '멘토 보기', href: '#profiles', primary: true }, { text: '요금제', href: '#plans' }];
  const mentors = [
    { name:'Alice', role:'Frontend Mentor', avatar:'https://i.pravatar.cc/100?img=5', bio:'10년차 프론트엔드 멘토. 실무형 코드 리뷰 제공.', badges:['React','UI'] },
    { name:'Brian', role:'Fullstack Mentor', avatar:'https://i.pravatar.cc/100?img=11', bio:'서비스 운영 관점에서의 효율과 구조를 함께 지도.', badges:['Node','DB'] },
    { name:'Chloe', role:'Design Mentor', avatar:'https://i.pravatar.cc/100?img=22', bio:'디자인 시스템과 접근성을 중점으로 코칭.', badges:['UX','Design System'] },
  ];
  const plans = [
    { name:'Starter', price:'₩0', features:['커뮤니티 Q&A','월 1회 멘토링','샘플 코드 열람'] },
    { name:'Pro', price:'₩29,000', features:['주 1회 멘토링','개인 코드 리뷰','과제 피드백'] },
    { name:'Team', price:'₩79,000', features:['팀 코드 리뷰','프로젝트 구조 컨설팅','맞춤 워크숍'] },
  ];
  const stats = [
    { label:'만족도', value:'98%' },
    { label:'프로젝트', value:'120+' },
    { label:'수강생', value:'30K' },
    { label:'경력', value:'8yr' },
  ];

  return (
    <div className="app">

      {/* TODO: Header 컴포넌트에 navLinks 전달 */}
      {/* <Header title="Props Workshop" navLinks={}/> */}
      <Header title="Props Workshop" navLinks={navLinks}/>

      <Hero badge="REACT • PROPS" title="데이터를 컴포넌트로 전달하는 모든 방법"
            description="배열/객체/문자열/숫자/children까지 — 다양한 props 전달 패턴을 익혀보세요."
            ctas={ctas} />

      <section className="section" id="profiles">
        <h2>멘토 소개</h2>
        <div className="grid">

          {/* TODO: ProfileCard 컴포넌트에 mentors 모든 값 전달 */}
          {/* 배열 API 중 map 사용 */}
          {/* <ProfileCard name={} role={} avatar={} badges={}> bio </ProfileCard> */}
          {
            mentors.map((v) => {
              return (
                <ProfileCard name={v.name} role={v.role} avatar={v.avatar} badges={v.badges}> 
                {v.biio} </ProfileCard>
              )
            })
          }

        </div>
      </section>

      <section className="section" id="plans">
        <h2>요금제</h2>
        <div className="grid">

          {/* TODO: PlanCard 컴포넌트에 plans 모든 값 전달 */}
          {/* 배열 API 중 map 사용 */}
          {/* <PlanCard key={} name={} price={} features={} /> */}
          {
            plans.map((v) => {
              return (
                <PlanCard key={v.key} name={v.name} price={v.price} features={v.features} />
              )
            })
          }

        </div>
      </section>

      <section className="section" id="stats">
        <h2>성과 지표</h2>

        {/* TODO: StatsBar 컴포넌트에 stats 전달 */}
        {/* <StatsBar items={} /> */}
        <StatsBar items={stats} />


      </section>

      <section className="section" id="testimonials">
        <h2>수강 후기</h2>
        <div className="grid">
          <TestimonialCard name="Jin" role="Frontend Dev" avatar="https://i.pravatar.cc/100?img=35">
            “멘토링을 통해 코드가 간결해지고 리뷰 포인트가 명확해졌어요.”
          </TestimonialCard>
          <TestimonialCard name="Mina" role="UI Engineer" avatar="https://i.pravatar.cc/100?img=45">
            “실무 문제를 예제로 풀면서 바로 적용할 수 있었습니다.”
          </TestimonialCard>
        </div>
      </section>

      <footer className="footer">
        <small className="mono">© 2025 Props Workshop • All rights reserved.</small>
      </footer>
    </div>
  );
}
