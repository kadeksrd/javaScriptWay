// Callback
// sebuah function yang menjadi parameter function lain

// contoh memangil nama dengan callback

// sychronous callback

// buat function panggilnya
// function halo(nama) {
// alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
// const nama = prompt("Masukan Nama: ");
// callback(nama);
// }

// tampilkanPesan(halo);
// note : saat parameter function dipanggil jangan pake () karena akan dieksekusi
// jadi konsepnya yang function yang diatas akan menjadi parameter function dibawah

// contoh kompleks lagi untuk penggambaran
// sychronous dan asynchronus callback

// cara synchronous callback

// ambil data dari json data tapi versi synchronous

// const mahasiswa = [
// {
//     nama: "kadek",
//     nrp: "12312241412",
//     email: "kadeksuryard13@gmail.com",
//     jurusan: "teknik kemiskinan",
//     idDosenWali: 1,
// },
// {
//     nama: "orang",
//     nrp: "1231412412",
//     email: "orang@gmail.com",
//     jurusan: "teknik kemiskinan",
//     idDosenWali: 2,
// },
// {
//     nama: "mahluk hidup",
//     nrp: "142141142",
//     email: "orang@gmail.com",
//     jurusan: "teknik kemiskinan",
//     idDosenWali: 3,
// },
// ];

// // ambil data nama dari json diatas
// console.log(`mulai`);
// mahasiswa.forEach((m) => {
// for (let i = 0; i <10000000; i++) {
//     let date = new Date();

// }
// console.log(m.nama)});
// console.log(`selesai`);

// kekurangan synchronous adalah
// ketika ada function berat dikit
// maka stack2 yang lain seperti console.log atau function
// yang tadi buat nampilin nama terhambat
// karna adanya fucntion berat diatas
// walaupun sudah menggunakan callback
// namun tetap berat karena masih menggunakan konsep synchronous

// cara synchronous

// kita mengambil data nama dari file json langsung dan mengambil data dengan menggunakan server
// yang dimana request servernya menggunakan ajax
// versi javascript vanilla

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest(); //  XMLHttpRequest  objectnya   url (       http://localhost    )   //

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       // success  oranged
//       if (xhr.status == 200) {
//         // success oranged
//         success(xhr.response);
//       } else if (xhr.status == 404) {
//         // error oranged
//         error();
//       }
//     }
//   };

//   xhr.open("GET", url);
//   xhr.send();
// }

// console.log(`mulai`);
// getDataMahasiswa(
//   `dataMahasiswa.json`,
//   (results) => {
//     const mhs = JSON.parse(results); // untuk mengubah array result jadi object
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// console.log("selesai");



// cara jquery 
console.log(`mulai`);
$.ajax({
  url: 'dataMahasiswa.json',
  success: (mhs) => {
    mhs.forEach( m => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  }
});
console.log("selesai");


// karena asynchronus
// maka yang akan dijalankan yang ada distacknya dulu
// sepeti mulai dan selesai
// untuk function di proses di callback queque dulu baru setelah
// mulai dan selesai hilang
// di dimunculkan oleh event loop
