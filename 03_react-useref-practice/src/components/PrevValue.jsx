import { useState, useRef, useEffect } from 'react'

export default function PrevValue() {
  const [text, setText] = useState('')

  {/* TODO: 이전 값을 저장할 ref를 만드세요. */}
  let value = useRef();

  {/* TODO: text 값이 변경될 때마다 이전 값을 저장하세요. */}
  useEffect(()=>{
    value.current= text;
  }, [text]);

  return (
    <section>
      <h2>3) 이전 값 기억하기</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="글자를 입력하세요" 
      />
      <p>현재 값: {text}</p>

      {/* TODO: 이전 값을 출력하세요. */}
      <p>이전 값: {value.current}</p>

    </section>
  )
}
