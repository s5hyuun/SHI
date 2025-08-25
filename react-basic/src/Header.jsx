import {useState} from "react";

const style = {
  fontSzie: "2rem",
  backgroundColor: "lightgray"
}

// 첫 글자 대문자
function Header(props) {
  console.log('Header 생성');
  
  const [state, setState] = useState(0); // 초깃값 설정 
  const [input, setInput] = useState('');

  return (
    <header>
      <input value ={input} onChange={(e)=>{
        let v = e.target.value;
        setInput(v);
      }}></input>
      {/* style 속성에는 JS 객체 입력 */}
      <h1 onClick={() => {
        setState(prev => prev+1);
      }} >{state}</h1>

      <p style={style}>{props.b}</p>
    </header>
  );
}

export default Header;