import { useEffect } from 'react'

export default function ScrollRestorer() {

  /* 
    TODO:
    1) 컴포넌트가 마운트될 때 localStorage에서 scrollY 값을 불러와 해당 위치로 스크롤하세요.
    2) 스크롤할 때마다 현재 위치를 localStorage에 저장하세요.
    3) 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하세요.
    ex) 
      localStorage에서 scrollY 값을 불러오고 해당 위치로 이동하는 코드)
      const saved = localStorage.getItem('scrollY')
      if(saved) window.scrollTo(0, parseInt(saved))

      스크롤할 때마다 현재 위치를 localStorage에 저장하는 코드)
      const onScroll = () => localStorage.setItem('scrollY', window.scrollY)
      window.addEventListener('scroll', onScroll)

      이벤트 리스너 제거 코드)
      window.removeEventListener('scroll', onScroll)
  */
  useEffect(()=> {
      const saved = localStorage.getItem('scrollY')
      if(saved) window.scrollTo(0, parseInt(saved))

      const onScroll = () => localStorage.setItem('scrollY', window.scrollY)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
  }, []);
  
  return (
    <section>
      <h2>5) ScrollRestorer — 스크롤 위치 복원</h2>
      <p>스크롤 후 새로고침 해보세요. 위치가 유지됩니다.</p>
      <div style={{ height: '200vh', background: 'linear-gradient(#fff, #ddd)' }}></div>
    </section>
  )
}
