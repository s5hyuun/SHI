export default function InputMirror(){

  {/* TODO: text라는 문자열 상태를 만들고 초기값을 빈 문자열로 설정하세요. */}

  return (
    <section>
      <h2>2) 입력값 실시간 반영</h2>
      <div className="row">

        {/* TODO: input의 value를 상태(text)와 연결하세요. */}
        <input
          type="text"
          placeholder="글자를 입력하세요"
        />
      
      </div>
      <div>
        {/* TODO: 입력한 값을 화면에 출력하세요. */}
        결과: <strong>OO</strong>
      </div>
    </section>
  )
}
