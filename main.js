'use strict';

const target = document.getElementById('target');

target.addEventListener('click', () =>{
  // document.getElementById('target').style.background = 'pink';
  // document.getElementById('target').style.borderRadius = '50%';
  target.classList.toggle('circle');
} );