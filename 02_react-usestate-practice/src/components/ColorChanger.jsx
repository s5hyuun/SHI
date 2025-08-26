import { useState } from "react"

export default function ColorChanger(){

  {/* TODO: color라는 문자열 상태를 만들고 초기값은 'black'으로 설정하세요. */}
  const [color, setState] = useState('black');

  return (
    <section>
      <h2>6) 색상 바꾸기</h2>
      <div className="row">

        {/* 
          TODO:
          1) 버튼 클릭 시 color 상태를 'red', 'blue', 'green'으로 변경하세요.
          2) Reset 버튼 클릭 시 color 상태를 'black'으로 초기화하세요.
        */}

        <button onClick={() => {
          setState('red')
        }}>빨강</button>
        <button onClick={() => {
          setState('blue')
        }}>파랑</button>
        <button onClick={() => {
          setState('green')
        }}>초록</button>
        <button onClick={() => {
          setState('black')
        }}>Reset</button>

      </div>

      {/* 
        TODO:
        color 상태에 따라 텍스트 색상이 바뀌도록 만드세요.
      */}
      <p className="color" style={{color: color}}>현재 색상: {color}</p>

    </section>
  )
}
