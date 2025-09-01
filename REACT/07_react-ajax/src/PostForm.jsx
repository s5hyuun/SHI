import { useState} from 'react';
import { savePost } from "./api";

function PostForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>사용자 추가</h2>
      <form onSubmit={(e)=> {
        e.preventDefault();
        savePost(name, email)
      }}>
        <input value={name} placeholder="이름" onChange={(e) => {
          setName(e.target.value)
        }}/>
        <input value={email} placeholder="이메일" onChange={(e) => {
          setEmail(e.target.value)}}/>
        <button type="submit">전송</button>
      </form>

      <pre>
        응답 결과
      </pre>
    </div>
  );
}

export default PostForm;
