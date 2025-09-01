import { useState, useEffect } from 'react'

export default function FetchDemo() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  {/* 
    TODO: 컴포넌트가 마운트될 때 
          jsonplaceholder의 users 데이터를 fetch 하세요.
          then() 또는 await 사용
    ex)
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setTodos(data))
  */}
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setTodos(data)
        setLoading(false); // 로딩이 다 되면 "로딩 중.." 안 뜨게 함
      })
  }, []);

  return (
    <section>
      <h2>3) FetchDemo — 데이터 로딩</h2>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생: {error.message}</p>}
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
      </ul>
    </section>
  )
}
