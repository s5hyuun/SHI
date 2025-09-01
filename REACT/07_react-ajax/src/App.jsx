import './App.css'
import PostForm from './PostForm';
import PostList from './UserList';
import UserList from './UserList';
import PostForm2 from './PostForm2';

function App() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserList />
      <PostList />
      <PostForm /> 
      <PostForm2 />
    </div>
  );
}

export default App;
