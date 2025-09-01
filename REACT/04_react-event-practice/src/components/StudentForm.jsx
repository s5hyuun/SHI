import { useState } from "react";

/*
  TODO:
  1. form 태그에 onSubmit 이벤트를 연결
  2. onSubmit 함수 내부에서 
     event.preventDefault() 로 기본 제출 동작 막기
  3. 이름이 2자 이상 5자 이하일 때만 "제출 성공"으로 통과
  4. 조건에 맞지 않으면 화면에 에러 메시지를 표시하기
*/
function StudentForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    
    // TODO: 입력값을 state에 저장
    setName(event.target.value);

  };

  const handleSubmit = (event) => {

    // TODO: 기본 제출 막기
    event.preventDefault();

    // TODO: 이름이 2자 이상 5자 이하 조건이 맞으면 alert 로 "제출 성공"
    //       조건이 맞지 않으면 error 상태에 "이름은 2자 이상 5자 이하로 입력해야 합니다." 입력
    if (name.length>=2 && name.length <= 5) {
      alert("제출 성공")
    }
    else {
      setError("이름은 2자 이상 5자 이하로 입력해야 합니다.")
    }

  };

  return (
    <form 
      className="student-form"
      value={name}
      

      // TODO: onSubmit 이벤트 핸들러 작성
      onSubmit={(e)=>{
        e.preventDefault(); // 실행되고 새로고침이 되는 부분 방지
        handleSubmit(e)
      }}
      

    >
      <input 
        type="text" 
        placeholder="이름 입력" 
        style={{ border: "1px solid #aaa", borderRadius: "6px", padding: "6px" }}

        // TODO: onChange 이벤트 핸들러 작성
        onChange={(e)=>{
          handleChange(e)
        }}

      />
      <button type="submit">제출</button>

      {/* 조건 불일치 시 에러 메시지를 출력하는 모습 */}
      {error && (
        <p style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </form>
  );
}

export default StudentForm;
