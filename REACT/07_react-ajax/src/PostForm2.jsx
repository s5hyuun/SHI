import { useState } from 'react';
import { postlist, savePost } from "./api";

function PostForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  return (
    <div>


            <pre>
        응답 결과
      </pre>
      <h2>게시글 추가</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        postlist(title, body)
      }}>
        <input value={title} placeholder="제목" onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <input value={body} placeholder="내용" onChange={(e) => {
          setBody(e.target.value)
        }} />
        <button type="submit">전송</button>
      </form>

      <pre>
        응답 결과
      </pre>
    </div>
  );
}

export default PostForm;
