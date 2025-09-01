import { useEffect, useState } from 'react';
import { fetchUsers } from './api';

function PostList() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function get() {
    const res = await fetchUsers();
    setposts(res);
    setLoading(false);
    console.log(res);
  }

  useEffect( () => {
    get();
    // fetchUsers()
    //   .then(data => {
    //     setposts(data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError(err);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error.message}</p>;

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export default PostList;
