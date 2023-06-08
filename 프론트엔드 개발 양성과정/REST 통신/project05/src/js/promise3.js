const food =()=>{
return new Promise((resolve, reject)=>{
  resolve("음식을 주문합니다.")
});
};

const step2 =(message)=>{
  console.log(message);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("음식재료 준비"),3000);
  });
  };

const step3 =(message)=>{
  console.log(message);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("음식재료 제작"),3000);
  });
  };

const step4 =(message)=>{
  console.log(message);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("음식재료 완료"),3000);
  });
  };

  food()
  .then((result)=>{step1(result)})
  .then((result)=>{step2(result)})
  .then((result)=>{step3(result)})
  .then((result)=>{step4(result)})