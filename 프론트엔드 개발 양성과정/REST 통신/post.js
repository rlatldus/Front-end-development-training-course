//NOTE 바꾸기
  fetch('http://localhost:3000/pannel', {
    method: 'post', //HTTP 요청방법
    body: JSON.stringify({
      title: 'easy English',
      author: 'Kim'
    }), //전송할 데이터
    headers: {
      'content-type': "application/json; charser=utf-8"
    }, 
  })//데이터의 언어타입정의
    .then(response => response.json())
    .then(json => console.log(json)) // 생성

    


  fetch('http://localhost:3000/title', {
    method: 'post', //HTTP 요청방법
    body: JSON.stringify({
      nameee: "listening854. started it to~",
      authorderer: 'Kim'
    }), //전송할 데이터
    headers: {
      'content-type': "application/json; charser=utf-8"
    }, 
  })//데이터의 언어타입정의
    .then(response => response.json())
    .then(json => console.log(json)) // 생성