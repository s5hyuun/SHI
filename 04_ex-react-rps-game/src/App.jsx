import './App.css';
import styles from './App.module.css';

function Title() {
  return (
    <div className='title'>
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}

function Result(props) {
  return (
    <div className='result'>
      <h1>Com: </h1>
      <h1>Player: </h1>
      <h1></h1>
    </div>
  );
}

function Scissors(props) {
  return (
    <div className={styles.control}
      onClick={() => {
        props.onSelect(0);
      }}>
      <img src='http://ggoreb.com/images/react/scissors.png' />
    </div>
  );
}
function Rock(props) {
  return (
    <div className={styles.control}
    onClick={() => {
        props.onSelect(1);
      }}>
      <img src='http://ggoreb.com/images/react/rock.png'></img>
    </div>
  );
}
function Paper(props) {
  return (
    <div className={styles.control}
    onClick={() => {
        props.onSelect(2);
      }}>
      <img src='http://ggoreb.com/images/react/paper.png'></img>
    </div>
  );
}

function App() {
  function onSelect(n) {
    console.log(n);
    // 0 <= X < 3
    const com = parseInt(Math.random() * 3);

    if ((n + 1) % 3 == com) { // 사용자 패 (com 승)

    } else if (n == com) { // 무승부

    } else { // 사용자 승 (com 패) 

    }
  }

  return (
    <>
      <Title />
      <Scissors onSelect={onSelect} />
      <Rock onSelect={onSelect} />
      <Paper onSelect={onSelect} />
      <Result />
    </>
  );
}

export default App;