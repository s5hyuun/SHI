import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback, useMemo } from 'react';

function App() {
  const create = useMemo(() => {
    const list = [];
    for (let i = 1; i <= 5000; i++) {
      list.push({ id: i, text: `리액트 ${i}`, checked: i % 4 ? false : true })
    }
    console.log('리스트 생성');
    return list;
  }, []);

  const [todos, setTodos] = useState(create);

  const nextId = useRef(todos.length + 1);
  
  const onInsert = (text) => {
    const todo = {
      id: nextId.current, text,
      checked: false,
    };
    setTodos( todos => [...todos, todo] );

    nextId.current += 1;
  };

  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
}

export default App;
