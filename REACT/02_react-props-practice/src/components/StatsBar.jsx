export default function StatsBar({ items = [] }) {
  return (
    <div className="stats">

      {/* TODO: items 의 모든 요소를 출력 */}
      {/* 배열 API 중 map 사용 */}
      {/* 
        <div className="stat">
          <b>item의 value</b>
          <div className="muted">items의 label</div>
        </div>        
      */}
      {
        items.map((v) => {
          return (<div className="stat">
            <b>{v.value}</b>
            <div className="muted">{v.label}</div>
          </div>
          )
        })
      }
    </div>
  );
}
