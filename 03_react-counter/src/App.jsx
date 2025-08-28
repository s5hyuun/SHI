import './App.css';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  }

  const [color, setColor] = useState('red');
  const onClick2 = () => {
    setColor('blue');
  }

  console.log(`Counter 컴포넌트가 생성되거나 state가 변경되어 렌더링 될 때마다 실행`);
  useEffect(() => {
    console.log(`Counter 컴포넌트가 생성 될 때만 실행`);

    return () => {
      console.log(`Counter 컴포넌트 제거`);
    }
  }, []);

  useEffect(() => {
    console.log(`Counter 컴포넌트 생성, count 값 변경 될 때 실행`);
  }, [count]);

  useEffect(() => {
    console.log(`Counter 컴포넌트 생성, color 값 변경 될 때 실행`);
  }, [color]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
      <button onClick={onClick2}>Click</button>
    </div>
  )
}

function App() {
  const [toc, setToc] = useState([]); // undefined
  // description, icon,
  const [hide, setHide] = useState(false);
  const onClick = () => {
    setHide(!hide);
    fetchToc();
  };

  async function fetchToc(){
    const url = "http://ggoreb.com/api/toc.jsp";
    
    // 비동기를 동기처럼 동작시킴  await 또는 then()
    const res = await fetch(url); // 가져오기
    const data = await res.json(); // 사용하기 쉬운 형태로 변형
    // toc = ["html", "css", "javascript"]
    const result = data.map(v => v.title);
    setToc(result);
  }


  return (
    <div className={styles.App}>
      <button onClick={onClick}>show / Hide</button>
      {hide ? null :  <Counter />}
      <ul>
        {
          // 현재 toc는 undefined 이기 때문에 오류 
          toc.map(v => <li>{v}</li>)
        }
      </ul>
      {/* <p>
        {weather.descripton} / {weather.temp} / {img scr={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}}
      </p> */}
    
    </div>
  )
}

export default App;
