export default function PlanCard({ name, price, features = [] }){
  return (
    <article className="card">
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <ul className="reset feature-list">

        {/* TODO: features 의 모든 요소를 li 태그로 출력 */}
        {/* 배열 API 중 map 사용 */}
        {/* <li>• feature</li> */}

      </ul>
    </article>
  );
}
