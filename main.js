'use strict';


{
  const btn = document.getElementById('btn');
  const text = document.getElementById('text');


  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);
  btn.textContent = n;

  switch(n){
    case 0:
      btn.textContent = '大吉';
      text.textContent = '割りばしがきれいに割れるようになるでしょう';
      break;
    case 1:
      btn.textContent = '中吉';
      text.textContent = '人生楽しもうぜ';
      break;
    case 2:
      btn.textContent = '凶';
      text.textContent = 'PCのスペースキーが壊れるでしょう';
      break;
  }
  });
}






   
