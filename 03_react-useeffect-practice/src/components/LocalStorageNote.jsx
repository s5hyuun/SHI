import { useState, useEffect } from 'react'

export default function LocalStorageNote() {
  const [note, setNote] = useState('')

  {/* 
    TODO:
    1) 컴포넌트가 처음 마운트될 때 localStorage에 저장된 note 값을 불러오세요.
    2) note 상태에 불러온 값을 저장하세요.
    
    ex) localStorage.getItem('note')
  */}
  useEffect(() => {
    const saved = localStorage.getItem('note')
    if (saved) setNote(saved)
  }, [])

  {/* 
    TODO:
    note 값이 바뀔 때마다 localStorage에 note 값을 저장하세요.

    ex) localStorage.setItem('key', value)
  */}
  useEffect(() => {
    localStorage.setItem('note', note);
  }, [note]);

  return (
    <section>
      <h2>2) LocalStorageNote — 동기화</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="메모를 입력하세요"
        rows="3"
      />
    </section>
  )
}
