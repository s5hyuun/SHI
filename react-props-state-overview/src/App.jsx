import { useState } from "react";
import Child from "./Child";

function App() {
  console.log('App 컴포넌트 렌더링');


  // 객체
  const user = { name: "홍길동", age: 25 };

  // 배열
  const fruits = ["🍎 사과", "🍌 바나나", "🍇 포도"];

  const [count, setCount] = useState({ num: 0 });
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Props & State 동작 확인</h2>

      <p style={styles.text}>
        <strong>현재 값: </strong>
        <span style={styles.count}>{count.num}</span>
      </p>

      <button style={styles.button} onClick={() => {
        // count => {num:0}
        // count는 참조자료형이라서 내부의 값을 바꾸더라도 동일한 객체 인식 
        count.num += 1;

        const count2 = {};
        count2.num = count.num;

        console.log(count);
        setCount(count2);
      }}> +1 증가
      </button>
      <button style={styles.button} onClick={() => setCount(0)}>
        초기화
      </button>

      {/* <button style={styles.button} onClick={() => setCount(count)}> 
        +1 증가
      </button>
      <button style={styles.button} onClick={() => setCount(0)}>
        초기화
      </button> */}

      <p style={styles.tip}>
        버튼을 누를 때마다 화면이 <span style={{ color: "red" }}>다시 렌더링</span>
        되고<br />
        값이 계속 <span style={{ color: "green" }}>기억</span>되는 걸 볼 수 있습니다. <br /><br />
        또 부모(App)의 state가 바뀌면 <span style={{ color: "blue" }}>props</span>를 통해 <br />
        자식(Child)도 자동으로 다시 렌더링 됩니다.
      </p>

      {/* props로 자식에게 전달 */}
      <Child number={count.num} user={user} fruits={fruits}>
        <p style={{ color: "green" }}>children으로 전달된 내용  </p>
      </Child>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    background: "#f9f9ff",
    borderRadius: "16px",
    width: "300px",
    margin: "50px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#4a6ee0",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    margin: "10px 0",
  },
  count: {
    fontSize: "24px",
    color: "#ff4081",
  },
  button: {
    margin: "5px",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#4a6ee0",
    color: "#fff",
    transition: "0.3s",
  },
  tip: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
};

export default App;
