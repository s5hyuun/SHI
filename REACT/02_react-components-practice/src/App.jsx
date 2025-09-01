import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

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