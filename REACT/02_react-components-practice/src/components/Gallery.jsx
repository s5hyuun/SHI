// map() 써서 반복문 돌려보기 
function Gallery() {

  const img = [
    '',
    '',
    '',
    '',
    '',
    ''
  ];

  return (<section class="section">
    <h2>갤러리 섹션</h2>

    {img.map(() => {
      return (
        <div class="gallery" id="gallery" aria-label="gallery thumbnails"></div>
      )
    })}
  </section>);
}

export default Gallery;