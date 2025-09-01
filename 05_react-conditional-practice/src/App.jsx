import { useState } from "react";
import MailBox from "./components/MailBox";
import "./App.css";

/*
  1. 로그인 상태를 관리하는 state(isLoggedIn, userName)를 만드세요.
  2. 로그인이 안 된 상태라면 input + 로그인 버튼을 보여주세요.
  3. 로그인 버튼을 누르면 "OOO님 반갑습니다!" 인사말로 변경되도록 하세요.
  4. 로그인 후에는 아래에 MailBox 컴포넌트를 보여주세요.
*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  
  /* TODO: 로그인 핸들러 함수를 작성하세요. */
  function handleLogin() {
    setIsLoggedIn(true);
  }
  // function onChange(e) {
  //   setUserName(e.target.value);
  // }

  // function onClick(){
  //   setIsLoggedIn(true);
  // }


  return (
    <div className="container">
      <h1>조건부 렌더링 연습</h1>

      <div className="card">

        {/* 
          TODO: 로그인 화면

          1) 로그인이 되어 있지 않은 경우
              <input type="text" placeholder="이름 입력"
                    style={{
                      border: "1px solid #aaa",
                      borderRadius: "6px",
                      padding: "6px",
                      marginRight: "8px",
                    }}
              />
              <button onClick={"로그인 핸들러"}>로그인</button>
              


          2) 로그인이 되어 있는 경우
              <h2>{userName}님 반갑습니다! 👋</h2>
        */}
        {
          !isLoggedIn ? (
            <>
              <input type="text" placeholder="이름 입력"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                style={{
                  border: "1px solid #aaa",
                  borderRadius: "6px",
                  padding: "6px",
                  marginRight: "8px",
                }}
              />
              <button onClick={handleLogin}>로그인</button>
            </>
          ) : (
            <h2>{userName}님 반갑습니다! 👋</h2>
          )
        }

        {/* {isLoggedIn ? <h2>{userName}님 반갑습니다! 👋</h2> :
          <>
            <input type="text" placeholder="이름 입력"
              style={{
                border: "1px solid #aaa",
                borderRadius: "6px",
                padding: "6px",
                marginRight: "8px",
              }} onChange={(e) => {
                onChange(e);
              }}
            />
            <button onClick={onClick}>로그인</button></>} */}

      </div>

      {/* 
        TODO: 로그인 상태일 때만 MailBox 보이도록 조건부 렌더링 코드를 작성하세요. 
        <div className="card">
          <MailBox />
        </div>
      */}
      {isLoggedIn ? <div className="card">
        <MailBox /> </div> : null}

    </div>
  );
}

export default App;
