import Comment from "./Comment";

function CommentList(props) {
    // const comments = [
    //     { name: "Mike", comment: "안녕하세요." },
    //     { name: "Steve", comment: "반갑습니다." },
    //     { name: "Jane", comment: "Hello~" },
    // ];
    return (
        <div style ={{width: '100vw'}}>
            {props.children}
            {/* {
                comments.map((v) => {
                    return (<Comment name={v.name} comment={v.comment} />)
                })
            } */}

        </div>
    )
}
export default CommentList;