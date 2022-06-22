// cara untuk membuat object pada javascript 

// 1. Object Literal
let mahasiswa = {
    nama : `kadek`,
    energi : 10,
    makan : (porsi) => {
        this.energi = this.makan + porsi
        console.log(`selamat makan ${this.nama}`)
    }
};
let mahasiswa2 = {
    nama : `kodok`,
    energi : 10,
    makan : (porsi) => {
        this.energi = this.makan + porsi
        console.log(`selamat makan ${this.nama}`)
    }
};

// kekurangan object literal 
// 1. tidak reusable
// 2. nama object ga bisa sama 



// 2. Function Declaration
function Mahasiswa (nama,energi){
    let mahasiswa  = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = (porsi) => {
        this.energi += porsi;
        console.log(`selamat makan ${this.nama}`);
    }
    mahasiswa.main = function (jam){
        this.energi -= jam;
        console.log(`jangan main terus ${this.nama} ntar laper loh :)`)
    }
    return mahasiswa
}

// let mahasiswa1 = Mahasiswa(`kadek`,20)

/* note : 
1. function declaration ga bisa pakai function arrow saat menggunakan this
2. function declaration ga bisa jalan kalo ada constructor function
*/

// 3. Constructor Function

const Mahasiswa1 = function (nama,energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = (porsi) => {
        this.energi += porsi;
        console.log(`selamat makan ${this.nama}`);
    }
    this.main = function (jam){
        this.energi -= jam;
        console.log(`jangan main terus ${this.nama} ntar laper loh :)`)
    }
}

let mahasiswa3 = new Mahasiswa1 (`kodok`,20)

/*
note : 
1. constructor bisa menggunakan function arrow
2. perbedaan dengan functional declaration adalah 
    2.1 functional membuat object baru lalu direturn sedangkan din constructor tidak 
    2.2 constructor menggunakan new sebagai manggil objectnya


*/

// membuat object lireral sebagai child dan object function declaration sebagai parentnya agar lebih hemat memori
const methodMahasiswa1 = {
    makan: (porsi) => {
        this.energi += porsi;
        console.log(`selamat makan ${this.nama}`);
    },

    main: (jam) => {
        this.energi -= jam;
        console.log(`jangan main terus ${this.nama} ntar laper loh :)`)
    }


}


function Mahasiswa2 (nama,energi){
    let mahasiswa  = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan
    mahasiswa.jam = methodMahasiswa.jam
    
    return mahasiswa
}


// kekurangannya kita harus menyusun deklarasi lagi di parentnya solusi nya adalh object.Create()



// 4. Object.create

//  menggabungkan object literal sebagai methodnya agar tidak diubah2 dan menghemat memori 
// kemudian di deklarasikan ke function declaration 
// atau istilah gampangnya object literal itu childnya sedangkan object function declaration itu parentnya

// cara buatnya 

const methodMahasiswa = {
    makan: (porsi) => {
        this.energi += porsi;
        console.log(`selamat makan ${this.nama}`);
    },

    main: (jam) => {
        this.energi -= jam;
        console.log(`jangan main terus ${this.nama} ntar laper loh :)`)
    }


}


Mahasiswa = (nama,energi) => {
    // menyatukan childnya ke parentnya denrgan Object.create()
    let mahasiswa  = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
 
    
    return mahasiswa
}


// protoype object 

Mahasiswa4 = function (nama,energi) {
    // pada constructor juga sudah otomatis dibuatkan object create object
    // tp ditulis seperti ini 
    // let this = Object.create(Mahasiswa4.prototype)
    this.nama = nama;
    this.energi = energi;    

    // dan di return this
}

// cara manggil method/ childnya di prototype 
// nama constructor object.prototype.namaMethod/namaChildnya
Mahasiswa4.prototype.makan = function (porsi){
    this.energi+= porsi
    return `selamat makan ${this.nama}`
}

Mahasiswa4.prototype.main = function (jam){
    this.energi -= jam
    return `selamat bermain ${this.nama}`
}

Mahasiswa4.prototype.tidur = function (tidur){
    this.energi += tidur
    return `selamat tidur ${this.nama}`
}

// let kadek  =  new Mahasiswa4 (`kadek`,10);

// versi class 

class Mahasiswa5 {
    // constructor untuk properti nya 
    constructor (nama, energi){
        this.nama = nama;
        this.energi = energi;
    }
    // prototypenya atau childnya/methodnya
    makan(porsi){
        this.energi+= porsi
        return `selamat makan ${this.nama}`
    }
    
    main(jam){
        this.energi -= jam
        return `selamat bermain ${this.nama}`
    }
    
    tidur(tidur){
        this.energi += tidur
        return `selamat tidur ${this.nama}`
    }
    
}

//  ttep pakai prototype



let newMahasiswa =  new Mahasiswa5(`kadek`,20);

//  penggunaan object pada array 

let newArr = [2,3,4,7,8,4,1,2] // = let newArr = Object.create(newArr.prototype)

// dan methodnya merupakan juga dari method di prototype array
console.log(newArr.reverse())
console.log(newArr.sort())

// newArr.reverse() adalah 

// Array.prototype.reverse(){
//     balikin isi array
// }