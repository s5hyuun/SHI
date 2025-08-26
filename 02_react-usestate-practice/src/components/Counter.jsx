export default function Counter(){

  {/* TODO: count라는 숫자 상태를 만들고 초기값을 0으로 설정하세요. */}

  return (
    <section>
      <h2>1) 카운터 (+1, -1, Reset)</h2>

      {/* TODO: 현재의 count를 출력하세요. */}
      <div className="big">OO</div>

      <div className="row">

        {/* TODO: count 상태를 1 증가시키세요. */}
        <button>+1</button>
        
        {/* TODO: count 상태를 1 감소시키세요. */}
        <button>-1</button>
        
        {/* TODO: count 상태를 0으로 초기화하세요. */}
        <button>Reset</button>
      
      </div>
    </section>
  )
}
