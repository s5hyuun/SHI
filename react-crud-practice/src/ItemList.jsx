import Item from "./Item";

function ItemList({ items, onUpdate, onDelete }) {
  return (
    <ul style={styles.list}>
      {items.length == 0 ? '현재 아이템이 없습니다.' : 
        items.map((item, index) => (
          <Item
            key={index}
            index={index}
            item={item}
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
