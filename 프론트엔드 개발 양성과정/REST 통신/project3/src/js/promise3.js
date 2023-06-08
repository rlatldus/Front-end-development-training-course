const order = new Promise((resolve, reject) => {
  const coffee = prompt("커피를 주문하시겠습니까?", "아이스아메리카노커피");
  if (coffee != null && coffee != "") {
    document.querySelector("#start").innerText = `${coffee}주문`;
    setTimeout(() => resolve(coffee), 3000);
    resolve(coffee);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

function display(result){
  document.querySelector("#end").innerText = `${result}커피준비완료`;
}

function showErr(err){
  document.querySelector("#start").innerText = err;
}
// order then 메소드가 실행되면 promise객체라 리턴
// 입력상태에 따라 상태가 바뀜
order
.then(display)
.catch(showErr);