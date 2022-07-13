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
    const url = e.target.getAttribute('href');

    // 주소창에 href값을 집어넣는다
    history.pushState(null, null, url);
    router();
  }
})

async function router() {
  // 라우터 주소를 준비해놓는다
  const routes = [
      { path: '/', view: () => Home({ username: 'bunny' }) }, // React: props
      { path: '/posts', view: Posts },
      { path: '/contact', view: Contact },
  ]

  // location.pathname = 주소창의 주소. history에 push된 값
  
  // location.path에 일치하는 route를 리턴한다
  const route = routes.filter(route => location.pathname === route.path);

  // 일치하는 route의 view 함수 실행
  const element = await route[0].view();

  const layout = {
    type: 'div',
    props: {},
    children: [
      { type: 'nav',
        props: { 'class': 'nav' },
        children: [
          { type: 'ul', props: {}, children: [
            { type: 'li', props: {}, children: [ { type: 'a', props: { 'href': '/', 'class': 'nav__link', 'data-link': '' }, children: ['Home'] }
            ] },
            { type: 'li', props: {}, children: [
            { type: 'a', props: { 'href': '/posts', 'class': 'nav__link', 'data-link': '' }, children: ['Posts'] }
          ] },
            { type: 'li', props: {}, children: [
              { type: 'a', props: { 'href': '/contact', 'class': 'nav__link', 'data-link': '' }, children: ['Contact'] },
            ] },
          ] }
        ]
      },
      element
    ]
  }

  // 기존의 DOM
  console.log(document.getElementById('root').firstElementChild)
  // 새로운 DOM
  console.log(createElement(layout))

  // React: render (Reconciliation 재조정)
  document.getElementById('root').replaceChildren(
    createElement(layout)
  )
}

////////////////////////////////////////////////////////////////////////////////

// React: Component (function component)
function Home(props) {
  return {
    type: 'div',
    props: {},
    children: [
      { type: 'h1', props: {}, children: ['Home'] },
      { type: 'p', props: {}, children: [`Hi, ${props.username}`] },
    ]
  }
}

async function Posts() {
  const result = await fetch('https://dapi.kakao.com/v2/search/image?query=제네시스', {
    method: 'GET',
    headers: { 'Authorization': 'KakaoAK d5a49f32e43c184c2823a05cdaf8c841' }
  })
  .then(res => res.json())

  const articleList = result.documents.map(article => {
    return { type: 'img', props: { 
      'src': article.image_url, 'style': 'width:100px; height: 100px; object-fit: cover' 
    }, children: [] }
  })

  console.log(articleList);

  return {
    type: 'div',
    props: {},
    children: [
      { type: 'h1', props: {}, children: ['Posts'] },
      { type: 'div', props: {}, children: articleList },
    ]
  }
}

function Contact() {
  return {
    type: 'div',
    props: {},
    children: [
      { type: 'h1', props: {}, children: ['Contact'] },
      { type: 'p', props: {}, children: ['contact..'] },
    ]
  }
}


////////////////////////////////////////////////////////////////////////////////


  // function createElement(node) {
  //   if (typeof node === 'string') {
  //     return document.createTextNode(node)
  //   }
  
  //   const $el = document.createElement(node.type);
  
  //   Object.keys(node.props).map(prop => {
  //     // event 바인딩
  //     if (prop.match(/^on/)) {
  //       $el.addEventListener(prop.slice(2).toLocaleLowerCase(), node.props[prop]) 
  //       // attribute가 true or false일때
  //     } else if (typeof node.props[prop] === 'boolean') {
  //       if (node.props[prop]) {
  //         $el.setAttribute(prop, '')
  //       } 
  //     } else {
  //       $el.setAttribute(prop, node.props[prop])
  //     }
  //   })
    
  //   node.children.map(c => {
  //     $el.appendChild(createElement(c))
  //   })
  
  //   return $el;
  // }


  // obj[key]
  // obj.key
  // const user = {
  //   username: 'bunny',
  //   age: 1,
  //   color: 'brown'
  // }

  // console.log(user)
  // console.log(user.username) // obj.key
  // console.log(user['username']) // obj[key]

  // slice(2)
  // String, Array

  // console.log(user.username.length)
  // console.log(user.username[0])
  // console.log(user.username.slice(2)) // index 2번 부터 자른다

  // props.match(/^on/)

  // console.log(user.username.match(/^b/)) // !null
  // regex /pattern/ 
  // console.log(user.username.match(/^u/)) // null
  // console.log(user.username.match(/^z/)) // null

  // const h1 = document.createElement('h1');
  // h1.innerHTML = 'Heading'

  // document.getElementById('root').appendChild(h1);

  // const h1 = document.createElement('h1');

  // // document.createTextNode(string): text node를 만든다
  // const content = document.createTextNode('Heading');

  // // .appendChild(node)
  // h1.appendChild(content)

  // document.getElementById('root').appendChild(h1);

  // replaceChildren()

  // var h1 = document.createElement('h1')
  // h1.textContent = '제네시스'
  // document.getElementById('root').appendChild(h1)


  // var p = document.createElement('p')
  // p.textContent = '스타리아'

  // document.getElementById('root').replaceChildren(p)

  // map()

  // const cars = ['제네시스', '스타리아', '캐스퍼']

  // // Array.map(callback): Array의 length만큼 callback 실행
  // cars.map(car => {
  //   console.log('실행됨')
  //   console.log(car)
  // })

  // cars.map(function (car) {
  //   console.log(car)
  // })


  // Object.keys(object): object의 key를 array로 return한다.
  // const user = {
  //   username: 'bunny',
  //   age: 1,
  //   color: 'brown'
  // }

  // // const keys = Object.keys(user)

  // // console.log(keys)

  // Object.keys(user).map(key => {
  //   console.log(key)
  // })

  // Object.keys(user).map(key => {
  //   console.log(user[key])
  // })

  // Recursive function (재귀함수)
  // 함수 안에서 자신을 호출
  // re(0)

  // function re(num) {
  //   console.log(num)

  //   if (num === 10) {
  //     return;
  //   }

  //   re(num + 1)
  // }


function createElement(node) {

  // children이 string인 경우
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  const $el = document.createElement(node.type);

  Object.keys(node.props).map(key => { // key: class, id, ...
    $el.setAttribute(key, node.props[key])
  })

  node.children.map(children => {
    $el.appendChild(createElement(children))
  })

  return $el;
}



