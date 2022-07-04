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
// 5. mari kita looping agar string dan valuenya bisa direturn dalam 1 array

function cobaLagipart2(strings, ...args) {
  let result = "";
  strings.forEach((str, i) => {
    result += `${str}${args[i] || ""}`; // || '' : agar tidak terjadi undefined karena string lebih besar dibanding args[i]
  });

  return result;
}

const str3 = cobaLagipart2`Halo, Nama Saya ${nama}, dan umur saya ${umur} tahun`;

console.log(str3);

// 6. persingkat menggunakan reduce

function cobaReduce(strings, ...args) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${args[i] || ""}</span>`,
    ""
  );
}
// (reduce,'') : '' untuk mengembalikan nilai awal biar value pertama (nama) keluar
// jadi konsepnya itu : result : hasilnya , str: stringnya, args[i] itu valuenya
// diakhiri dengan diakhir tanda kurung '' untuk proses looping dimulai dari kata pertama
const str4 = cobaReduce`Halo, Nama Saya ${nama}, dan umur saya ${umur} tahun`;

document.body.innerHTML = str4;

console.log(str4);
