import FocusInput from './components/FocusInput.jsx'
import RenderCounter from './components/RenderCounter.jsx'
import PrevValue from './components/PrevValue.jsx'
import './index.css'

export default function App() {
  return (
    <div className="container">
      <h1>useRef 연습문제</h1>
      <div className="grid">
        <div className="card"><FocusInput /></div>
        <div className="card"><RenderCounter /></div>
        <div className="card"><PrevValue /></div>
      </div>
    </div>
  )
}
