export function createLoading(parent) {
    const loadingArea = parent.querySelector('.loading');
    const loadingImg = document.createElement('img');
    loadingImg.alt = 'loading';
    loadingImg.src = './src/image/loading.gif';
  
    loadingArea.append(loadingImg); 
  }