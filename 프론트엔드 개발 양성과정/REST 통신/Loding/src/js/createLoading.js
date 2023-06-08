export function createLoading(parent){ // 로딩이미지 생성
    const loadingArea = parent.querySelector('.loading');
    const loadingImg = document.createElement('img');
    loadingImg.alt = 'loading';
    loadingImg.src = './src/img/Winter.gif';
  
    loadingArea.append(loadingImg);
  }