import CommentList from "./CommentList"
import Comment from "./Comment"

function App() {
  const comments = [
        { name: "Mike", comment: "안녕하세요." },
        { name: "Steve", comment: "반갑습니다." },
        { name: "Jane", comment: "Hello~" },
    ];

  return (
    <>
      <CommentList>
        {
                comments.map((v) => {
                    return (<Comment name={v.name} comment={v.comment} />)
                })
            }
      </CommentList>
    </>
  )
}

export default App