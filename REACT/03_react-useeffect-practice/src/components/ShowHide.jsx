import { useState, useEffect } from 'react'

function MessageBox() {
  /* 
    TODO:
    1) 컴포넌트가 마운트될 때 콘솔에 "📦 MessageBox 마운트됨"을 출력하세요.
    2) 컴포넌트가 언마운트될 때 콘솔에 "🧹 MessageBox 언마운트됨"을 출력하세요.
    - 힌트: useEffect의 return 문을 사용합니다.
  */
 useEffect(()=> {
  console.log("📦 MessageBox 마운트됨");
  return() => {
    console.log("🧹 MessageBox 언마운트됨");
  };
 }, []);

  return <p style={{ marginTop: 8 }}>Hello React!</p>
}

export default function ShowHide() {
  const [visible, setVisible] = useState(true)

  return (
    <section>
      <h2>4) Show / Hide — 언마운트 체험</h2>

      {/* 
        TODO:
        버튼을 눌러 MessageBox 컴포넌트를 숨기고 보이도록 해보세요.
        - 콘솔을 열면 마운트/언마운트 로그가 출력됩니다.
      */}
      <button onClick={() => {
        setVisible(!visible);
      }}>Show / Hide</button>

      {visible && <MessageBox />}
    </section>
  )
}
