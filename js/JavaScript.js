// JavaScript Document

const array = [
           '<img src="img/nenga2022_90.png" alt="ラッキー度90%">',
           '<img src="img/nenga2022_12.png" alt="ラッキー度12%">',
           '<img src="img/nenga2022_120.png" alt="ラッキー度120%">',
           '<img src="img/nenga2022_3.png" alt="ラッキー度3%">',
           '<img src="img/nenga2022_20.png" alt="ラッキー度20%">',           '<img src="img/nenga2022_30.png" alt="ラッキー度30%">',           '<img src="img/nenga2022_55.png" alt="ラッキー度55%">',
       ]

const shuffle = ([...array]) => {
 for (let i = array.length - 1; i >= 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
}

let start = false;  //スタートボタンのフラグ
let shuffleId;
const changeImg = () => {
 shuffleId = setInterval(function(){
   for(let bun2 of shuffle(array)){//シャッフル後の配列の要素繰り返し
       $('.shuffle2').html(bun2); 
   }
 }, 12);

}
$(function(){
$('button').on('click', function() {

  //スタートボタンをストップボタンに切り替え
  if(start == false) {
    $(this).text('ストップ');
    changeImg();
    start = true;

  //ストップボタンをスタートボタンに切り替え
  } else {
    $(this).text('スタート');
    clearInterval(shuffleId);
    start = false;
  }
});
});
