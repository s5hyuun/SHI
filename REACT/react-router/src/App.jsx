import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function Component1() {
  return <div>
    1
    번 화면</div>
}
function Component2() {
  return <div>
    2
    번 화면</div>
}
function Component3() {
  return <div>
    3
    번 화면</div>
}
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <a href='/1'>1번으로 이동</a> /&nbsp;
        <a href='/2'>2번으로 이동</a> /&nbsp;
        <a href='/3'>3번으로 이동</a>
        <hr/>
        <Link to='/1'>1번으로 이동</Link> /&nbsp;
        <Link to='/2'>2번으로 이동</Link> /&nbsp;
        <Link to='/3'>3번으로 이동</Link>
        <hr/>
        <NavLink to='/1'>1번으로 이동</NavLink> /&nbsp;
        <NavLink to='/2'>2번으로 이동</NavLink> /&nbsp;
        <NavLink to='/3'>3번으로 이동</NavLink>

        <Routes>
          <Route path='/1' element={<Component1 />} />
          <Route path='/2' element={<Component2 />} />
          <Route path='/3' element={<Component3 />} />
        </Routes>
      </div>

      <footer style={
        {
          marginTop: '50px',
          background: 'lightblue'
        }
      }>꼬리말</footer>
    </BrowserRouter>
  );
}
export default App
  ;