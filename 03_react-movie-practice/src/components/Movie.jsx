function Movie({ movie }) {
  return (
    <li style={styles.li}>
      {/* 영화 이미지가 없을 경우 대체 이미지를 보여줍니다. */}
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
            : "http://ggoreb.com/images/Portrait_Placeholder.png"
        }
        alt={movie.title}
        style={styles.img}
      />
      <h2 style={styles.h2}>{movie.title}</h2>
      <p style={styles.p}>평점: {movie.vote_average}</p>
      <p style={styles.p}>개봉일: {movie.release_date}</p>
      <p style={styles.p}>{movie.overview}</p>
    </li>
  );
}

const styles = {
  li: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  },
  img: { maxWidth: "100%", height: "auto", borderRadius: "8px" },
  h2: { fontSize: "20px", margin: "10px 0" },
  p: { fontSize: "16px", margin: "5px 0" },
};

export default Movie;
