import './App.css'
import PostForm from './PostForm';
import PostList from './UserList';
import UserList from './UserList';

function App() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserList />
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
