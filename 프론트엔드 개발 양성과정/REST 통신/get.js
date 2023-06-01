//NOTE 가져오기


  fetch('http://localhost:3000/program')
    .then(response => response.json())
    .then(json => console.log(json))

  fetch('http://localhost:3000/pannel')
    .then(response => response.json())
    .then(json => console.log(json))

  fetch('http://localhost:3000/pannel/2')
    .then(response => response.json())
    .then(json => console.log(json))

  fetch('http://localhost:3000/pannel?num=3')
    .then(response => response.json())
    .then(json => console.log(json))

