$(function () {
  window.setTimeout("location.reload()", 1000); //계속 리로드

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
});
