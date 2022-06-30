// tagged template literals

// mengambil template literals untuk di masukan ke function

// contoh

const nama = "Kadek";
const umur = 21;

function coba(strings, nama, umur) {
  return umur;
}

const str = coba`Halo, Nama Saya ${nama}, dan umur saya ${umur} tahun`;
console.log(str);

// jadi tag template literals itu prosesnya

// 1.isi template literalsnya disimpan dalam argumen
// 2. isi argumennya (string, arr1, arr2)
// 3. bisa juga kalo mau semua expressionnya di keluarkan menggunakan rest parameter (...arr);

// contoh

function cobaLagi(strings, ...args) {
  return args;
}

const str2 = cobaLagi`Halo, Nama Saya ${nama}, dan umur saya ${umur} tahun`;
console.log(str2);

// 4. maka hasilnya yang direturn value dari expressionnya
