import { useState, useEffect } from 'react'

export default function ClickLogger() {
  const [text, setText] = useState('')
  {/* 
    TODO:
    컴포넌트가 처음 마운트될 때만 "컴포넌트 마운트됨"을 콘솔에 출력하세요.
  */}
  useEffect(() => {
    console.log("컴포넌트 마운트됨");
  }, []);

  {/* 
    TODO:
    text 상태가 변경될 때마다 "텍스트 변경됨: ..."을 콘솔에 출력하세요.
  */}
  useEffect(() => {
    console.log("텍스트 변경됨: ..." + text);
  }, [text]);

  return (
    <section>
      <h2>1) ClickLogger — 마운트/업데이트</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트 입력"
      />
    </section>
  )
}
