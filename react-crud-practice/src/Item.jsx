import { useState } from "react";

function Item({ item, index, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item);

  return (
    <li style={styles.item}>
      {editing ? (
        <>
          <input
            style={styles.input}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            style={styles.button}
            onClick={() => {
              onUpdate(index, text);
              setEditing(false);
            }}
          >
            저장
          </button>
        </>
        // 아이템 번호 추가하기
      ) : (
        <>
          <span>{index+1}.{item}</span>
          <div>
            <button style={styles.button} onClick={() => setEditing(true)}>
              수정
            </button>
            <button style={styles.delete} onClick={() => onDelete(index)}>
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    background: "white",
    marginBottom: "8px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  input: {
    padding: "5px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginRight: "5px",
  },
  button: {
    marginLeft: "5px",
    padding: "4px 8px",
    fontSize: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#4a6ee0",
    color: "white",
    cursor: "pointer",
  },
  delete: {
    marginLeft: "5px",
    padding: "4px 8px",
    fontSize: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#ff4081",
    color: "white",
    cursor: "pointer",
  },
};

export default Item;
