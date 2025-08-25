import './App.css'
import StyleAvatar from './Avatar.module.css'

import Header from './Header';

//     () => {}
  //   () => 표현식
const Nav = (props) => 
    <nav>
      <ul>
        {/* {
          props.list.map((v, i) => {
            return <li key ={i}><a href="1.html">{v}</a></li>
          })
        } */}
        <li><a href={props.a1}>{props.a}</a></li>
        <li><a href="2.html">{props.b}</a></li>
        <li><a href="3.html">{props.c}</a></li>
      </ul>
    </nav>


const Profile = (props) => {
  console.log(props);
  
  return (
    <div>
      <h1>{props.count}</h1>
      {/* {props.name} */}
      {
        // [10, 20, 30]
        // [<h2> 10</h2>, <h2> 20</h2>, <h2> 30</h2>]
        props.name.map((v) => { // v, i
          // {v} : 값 출력 
          // v : v 출력 
          // JSX 내에서 자바스크립트를 쓰려면 {} 중괄호 반드시 사용 
          return <u> {v} </u>  // v > v v v 출력  // <u key ={i}>
        })
      }
      
      <ul>
        {props.name.map((v) => {
          return <li>{v}</li> 
        }) }
 
        <li>
          {props.name.map((v) => {
            return v + 2;
          }) }
        </li>
        <li>{props.text}</li>
        <li>{props.count}</li>
      </ul>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  )
}
function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  )
} function Avatar(props) {
  return (
    <img className = {StyleAvatar.avatar}
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}



function App() {
  return (
    <>
      <Comment text = "글자" date = {"2025.08.25."} author={ // tex = {} date = {} > 값이 없어서 빈 것으로 출력 
        {name: "아바타", avatarUrl:"http://ggoreb.com/images/luffy.jpg"}}></Comment>
      <Header a = "WEB" b ="World wide Web!"></Header>
      <Nav a = "HTML" a1 = "http://ggoreb.com/dt/" b = "CSS" c = "JavaScript" ></Nav>
      <Profile count={123} text={true} name={[10, 20, 30]}></Profile>

    </>
    
  )
}


export default App

