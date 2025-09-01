import ClickLogger from './components/ClickLogger.jsx'
import LocalStorageNote from './components/LocalStorageNote.jsx'
import FetchDemo from './components/FetchDemo.jsx'
import ShowHide from './components/ShowHide.jsx'
import ScrollRestorer from './components/ScrollRestorer.jsx'

export default function App() {
  return (
    <div className="container">
      <h1>useEffect — 5가지 미니 컴포넌트</h1>

      <div className="grid">
        <div className="card"><ClickLogger /></div>
        <div className="card"><LocalStorageNote /></div>
        <div className="card"><FetchDemo /></div>
        <div className="card"><ShowHide /></div>
        <div className="card"><ScrollRestorer /></div>
      </div>
    </div>
  )
}
