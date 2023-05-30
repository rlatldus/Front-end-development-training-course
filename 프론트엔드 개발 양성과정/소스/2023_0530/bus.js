const bus = [
  "청백아파트1단지",
  "대우아파트",
  "청백아파트",
  "월계주공2단지앞",
  "월계주공2단지",
  "월계공단",
  "영광고등학교",
  "신창중학교후문",
  "유원극동아파트",
  "쌍용스윗닷홈아파트",
  "초안아파트.흥화브라운빌아파트",
  "창3동염광아트빌",
  "북서울농협창동지점",
  "신화초교입구",
  "신창교",
  "북부수도사업소",
  "번동사거리",
  "창동서울탁주앞",
  "창동신창시장",
  "국립현대미술관창동레지던시",
  "창림초교창동신창아파트앞",
  "도봉주공4단지",
  "녹천북부역",
  "창1동대우그린아파트",
  "창일중학교",
  "창동역서측",
  "상아아파트",
  "창동주공1단지",
  "창5동현대1차아파트",
  "도봉구보건소앞",
  "쌍문동금호1차삼익아파트",
  "쌍문동현대 한양아파트",
  "쌍문동성원아파트",
  "세그루학원",
  "둘리뮤지엄 대우이안극동아파트",
  "옛고을길입구",
  "정의여중고입구",
  "창동고등학교",
];

window.addEventListener("load", function loadstartionlist() {
  // option 넣기
  const busMapstation = [];
  for (let i in bus) {
    busMapstation.push(`<option value="${i}">${bus[i]}</option>`);
  }
  document.querySelector("#start").innerHTML = busMapstation.join("");
  document.querySelector("#end").innerHTML = busMapstation.join("");
});

function calculator() {
  //계산
  const start = document.querySelector("#start").value;
  const end = document.querySelector("#end").value;
  const result = document.querySelector("#result");
  const type = document.querySelector("[name=group]:checked").value;
  let stationCount = Math.abs(start - end);
  let distance = stationCount * 1250;

  const busCost = (distance, type) => {
    // 요금
    let baseAmount =
      type == "adult"
        ? 1250
        : type == "young"
        ? 720
        : type == "children"
        ? 450
        : 0;
    if (distance <= 10000) {
      return baseAmount;
    } else if( distance<=30000 ){
      return baseAmount +Math.ceil((distance-10000)/5000*100);
      // 소수점 반올림
    }else{
      return baseAmount +Math.ceil((2000)/5000*100)+Math.ceil((distance-30000)/3000*100);

    }
  };

  const resulttext = (x) => {
    // 결과 표시
    result.insertAdjacentHTML("afterbegin", `<p>${x}</p>`);
  };

  if (start == end) {
    resulttext(`정거장이 ${bus[start]}로 같습니다`);
  } else {
    resulttext(
      `출발정거장은 ${bus[start]}이고 도착정거장은 ${
        bus[end]
      } 로 ${distance}m거리의 총 ${stationCount}개의 정류장을거쳤어요</p><p>
      버스요금은 ${busCost(distance, type)}원 입니다`
    );
  }
}
