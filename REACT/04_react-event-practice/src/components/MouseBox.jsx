import { useState } from "react";

/* 
  TODO:
  1. div에 onMouseEnter 이벤트를 추가해 "Mouse In"으로 상태 변경
  2. div에 onMouseLeave 이벤트를 추가해 "Mouse Out"으로 상태 변경
*/
function MouseBox() {
  const [message, setMessage] = useState("여기에 마우스를 올려보세요!");

  return (
    <div

      // TODO: onMouseEnter, onMouseLeave 이벤트 핸들러 작성
      // 마우스가 div에 들어오면 message의 값을 "Mouse In"
      // 마우스가 div에서 나가면 message의 값을 "Mouse Out"
      onMouseEnter={(e) => {
        setMessage("Mouse In");
      }}
      onMouseLeave = {() => {
        setMessage("Mouse Out");
      }}

      style={{
        width: "100%",
        height: "120px",
        border: "2px dashed #007acc",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "#007acc",
        background: "#f9fdff"
      }}
    >
      
      {message}
    </div>
    
  );
}

export default MouseBox;
