import Item from "./Item";

// 빈 목록 메시지 표시하기
function ItemList({ items, onUpdate, onDelete }) {
  return (
    <ul style={styles.list}>
      {items.length == 0 ? '현재 아이템이 없습니다.' : 
        items.map((item, index) => (
          <Item
            key={index}
            index={index}
            item={item} // 아이템 번호 추가 v2. item={`${index+1}. ${item}`}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      }

    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
};

export default ItemList;
