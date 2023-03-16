const ham = document.querySelector('#js-hamburger');//js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav');      //js-navの要素を取得し、変数navに格納
const clstp = document.querySelector('#js-tp');
const clsgall = document.querySelector('#js-gall');
const clspro = document.querySelector('#js-pro');
const clscon = document.querySelector('#js-con');

ham.addEventListener('click', function () {  //ハンバーガーメニューをクリックしたら

  ham.classList.toggle('active');  
  nav.classList.toggle('active');

});

clstp.addEventListener('click', function () {  //topを押すと閉じる

  ham.classList.remove('active');  
  nav.classList.remove('active');

});

clsgall.addEventListener('click', function () {  //galleryを押すと閉じる

  ham.classList.remove('active');  
  nav.classList.remove('active');

});

clspro.addEventListener('click', function () {  //profileを押すと閉じる

  ham.classList.remove('active');  
  nav.classList.remove('active');

});

clscon.addEventListener('click', function () {  //contactを押すと閉じる

  ham.classList.remove('active');  
  nav.classList.remove('active');

});