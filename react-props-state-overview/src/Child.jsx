function Child(props) {
  console.log('Child 컴포넌트 렌더링');
  
  return (
    <div style={{ marginTop: 20, padding: 10, border: "1px solid gray" }}>
      <h3>Child 컴포넌트</h3>

      {/* 숫자 전달 */}
      <p>부모(App)로부터 받은 number: {props.number}</p>

      {/* 객체 전달 */}
      <p>부모로부터 받은 user: {props.user.name} ({props.user.age}세)</p>

      {/* 배열 전달 */}
      <p>부모로부터 받은 fruits:</p>
      <ul>
        {props.fruits.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* children 전달 */}
      <div>{props.children}</div>
    </div>
  );
}

export default Child;
