//NOTE  교체하기
fetch('http://localhost:3000/pannel/3', {
    method: 'put', //HTTP 요청방법
    body: JSON.stringify({
      title: 'easy easy easy English',
      author: 'Kim siyeon'
    }), //전송할 데이터
    headers: {
      'content-type': "application/json; charser=utf-8"
    }, 
  })//데이터의 언어타입정의
    .then(response => response.json())
    .then(json => console.log(json)) // 생성
