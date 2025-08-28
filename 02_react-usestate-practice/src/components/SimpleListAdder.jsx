import { useState } from "react";

export default function SimpleListAdder(){

  {/* TODO: 배열 상태 items를 만들고 초기값은 빈 배열로 설정하세요. */}
  const [items, setItems] = useState([]);

  {/* TODO: 문자열 상태 text를 만들고 초기값은 빈 문자열로 설정하세요. */}
  const [text, setText] = useState("");
  
  {/* TODO: 입력된 text를 리스트에 추가하는 add 함수를 작성하세요. */}
  /* 1 */
  // const add = () => {
  //   if (!text.trim()) return;
  //   setItems([...items, text]);
  //   setText("");
  // };
  
  /* 2 */
  function add() {
    // const itmes2 = [...items, text]; // 새로운 주소(객체) 생성
    // setItems(items2); // items 라는 배열 == 참조자료형
    // setItems(items2); // items 라는 배열 == 참조자료형

    setItems([...items, text]);
  }

  return (
    <section>
      <h2>4) 리스트에 항목 추가</h2>
      <div className="row">

        {/* 
          TODO: 
          1) 입력창의 value를 text 상태와 연결하세요. 
          2) 입력값이 바뀔 때 text 상태를 업데이트하세요. (onChange)
          3) Enter 키를 누르면 add 함수를 실행하세요. (onKeyDown)
        */}
        <input
          type="text"
          placeholder="항목 입력"
          value={text}
          onChange={(e) => setText(e.target.value)} 
          onKeyDown = {(e) => {
            if (e.key == "Enter") add();
          }}
        />

        {/* TODO: 버튼을 클릭했을 때 add 함수를 실행하세요. */}
        <button onClick ={add}>추가</button>
      
      </div>
      <ul className="list">
        {/* 
          TODO: items의 각 항목을 출력하세요. 
          <li> 태그의 className을 item으로 지정하세요.
          ex) <li className="item">항목</li>
        */}
        {/* 1 */}
        {/* {items.map((item, i) => (
          <li key = {i} className="item">
            {item}
          </li>
        ))} */}

        {/* 2 */}
        {
          items.map((v) => {
            return (<li className="item">{v}</li>)
            
          })
        }
      </ul>
    </section>
  );
}
