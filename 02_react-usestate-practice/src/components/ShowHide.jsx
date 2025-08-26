export default function ShowHide() {

  {/* TODO: visible이라는 boolean 상태를 만들고 초기값은 true로 설정하세요. */}

  return (
    <section>
      <h2>5) 보여주기 / 숨기기</h2>
      <div className="row">

        {/* 
          TODO: 
          1) visible이라는 boolean 상태를 만들고 초기값은 true로 설정하세요. 
          2) visible 상태에 따라 버튼 텍스트를 '숨기기' 또는 '보이기'로 표시하세요.
        */}
        <button>
          숨기기 / 보이기
        </button>

      </div>
      
      {/* 
          TODO: 
          visible이 true일 때는 "Hello React!"를
          false일 때는 "숨김 상태입니다."를 보여주세요.
          ex) <p style={{ marginTop: 8 }}>Hello React!</p>
              <p className="muted" style={{ marginTop: 8 }}>숨김 상태입니다.</p>
      */}

    </section>
  )
}
