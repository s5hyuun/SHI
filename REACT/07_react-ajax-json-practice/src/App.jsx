import UserList from "./components/UserList";
import ShopList from "./components/ShopList";

/*
  1) UserList → userData.json을 불러와서 사용자 + 게시글 정보를 출력
  2) ShopList → shopData.json을 불러와서 카테고리 + 상품 정보를 출력
*/
function App() {

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      <UserList />
      <ShopList />
    </div>
  );
}

export default App;
