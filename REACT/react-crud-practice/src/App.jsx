import { useState } from "react";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState(["🍎 사과", "🍌 바나나"]);

  const [input, setInput] = useState("");

  // Create
  const addItem = () => {
    if (input.trim() === "") return;
    if (items.indexOf(input) == -1) {

      // 중복, 배열의 요소 중 동일한 값이 있는지 확인
      if(items.includes(input)){
        // alert("동일한 값이 있어서 추가 안 됨!")
        return;
      }

      setItems([...items, input]);
    setInput("");
    };
    
  };

  // Update
  const updateItem = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };

  // Delete
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>✨ 간단한 CRUD 연습 ✨</h2>

      {/* 입력창 */}
      {/* 입력창에서 Enter로 추가하기 */}
      <input
        style={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {if(e.key == "Enter"){ // onKeyDown / onKeyUp 상관 X
          addItem();
        }}}
        placeholder="아이템 입력..."

      />
      <button style={styles.button} onClick={addItem}>
        추가
      </button>

      {/* 목록 */}
      {/* 전체 삭제 버튼 만들기 */}
      <ItemList items={items} onUpdate={updateItem} onDelete={deleteItem} />
      <button style={styles.button} onClick={() => {
        setItems([]);
      }}>전체삭제</button>

      {/* 빈 목록 메시지 표시 v2 */}
      {/* {
        items.length > 0 ?
        <ItemList items={items} onUpdate={updateItem} onDelete={deleteItem} /> :

        <p>현재 아이템이 없습니다.</p>
      } */}

      {/* 전체삭제 v2 */}
      {/* <button style ={styles.button} onClick={() => {
        setItems([]);
      }}>삭제 </button> */}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "50px auto",
    borderRadius: "16px",
    background: "#f9f9ff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#4a6ee0", marginBottom: "20px" },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "8px",
  },
  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    background: "#4a6ee0",
    color: "white",
    cursor: "pointer",
  },
};

export default App;
