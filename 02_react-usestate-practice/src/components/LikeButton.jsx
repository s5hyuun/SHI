export default function LikeButton(){

  {/* TODO: liked라는 boolean 상태를 만들고 초기값은 false로 설정하세요. */}

  {/* TODO: count라는 숫자 상태를 만들고 초기값은 0으로 설정하세요. */}

  {/* 
    TODO: toggleLike 함수를 작성하세요.
    1) liked 상태가 true라면 liked를 false로 바꾸고 count를 1 감소시킵니다.
    2) liked 상태가 false라면 liked를 true로 바꾸고 count를 1 증가시킵니다.
  */}

  return (
    <section>
      <h2>7) 좋아요 버튼</h2>
      <div className="center like">

        {/*
          TODO:
          1) 버튼 클릭 시 liked 상태를 토글하세요.
          2) liked 상태가 true이면 '좋아요 취소', false이면 '좋아요'를 버튼에 표시하세요.
        */}
        <button>좋아요 취소 / 좋아요</button>

        {/*
          TODO:
          count 상태를 화면에 출력하세요.
        */}
        <span>총 OO개</span>

      </div>
    </section>
  )
}
