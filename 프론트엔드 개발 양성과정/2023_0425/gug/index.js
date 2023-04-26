function tab(m) {
  var memder = m.getAttribute('href');
  var login = document.getElementById('login').style;
  var login_guest = document.getElementById('login_guest').style;
  var tab1 = document.getElementById('tab1').style;
  var tab2 = document.getElementById('tab2').style;

  if (memder == '#login') {
    login.display = 'block';
    login_guest.display = 'none';
    tab1.color = 'red';
    tab1.borderBottom = '3px solid red';
    tab2.color = 'black';
    tab2.borderBottom = '0';
  } else {
    login.display = 'none';
    login_guest.display = 'block';
    tab2.color = 'red';
    tab2.borderBottom = '3px solid red';
    tab1.color = 'black';
    tab1.borderBottom = '0';
  }
}

//getAttribut 는 속성을 가저오는
//setAttribut 은 속성을 바꾸는
function showCar() {
  // var source = x.getAttribute('href');
  // var gImage = 
  // gImage.setAttribute('src', source);
  // alert("s")
  document.getElementsByClassName('gImage').style.backgroundImage="url('../image/gug3.jpg')";
}

function login_close(a) {
  var loginBox = (document.getElementById('loginBox').style.display = a);
}

function login() {
  var mem1_id = '회원';
  var mem2_pw = 1234;

  var userId = document.getElementById('userId').value;
  var userPw = document.getElementById('userPw').value;
  if (userId == mem1_id && userPw == mem2_pw) {
    document.writeln('로그인 되었습니다~');
  } else if (userId == mem1_id || userPw == mem2_pw) {
    document.writeln('아이디 또는 비밀번호 정보가 일치하지 않습니다!');
  } else {
    document.writeln(
      '로그인 정보가 맞지 않습니다. 아이디나 비밀번호를 확인하세요!'
    );
  }
}
