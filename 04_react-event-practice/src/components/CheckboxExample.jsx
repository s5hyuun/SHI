import { useState } from "react";

/*
  TODO:
  1. checkbox input에 onChange 이벤트를 연결
  2. event.target.checked 값을 이용해 state 변경
  3. p 태그에 체크 상태(true/false)를 출력
*/
function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChangeCapture={(e) => setChecked(e.target.checked)}
          
          // TODO: onChange 핸들러 작성
          onChange={(e)=>{
            setChecked(e.target.checked);
        }}
        />
        동의합니다
      </label>
      <p>
        체크 상태: 
        
        {/* TODO: state에 따라 ✅ 또는 ❌ 표시 */}
        <span>{checked ? "✅" : "❌" }</span>

       
      </p>
    </div>
  );
}

export default CheckboxExample;
