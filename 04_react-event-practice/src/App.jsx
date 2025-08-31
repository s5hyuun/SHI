import MouseBox from "./components/MouseBox";
import KeyLogger from "./components/KeyLogger";
import CheckboxExample from "./components/CheckboxExample";
import StudentForm from "./components/StudentForm";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React 이벤트 연습</h1>

      <div className="card">
        <h2>1. MouseBox</h2>
        <MouseBox />
      </div>

      <div className="card">
        <h2>2. KeyLogger</h2>
        <KeyLogger />
      </div>

      <div className="card">
        <h2>3. CheckboxExample</h2>
        <CheckboxExample />
      </div>

      <div className="card">
        <h2>4. StudentForm</h2>
        <StudentForm />
      </div>
    </div>
  );
}

export default App;
