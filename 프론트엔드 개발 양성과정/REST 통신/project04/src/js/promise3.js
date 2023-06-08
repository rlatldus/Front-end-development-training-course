const step1 =(callback)=>{
  setTimeout(()=>{
    console.log("음식재료와 요리도구준비")
    callback();
  },2000)
}

const step2 =(callback)=>{
  setTimeout(()=>{
    console.log("요리실행")
    callback();
  },1000)
}

const step3 =(callback)=>{
  setTimeout(()=>{
    console.log("요리시작")
    callback();
  },1000)
}

const step4 =(callback)=>{
  setTimeout(()=>{
    console.log("요리 완성")
    callback();
  },1000)
}
step1(()=>{
  step2(()=>{
    step3(()=>{
      step4(()=>{
        console.log("음식이 다되었습니다.")
      })
    })
  })
})
// 콜백은 함수 안에 함수