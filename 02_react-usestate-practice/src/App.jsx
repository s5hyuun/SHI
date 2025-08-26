import Counter from './components/Counter.jsx'
import InputMirror from './components/InputMirror.jsx'
import ToggleSwitch from './components/ToggleSwitch.jsx'
import SimpleListAdder from './components/SimpleListAdder.jsx'
import ShowHide from './components/ShowHide.jsx'
import ColorChanger from './components/ColorChanger.jsx'
import LikeButton from './components/LikeButton.jsx'

export default function App(){
  return (
    <div className="container">
      <h1>useState Lab — 7가지 미니 컴포넌트</h1>
      <div className="grid">
        <div className="card"><Counter /></div>
        <div className="card"><InputMirror /></div>
        <div className="card"><ToggleSwitch /></div>
        <div className="card"><SimpleListAdder /></div>
        <div className="card"><ShowHide /></div>
        <div className="card"><ColorChanger /></div>
        <div className="card"><LikeButton /></div>
      </div>
    </div>
  )
}
