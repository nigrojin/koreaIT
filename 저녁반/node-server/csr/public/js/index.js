// 페이지가 처음 로드되었을 때
router()

// 앞으로 가기 뒤로가기 버튼을 눌렀을 때
window.addEventListener('popstate', () => {
    router()
})

document.body.addEventListener('click', e => {
    // nav의 a태그를 클릭했을 때
    if (e.target.matches('[data-link]')) {
    // 기본값을 실행하지 않는다
    // a태그가 서버에 요청을 보내지 않는다.
      e.preventDefault();
      
    // a태그의 href속성 값을 가져온다
      const url = e.target.getAttribute('href')

      // 주소창에 href값을 집어넣는다
      history.pushState(null, null, url);
      router();
    }
  })

  function router() {
    // 라우터 주소를 준비해놓는다
    const routes = [
        { path: '/', view: Home },
        { path: '/about', view: About },
        { path: '/posts', view: Posts },
    ]

    // location.pathname = 주소창의 주소. history에 push된 값
    
    // location.path에 일치하는 route를 리턴한다
    const route = routes.filter(route => location.pathname === route.path)

    // 일치하는 route의 view 함수 실행
    route[0].view()
  }

  function Home() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Home'
        document.getElementById('root').replaceChildren(h1)
  }
  function About() {
      document.getElementById('root').innerHTML = `
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa dicta ut. Eius rem aut, quas incidunt aliquam unde nostrum consequatur dolor totam omnis nobis perferendis nisi accusantium vero labore.
      </p>
      `
  }
  function Posts() {
      const div = document.createElement('div');

      const h1 = document.createElement('h1');
      h1.innerHTML = 'Posts'

      const ul = document.createElement('ul')

      const cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"]

        for (let car of cars) {
            let li = document.createElement('li')
            li.innerHTML = car
            ul.appendChild(li)
        }

        div.appendChild(h1)
        div.appendChild(ul)

        document.getElementById('root').replaceChildren(div)
  }