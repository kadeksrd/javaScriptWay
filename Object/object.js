// membuat object

//  object literal

let mhs1 = {
  nama: "kadek",
  nrp: "091230912",
  email: "kadeksuryard13@gmail.com",
  jurusan: "teknik elektro",
};

let mhs2 = {
  nama: "miawu",
  nrp: "0912381203",
  email: "mawu@gmail.com",
  jurusan: "teknik teknikan ",
};
/*
    kelebihan : gampang bautnya
    kekurangan ; tidak reusable harus copy paste dulu kaye

    */

// function declaration

function buatObjectMhs(nama, nrp, email, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

// manggil objectnya

let newMhs = buatObjectMhs(
  "kadek",
  12313213,
  "kadeksuryard13@gmail.com",
  "teknik elektro"
);
console.log(newMhs);
let newMhs2 = buatObjectMhs("ters", 1231, "ters@gmail.com", "teknik elektro");

/*
    kelebihan : reusable (bisa dipakai berulang2)
    kekurangan : buat object lagi dalam pembuatannya dan ngereturn object tersebut 
    */

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

let newMhs3 = new Mahasiswa(
  `kadek`,
  1231123,
  `test@gmail,com`,
  `teknik teknikan`
);

console.log(newMhs3);
/*
    kelebihan : simple, reusable, tanpa perlu ngereturn saat deklarasinya
    perbedaan dengan function deklaration : ga ada return dan ga buat object baru
    
    */

// this

console.log(this);
// this ==  window (object global)

// contoh

var a = 20;
console.log(this.a);
console.log(window.a);

// this pada function deklaration
function test() {
  console.log(this);
  console.log(`tes ngab`);
}

this.test();
// this mengembalikan object global/window

// this pada object literal
var obj = {};
obj.halo = function () {
  console.log(this);
  console.log(`halo`);
};

obj.halo();
// this mengembalikan object yang bersangkutan

// this pada consturctor
function halo() {
  console.log(this);
  console.log(`halo`);
}

var obj1 = new Halo();

// this mengembalikan obj new
