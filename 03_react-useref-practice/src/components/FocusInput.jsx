import { useRef } from 'react'

export default function FocusInput() {
  {/* TODO: input DOM을 참조할 ref를 만드세요. */}

  const handleClick = () => {
    {/* TODO: 버튼 클릭 시 input에 focus가 가도록 하세요. */}
  }

  return (
    <section>
      <h2>1) 입력창 포커스</h2>

      {/* input 과 ref를 연결하세요. */}
      <input type="text" placeholder="여기를 포커스!" />

      <button onClick={handleClick}>포커스 주기</button>
    </section>
  )
}
