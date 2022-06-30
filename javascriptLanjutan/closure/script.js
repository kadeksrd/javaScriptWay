//  closure
// proses apabila suatu function child berada di function parentnya dan bisa dieksekusi di dalem parentnya

//  function init(){
//      let nama = `kadek`;
//      function tampilNama(){
//          console.log(nama);
//      }
//      tampilNama();
//  }

//  init();

// contoh proses nya

// 1.seperti biasa kita lakukan creation phase dulu
// 2.cek diatas apakah ada variabel di dalem function apabila ga ada
// 3.cek lagi di argumen apabila ga ada lagi cek lagi ke global nya
// 4. karena ada maka di cek oleh hoisitng ada nilainya ga
// 5. karena ada nilainya yaitu `kadek` maka lanjutkan ke proses execution
// 6. setelah itu function dicek ada ga kalo ada lanjut ke hoisting lalu di execution

// closure terjadi apabila
// terjadi lexical scope yang mana :
// 1. ada function di dalem parent function
// 2. bisa mengeksekusi function di dalem parentnya
// 3, variabelnya yang di excecution merupakan variabel parentnya atau variabel yang ada di function parentnya atau variabelnya bisa
// dijadikan argumen di function childnya

// contoh kasus

// function init2 (){

//     return function tampilNama(nama) {
//         return `nama saya adalah ${nama}`;
//     }

// }

// return function : namanya inner function

// alasan membuat closure

// 1. untuk membuat function factories

// buat function seusai dengan function yang lain

// contoh
// function ucapkanSalam(waktu){
//     // inner closure
//     return function (nama) {
//         console.log(`halo ${nama} ,  selamat ${waktu}`)
//     }
// }

// let selamatPagi = ucapkanSalam(`Pagi`);
// let selamatSiang = ucapkanSalam(`Siang`);
// let selamatMalam = ucapkanSalam(`Malam`);

// selamatPagi(`kadek`); // ini bisa diexecution karena di dalemnya ada function lagi

// console.dir(selamatMalam(`sandhika`));

// 2. untuk membuat private method;

// let counter = 0;
// let add = function () {
//   return ++counter;
// };

// counter = 10;

// console.log(add());
// console.log(add());
// console.log(add());

// 1. saat kita ubah counter nya makan isi counternya ikut berubah setelah 10
// 2. solusinya masukan counter ke local scope

// let add = function (){
//     let counter = 0;
//     return ++counter;
// }

// counter =  10;

// console.log(add())
// console.log(add())
// console.log(add())

// 3. masalahnya angkanya jadi 1 semua karena counter hanya berjalan di lokalnya saja
// counter 0 => return + => 1 balik lagi sehingga ga bisa bertambah

// 4. solusinya buat inner function closure lalu returnnya di taroh di dalemnya

// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// counter = 10;

//  masih setengah solusinya di deklarasi dulu inner nya biar bisa jalan 2x biar yg jalan innernya

// let a = add();

// console.log(add());
// console.log(add());
// console.log(add());

// console.log(a());
// console.log(a());
// console.log(a());

// ada solusin yang lebih mudah tanpa harus deklarasi lagi yaitu dibuatkan imidiately ivoke function seperti ini ;

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 10;

console.log(add());
console.log(add());
console.log(add());

// jadi proses imidiately ivoke function seperti ini :

// 1. function dibungkus sekali untuk menjalankan counternya
// 2. function yang dibungkus 2x untuk menjalakan inner function nya seperti diatas
