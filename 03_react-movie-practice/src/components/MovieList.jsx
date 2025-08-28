/* 
  영화 정보 API를 활용해서 데이터를 fetch 하세요 
  URL: https://api.themoviedb.org/3/search/movie
  필수 파라미터1: api_key (cba95d401a14ab806ffc13a5052aab89)
  필수 파라미터2: query (서울)
*/

import { useState, useEffect } from "react";
import Movie from "./Movie";

function MovieList() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [query]);

  /* TODO: fetchMovies 함수를 작성하세요.
    1) fetch()를 사용해서 영화 데이터를 가져오세요.
    2) query state에 저장된 검색어를 사용하세요.
    3) 응답 받은 데이터를 movies state에 저장하세요.
  */


/*1 */
// function fetchMovies () {
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=cba95d401a14ab806ffc13a5052aab89&query=${query}`
//   fetch(url).then((data)=> {
//     return data.json()
//   }).then( (data)=> {
//     setMovies(data.results);
//   })
// }

/*2 */
const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=cba95d401a14ab806ffc13a5052aab89&query=${query}`;
  const res = await fetch(url);
  const data = await res.json();
  setMovies(data.results);
}

  return (
    <div style={styles.container}>
      <h1>영화 검색</h1>

      <div style={styles.searchBox}>
        {/* 
          TODO: 검색창에 입력된 값을 query state로 관리하세요.

          <input
            type="text"
            placeholder="영화 제목을 검색하세요"
            style={styles.input}
          />

        */}
        <input
            type="text"
            placeholder="영화 제목을 검색하세요"
            style={styles.input}
            value={query}
            onChange={(e)=> {
              setQuery(e.target.value)
            }}
          />

        {/* 
          TODO: 버튼을 클릭하면 fetchMovies 함수를 실행하세요. 

          <button style={styles.button}>
            검색
          </button>
        */}
        <button style={styles.button} onClick={() => {
          fetchMovies();
        }}>
            검색
          </button>
      </div>

      <ul style={styles.ul}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", margin: "20px" },
  searchBox: { margin: "20px 0" },
  input: {
    width: "90%",
    padding: "10px",
    fontSize: "18px",
    border: "1px solid #aaa",
    borderRadius: "6px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
  ul: { listStyle: "none", padding: 0 },
};

export default MovieList;