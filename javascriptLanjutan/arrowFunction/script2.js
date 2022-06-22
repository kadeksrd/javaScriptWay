konsep this pada function 

konsep this pada constructor function
    function expression  
    const Mahasiswa = function (){
        this.nama = `kadek`;
        this.umur = 21;
        this.sayHello = function () {
            console.log(`halo nama saya ${this.nama} , dan umur saya ${this.umur} tahun`)        
        }
    }

    const kadek = new Mahasiswa();

    Arrow Function 

    const Mahasiswa = function () {
        this.nama = `kadek`
        this.umur = 21;
        this.sayHello = () => {
            console.log(`halo nama saya ${this.nama} , dan umur saya ${this.umur} tahun`)       
            }
        }

    const kadek = new Mahasiswa();


untuk arrow function untuk buat objectnya tidak bisa 
tapi untuk buat methodnya bisa

tapi arrow function tidak bisa menggunakan sembarang this misalnya pada 

object literal 

misal pada function expression 

    const Mhs1 = {
        nama : `kadek`,
        umur : 31,
        sayHello: function () {
            console.log(`halo nama saya ${this.nama} , dan umur saya ${this.umur} tahun`)       
        }
    }

masih bisa karna saat menggunakan function biasa this itu merupakan kepemilikan properti 

berbeda dengan function arrow 

    const Mhs2 = {
        nama : `kadek`,
        umur : `22`,
        sayHello: () => {
            console.log(`halo nama saya ${this.nama} , dan umur saya ${this.umur} tahun`)       
        }
    }

maka hasilnya akan undefined
itu karena konsep arrow function mencari this ke lexical scopenya 
atau ke atas ada ga thisnya kalau engga keatas sampai ke windownya 
thisnya ga ada karena ga di deklarasi thisnya


    const Mahasiswa = function () {
        this.nama = `kadek`
        this.umur = 21;
        this.sayHello = () => {
            console.log(`halo nama saya ${this.nama} , dan umur saya ${this.umur} tahun`)       
            }

        }


    setInterval(function(){
        console.log(this)
    },500)

setInterval : menjalankan suatu tugas/function setiap waktu 

penulisannya 

    setInterval(function, time dalam ms(miilisecond) ) 

yang diatas merupakan mencetak function dalam setengah detik

Hasilnya : NaN ? kenapa 

 karna setiap function mempunyai konsep berbeda 

function declaration mempunyai konsep hoisting jadi dia mencari this didalam suatu scope kalo di scope tersebut ga ada maka langsung dicetak ke windownya

function expression mempunyai konsep hasil functionnya di simpen ke variabel dulu jadi ga di hoisting 
hasil functionya langsung di simpen ke variabel jadi dia menganggap this itu punya sih variabel bukan window

sedangkan Arrow function mempunyai konsep tidak mengenal this jadi langsung wae nyari this sampe ketemu gitulah kasarnya 
makannya solusi diatas paling tepat adalah pake arrow function karena langsung nyari thisnya keluar scope ketimbang pakai function expression yang langsung menyimpulkan this itu punya sih variabel maka yang ditulis adalah

arrow function

    setInterval( () => {
        console.log(this.umur++)
        },500)

    const mahasiswa1 = new Mahasiswa();
