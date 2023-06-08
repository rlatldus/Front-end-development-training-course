import { createLoading } from "../src/js/createLoading";

function createNewsElement(news) { //뉴스 api 가져오기
  const { title, sumary, link } = news;
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.setAttribute("href", link);
  anchor.textContent = title;

  listItem.className = "news-item";
  listItem.append(anchor);

  return listItem;
}

function hideLoading(parent){ // 로딩이미지 숨기기
  const loadingArea = parent.querySelector('.loading');
  loadingArea.style.display = 'none';
 }

function renderNews() { // 뉴스 보이기 전 잠깐 로딩이미지
  const NewsList = document.getElementById("news-li");
  createLoading(NewsList);
  
  setTimeout(function(){
    fetch("./data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const { news } = data;
        const newsList = news.map((news) => createNewsElement(news));
        NewsList.append(...newsList);
        console.log({news})
      })
      .finally(()=>{
        hideLoading(NewsList);
      })
  }, 1500);
}
document.addEventListener("DOMContentLoaded", function () {
  renderNews();
});




