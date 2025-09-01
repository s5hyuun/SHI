/*
  1. unreadMessages 배열의 길이가 0보다 크면 "읽지 않은 메시지 n개" 출력
  2. 길이가 0이면 "메시지가 없습니다" 출력
  3. 삼항 연산자 ( ? : )를 사용하세요.
*/
function MailBox() {
  const unreadMessages = ["안녕", "React 공부", "조건부 렌더링"];

  return (
    <div style={{ marginTop: 20 }}>
      <h2>MailBox 조건부 렌더링</h2>

      {/* 
        TODO: 
        1) unreadMessages 길이가 0보다 크면 
           <p>읽지 않은 메시지 {unreadMessages.length}개</p>
        2) unreadMessages 길이가 0이면 
          <p>메시지가 없습니다</p>
      */}
      {
        unreadMessages.length > 0 ?
          <p>읽지 않은 메시지 {unreadMessages.length}개</p> :
          <p> 메시지가 없습니다 </p>
      }
      
      {/* {unreadMessages.length > 0 ? <p>읽지 않은 메시지 {unreadMessages.length}개</p> : <p>메시지가 없습니다</p>} */}

    </div>
  );
}

export default MailBox;
