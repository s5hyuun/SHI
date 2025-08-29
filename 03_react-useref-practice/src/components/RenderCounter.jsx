import { useState, useRef } from 'react'

export default function RenderCounter() {
  const [count, setCount] = useState(0)

  {/* TODO: 렌더링 횟수를 저장할 ref를 만드세요. */}

  {/* TODO: 컴포넌트가 렌더링될 때마다 렌더링 횟수를 1 증가시키세요. */}

  return (
    <section>
      <h2>2) 렌더링 횟수 세기</h2>
      <p>count: {count}</p>
      
      {/* TODO: 렌더링 횟수를 출력하세요. */}
      <p>렌더링 횟수: {"렌더링 횟수"}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
    </section>
  )
}
