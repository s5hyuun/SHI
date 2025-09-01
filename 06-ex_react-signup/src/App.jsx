import { useRef } from 'react';
import './App.css';
import {useState} from 'react';

const App = () => {
  const [agree, setAgree] = useState();
  const [pw, setPw] = useState("");
  const [apw2, setPw2] = useState("");
  const [match, setMatch] = useState(false);
  const ref = useRef();

  return (
    <div className="container">
      <h2>회원 가입</h2>
      <form>
        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            onChange={(e) => {
              setAgree(e.target.checked);
            }}
          />
          <label className='agree' htmlFor="agree">이용약관에 모두 동의합니다</label>
        </div>
            {agree && (<div>
          <div className="form-group">
            <label htmlFor="userId">사용자 아이디</label>
            <input
              type="text"
              id="userId"
              name="userId"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e)=> {
                setPw(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={(e) => {
                setPw2(e.target.value);
                if (pw == e.target.value) {
                  ref.current.style.color = 'black'; // .display = 'none';
                }
              }}
            />
            <label id="pw-match" ref={ref} className="pw-match">비밀번호가 일치해야 됩니다.</label>
          </div>

          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">전화번호</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">주소</label>
            <input
              type="text"
              id="address"
              name="address"
              required
            />
          </div>

          <button type="submit">제출</button>
        </div>)}
        
      </form>
    </div>
  );
};

export default App;
