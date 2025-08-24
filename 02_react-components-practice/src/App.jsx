import Header from './Header';
import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import Gallery from './Gallery';
import Footer from './Footer';

/**
 * ✅ 과제: 순수 HTML 버전(pure-html/index.html)을 참고해,
 *    동일한 구조/디자인을 컴포넌트로 합성하세요.
 */
export default function App() {
  return (
    <div className="app">
      {/* TODO: 컴포넌트 합성 */}
      <Header></Header>
      <Hero></Hero>
      <FeatureGrid></FeatureGrid>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
