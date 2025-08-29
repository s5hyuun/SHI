import './App.css';
import styles from './App.module.css';
import { useEffect, useMemo, useState, useRef } from 'react';

function Counter() {
  const value = useRef(0);
  const h1 = useRef(); 
  const [count, setCount] = useState(0);

  const onClick = () => {
    h1.current.style.backgroundColor="yellow"
    console.log(value);

    setCount(count + 1);
    value.current += 1;
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

    const no_memo = () => {
    console.log("factorial 연산");
    let result = (count);
    return result;
  };
  const memo = useMemo(() => {
    console.log("factorial 연산");
    let result = (count);
    return result;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{memo}</h1>
      <button onClick={onClick}>Click</button>
      <button onClick={onClick2}>Click</button>
    </div>
  )
}

function App() {
  const [toc, setToc] = useState([]);
  const [hide, setHide] = useState(false);

  const [weather, setWeather] = useState([]);
  const [hide2, setHide2] = useState(false);

  const onClick = () => {
    setHide(!hide);
    fetchToc();
  };

  const onClick2 = () => {
    setHide2(!hide2);
    fetchToc2();
  };

  async function fetchToc() {
    const url = "http://ggoreb.com/api/toc.jsp";
    //비동기를 동기처럼 동작시킴 - await 또는 then()
    const res = await fetch(url); //가져오기
    const data = await res.json(); //사용하기 쉬운 형태로 변형
    const result = data.map((v) => v.title);
    setToc(result);
  }

  async function fetchToc2() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=35.1728639953646&lon=129.130680529903&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31";
    //비동기를 동기처럼 동작시킴 - await 또는 then()
    const res = await fetch(url); //가져오기
    const data = await res.json(); //사용하기 쉬운 형태로 변형
    const description = data.weather[0].description;
    const icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    const temp = data.main.temp;
    setWeather([description, icon, temp]);
    // result={}
    // result.description = data.weather[0].description;
    // result.icon = data.weather[0].icon;
    // result.temp = data.main.temp;
  }

  return (
    <div className={styles.App}>
      <button onClick={onClick}>Show / Hide</button>
      {!hide ? <Counter /> : null}

      <ul>
        {toc.map(v => <li>{v}</li>)}
      </ul>
      <button onClick={onClick2}>날씨 보기</button>
      {!hide2 ?
        <div>
          <span>{weather[0]}/</span>
          <span>{weather[2]}/</span>
          <span><img src={weather[1]} /></span>
        </div> :
        null}
      <p>
        {/*{weather.description} / {weather.temp} /*/}
        {/* <img src="http://openweathermap.org/img/wn/"{weather.icon}".icon+@2x.png"/> */}
      </p>
    </div>
  )
}

export default App;
