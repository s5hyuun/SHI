function PostForm() {
  return (
    <div>
      <h2>사용자 추가</h2>
      <form>
        <input placeholder="이름" />
        <input placeholder="이메일" />
        <button type="submit">전송</button>
      </form>

      <pre>
        응답 결과
      </pre>
    </div>
  );
}

export default PostForm;
