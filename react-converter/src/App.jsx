import { useState } from 'react';
import './App.css';
const MinutesToHours = () => {
  const [time, setTime] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input type="number" id="minutes" placeholder="Minutes"
          disabled={disable} 
          value={disable ? time*60 : time} 
          onChange={(e) => {
            setTime(e.target.value) 
          }}/>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input type="number" id="hours" placeholder="Hours"
          disabled={!disable} 
          value={disable ? time : time/60} 
          onChange={(e) => {
            setTime(e.target.value) 
          }}/>
      </div>
      <button onClick={() => {
        setTime(0);
      }}>Reset</button>
      <button onClick={() => {setDisable(!disable)}}>Flip</button>
    </div>
  )
};

function App() {
  return (
    <div className
      ="App"
    >
      <MinutesToHours />
    </div>
  )
}
export default App;
