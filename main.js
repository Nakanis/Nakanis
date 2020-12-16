'use strict';

const num = 5;
const winner = Math.floor(Math.random() * num);

for(let i = 0; i < num; i ++){
const div = document.createElement('div');
div.classList.add('box');


div.addEventListener('click', () => {
if(i === winner){
  div.textContent = 'よくわかったね。飴ちゃんいる？';
  ActiveXObject.classList.add('win');
} else {
div.textContent = 'ザッコwwwwwwwwww';
div.classList.add('lose');
}
});

document.body.appendChild(div);}




   
