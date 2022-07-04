
// function expresion 
// const tampilNama = function (nama) {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('budi'));

// arrow function
// const tampilNamaSaya = nama => `halo ${nama}`;
// kalo 1 parameter ga perlu pakai kurung kurawal
// dan prosesnya juga ga perlu pakai kurawal dan return akan otomatis ditambahkan oleh javascript
// proses ini dinamakan inplisit function


// tapi kalo tanpa parameter wajib ada kurung kurawal
// const helloWorld = () => 'hello world';
// const tampilNamaLain = (nama,waktu) => 
// {
//     return `selamat ${waktu}, ${nama}`
// };
// console.log(tampilNamaLain('budi','pagi'));





// function map (untuk memetakan array)
let mahasiswa = [`kadek`,`surya`,`rena`];


// menggunakan function mapping pada array


// contoh pada fungsi biasa seperti ini 
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });

// console.log(jumlahHuruf);

// contoh pada arrow function 

// let jumlahHuruf = mahasiswa.map((nama) => nama.length)

// console.log(jumlahHuruf);

// menjadikan object hasil arraynay menggunakan arrow function map 

// membuat object atas nama dan jumlah huruf
let jumlahHuruf  = mahasiswa.map(nama => ({nama, jmlHrf : nama.length})) // karna properti nama sama dengan objectnya maka ga perlu ditulis 2x

console.log(jumlahHuruf)

// karna {} di arrow function itu sama saja kita mereturn maka kalo kita buat object malah mereturn function 
// solusinya adalah 
// ({}) = kurung kurawal dulu baru kurung dengan scope 




