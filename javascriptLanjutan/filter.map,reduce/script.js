const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// mencari angka >= 3

// tes pake for
// const newArr = [];

// for(let i = 0 ; i<angka.length; i++){
//         if(angka[i]>= 3){
//             newArr.push(angka[i]);
//         }
//     }

// console.log(newArr)

// filter

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// })

// console.log(newAngka)

// a =  representasi dari angka

// aturan filter function

// const nama_variabel = nama_array.filter(function_callback(repretation parameters){
//     return repretation_parameters action
// })

// 1. jadi pertama buat variabel yang merepresentasikan array filter
// 2. kemudian didalem array filter ada function callback dengan parameter yang memrepresentasikan / mewakilkan sih array filter
// 3. jalankan functionnya dengan parameter tersebut
// 4. cetak variabelnya
// 5. mari di tes dengan arrow function seperti ini

const newAngka = angka.filter((a) => a >= 3);

console.log(newAngka);

// map

// memetakan / menugaskan array yang ada dengan memetakan masing2 array (menyuruh array satu2 menjalankan tugas)
// contoh kasus semua array diatas dikalikan dengan 2

const newAngka2 = angka.map((a) => a * 2);
console.log(newAngka2);

// 1. jadi fungsi map itu memetakan atau menjalankan methodnya kepada array
// 2. cara penulisannya hampir sama dengan filter
// 3. jadi pertama buat variabel yang merepresentasikan array filter
// 4. kemudian didalem array filter ada function callback dengan parameter yang memrepresentasikan / mewakilkan sih array filter
// 5. jalankan functionnya dengan parameter tersebut
// 6. cetak variabelnya

// kedua item tersebut tidak merubah array aslinya

// ketika

// maka hasilnya sama

// reduce
// melakukan aksi ke seluruh elemen array

// jumlahkan seluruh elemen pada array

const jmlhArray = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// accumulator : index awal
// current value : index akhir
// kalo di kasih operator maka dia akan memproses dari index awal sampai akhir

// yang terjadi adalah : [-1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9]

// 1. misal -1 + 8 : current value
// 2. hasilnya 7 : accumulatornya

// const jmlhArray = angka.reduce((accumulator, currentValue, nilaiAwal) => accumulator+currentValue)

// nilaiAwal secara default = 0

console.log(jmlhArray);

const kaliArray = angka.reduce(
  (accumulator, currentValue) => currentValue * accumulator
);

console.log(kaliArray);
//  method chaining

//  menggabungkan semua method diatas

// contoh kasus
// cari angka > 5
// kalikan 3
// jumlahkan

const cariAngka = angka
  .filter((e) => e > 5) //8,9,9
  .map((e) => e * 3) //24,27,27
  .map((e) => e * 2) //48,54,54
  .reduce((a, b) => a + b); //156

console.log(cariAngka);

// bisa digunakan berulang dan saling terikat (chaining)
