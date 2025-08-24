export default function App() {
  const user = {
    name: "Joy",
    role: "강의자",
    badge: "⭐ Gold Member",
    comment: "컴포넌트 합성과 추출을 연습해봅시다!"
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>컴포넌트 합성 · 추출 · 객체 props</h1>
      <Comment user={user}/>
    </div>
  );
}

function Comment(props) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
      <h2>💬 Comment</h2>
      <UserInfo user={props.user}/>
      <p style={{ marginTop: 8 }}>{props.user.comment}</p>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Badge user={props.user}/>
      <div>
        <strong>{props.user.name}</strong> ({props.user.role})
      </div>
    </div>
  );
}

function Badge(props) {
  return (
    <span
      style={{
        backgroundColor: "gold",
        color: "black",
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: 12,
        fontWeight: "bold"
      }}
    >
      {props.user.badge}
    </span>
  );
}

