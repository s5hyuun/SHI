import { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import DataList from "../components/DataList";
import Pagination from "../components/Pagination";

export default function TouristInfo() {

  const [data, setData] = useState([]); // 서버로부터 받을 데이터
  const [totalCount, setTotalCount] = useState(0); // 전체 데이터 개수
  const [page, setPage] = useState(1); // 현재 페이지
  const [count] = useState(10); // 한 페이지에 보여줄 데이터 개수
  const [search, setSearch] = useState(""); // 검색어

  const getData = async () => {

    /*
      TODO: fetch를 이용해서 
      https://ggoreb.pythonanywhere.com/tour/data/ API를 호출하고
      결과를 setData, setTotalCount로 저장하세요.
      
      요청 파라미터: page, count, search
    */
    const url = `https://ggoreb.pythonanywhere.com/tour/data/?page=${page}&count=${count}&search=${search}`;
    const res = await fetch(url);
    const json = await res.json();
    setData(json.data);
    setTotalCount(json.count);

  };

  useEffect(() => {
    getData();
  }, [page, search]);

  const totalPages = Math.ceil(totalCount / count);

  return (
    <div>
      <Header
        title="거제 관광지 정보"
        search={search}
        totalCount={totalCount}
        totalPages={totalPages}
      />
      <SearchBox onSearch={setSearch} />

      {/* 
        주차장 데이터와 관광지 데이터의 구조가 서로 다릅니다.
        따라서 DataList가 직접 내용을 그리면 재사용할 수 없습니다.
        각 페이지에서 "어떤 모습을 그릴 것인지" 직접 정의해서 
        DataList에 전달하기 위해 renderItem 콜백 함수를 사용합니다.
      */}
      <DataList
        items={data}
        renderItem={(item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ddd",
              margin: "8px",
              padding: "12px",
              borderRadius: "6px",
              background: "#f9f9f9",
            }}
          >
            <h3>{item.name}</h3>
            <p>📍 {item.address}</p>
            <p>☎ {item.contact}</p>
            <p
              style={{
                margin: "6px 0",
                color: "#555",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3, // 최대 3줄까지만 표시
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.summary}
            </p>
            {item.parking && <p>🅿 주차: {item.parking}</p>}
            {item.stroller && <p>유모차: {item.stroller}</p>}
          </li>
        )}
      />

      <Pagination
        totalPages={totalPages}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
}
