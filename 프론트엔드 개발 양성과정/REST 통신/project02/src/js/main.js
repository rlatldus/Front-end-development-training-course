import { createLoading } from './createLoading.js';  

function createNewsElement(news) {
    const {title, sumary, link} = news;
  
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
  
    anchor.setAttribute('href', link);
    anchor.textContent = title;
  
    listItem.className = 'news-item';
    listItem.append(anchor);
  
    return listItem;
  }

  function renderNews() {
    const NewsList = document.getElementById('news-list');
  
    createLoading(NewsList);
  
    setTimeout(function() {
      fetch('./data/news.json')
        .then((res) => res.json())
        .then((data) => {
          const { news } = data;
          const newsList = news.map((news) =>
            createNewsElement(news)
          );
  
          NewsList.append(...newsList);
        })
  
        .finally(() => {
          hideLoading(NewsList);
        });
  
    }, 1500);
  }


  function createRanking(ranking) {
    const { title, summary, link, thumbnailImage } = ranking;
  
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.innerHTML = `
      <div class="topRanking">
                <img src="${thumbnailImage}" alt="thumbnail" class="thumbnail" />
                <div class="information">
                    <h3 class="title">${title}</h3>
                    <p class="description">${summary}</p>
                </div> 
      </div>`;
  
    return anchor;
  }
  
  function renderRanking() {
    const rankingSection = document.getElementById('rankingList');

    createLoading(rankingSection);

    setTimeout(() => {
      fetch('./data/ranking.json')
        .then((res) => res.json())
        .then((data) => {
          const { ranking } = data;
          const RankingList = ranking.map((ranking) =>
                createRanking(ranking)
          );
  
          rankingSection.append(...RankingList);
        })
        .finally(() => {
            hideLoading(rankingSection);
        });
    }, 500);
  }

 function hideLoading(parent) {
    const loading = parent.querySelector('.loading');
    loading.style.display = 'none';
  }

document.addEventListener('DOMContentLoaded', function() { 
  //alert("DOMContentLoaded");
  renderRanking();  
  renderNews();
});