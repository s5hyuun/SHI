export default function ProfileCard({ name, role, avatar, badges = [], children }){
  return (
    <article className="card">
      <div className="flex">
        <img className="avatar" src={avatar} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="muted">{role}</p>

          {/* TODO: badges 의 모든 요소를 span 태그로 출력 */}
          {/* 배열 API 중 map 사용 */}
          {/* <span className="badge-sm">badge 요소</span>) */}
          {
            badges.map((v) => {
              return (
                <span className="badge-sm">{v}</span>
              )
            })
          }

        </div>
      </div>
      <p style={{marginTop:8}}>{children}</p>
    </article>
  );
}
