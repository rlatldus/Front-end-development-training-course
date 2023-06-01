
  
  $(function(){
    window.setTimeout("location.reload()", 1000); //계속 리로드
    const program1="05:00 생활의 발견 스페셜"
    const program2="05:10내고향 스페셜"
    const program3="06:00 뉴스광장"
    
    const li = document.createElement('ul');
    li.innerHTML = `
    <li>${program1}</li>
    <li>${program2}</li>
    <li>${program3}</li>
    `
    const tv = document.querySelector('.tv')
    tv.appendChild(li)
    

  const now = new Date();
  let clock = (s) => {
    return (
      now.getHours() == 11 && now.getMinutes() == 0 && now.getSeconds() > s
    );
  };
  let elementUl = (a) => { 
    $(`ul li:nth-child(${a})`).addClass("on");
  };

  for (let x = 1; x < 6; x++) {
    clock((x - 1) * 10) && elementUl(x);
  }
})
