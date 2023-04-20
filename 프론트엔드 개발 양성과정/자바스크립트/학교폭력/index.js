// var member1_id = "회원1";
// var member1_pw = 1234;

// var userId = prompt("아이디를 입력하세요","Guest");
// var userPw = prompt("비밀번호를 입력하세요","****");

// if((userId == member1_id) && (userPw == member1_pw)){ //모두일치하는 경우
//     document.writeln("로그인되었습니다");
// }else if((userId == member1_id ) || (userPw == member1_pw)){
//     document.writeln("아이디나 비밀번호정보가 일치하지 않습니다");

// }else{
//     document.writeln("일치하는 회원정보가 없습니다");
// }

function login(){
    // alert("fhdkfj")//테스트
    var mem1_id = "회원1";
    var mem1_pw = 1234;
    var userId = document.getElementById("userId").value;
    var userPw = document.getElementById("userPw").value;

    if((userId == mem1_id) && (userPw == mem1_pw)){ //모두일치하는 경우
        document.writeln("로그인되었습니다");
    }else if((userId == mem1_id ) || (userPw == mem1_pw)){
        document.writeln("아이디나 비밀번호정보가 일치하지 않습니다");
    
    }else{
        document.writeln("일치하는 회원정보가 없습니다");
    }
} //로그인함수








// document.writeln("일치하는 회원정보가 없습니다");// 써짐