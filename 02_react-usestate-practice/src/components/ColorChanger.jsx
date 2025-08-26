export default function ColorChanger(){

  {/* TODO: color라는 문자열 상태를 만들고 초기값은 'black'으로 설정하세요. */}

  return (
    <section>
      <h2>6) 색상 바꾸기</h2>
      <div className="row">

        {/* 
          TODO:
          1) 버튼 클릭 시 color 상태를 'red', 'blue', 'green'으로 변경하세요.
          2) Reset 버튼 클릭 시 color 상태를 'black'으로 초기화하세요.
        */}
        <button>빨강</button>
        <button>파랑</button>
        <button>초록</button>
        <button>Reset</button>

      </div>

      {/* 
        TODO:
        color 상태에 따라 텍스트 색상이 바뀌도록 만드세요.
      */}
      <p className="color">현재 색상: OO</p>

    </section>
  )
}
