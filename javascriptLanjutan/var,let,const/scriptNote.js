var vs let vs const

i = 10;

//  masih bisa dijalankan karna javascript otomatis manaruh var di i nya 
console.log(i);

// apabila console.log ditaruh diatas seperti ini 

console.log(j)
j = 10

// maka hasil undefined karna adanya hoisting jadi javascript manambahkan otomatis
// diatas seperti ini 

var j;

console.log(j)

// baru isi j nya 

var j = 10 

// tidak seperti bahasa program lainnya seperti c++ dan php yang hasilnya
// akan eror

// solusi agar eror atau tidak terjadinya hoisting
// menggunakan let dan const 

console.log(h)

let h = 10 ; 

// maka hasilnya eror seperti programming pada umumnya 




// contoh kasus var lain yang ga ada di bahasa program lain 
// block scope

for(var i = 0; i<10;i++){
    console.log(i);
}
// apabila kita konsol di luar block scope nya maka hasilnya ttep
// di increment 

console.log(i);


// kenapa karna javascript mengusung function scope maka harus di scope dulu baru bisa 

// contoh

function tes(){
    for(let i = 0; i<10;i++){
        console.log(i);
    }
}
tes();

// apabila kita tambahkan i maka hasilnya akan eror;
console.log(i);

// penjelasannya yaitu :
// IIFE (Immediately Invoked Function Expression) : sebuah function expression yang langsung dibuat 

// sama seperti 

// SIAF (Self Invoking Anonymus Function ) kalo yang ini anonymus atau function tanpa nama 

// keduanya berfungsi menjaga variabel yang didalem agar ga bisa keluar

// contoh expression function 

// var x = function (){}


// contoh anonymus function/ SIAF  : function tanpa nama
(function(){
    for(var i = 0; i<10 ;i++){
        console.log(i);
    }
}()) 
// diawali (function) agar dijalankan langusng functionnya dan akhiri () karna agar langsung di deklarasi function tanpa harus manggil functionya
// karna berada di luar scope maka hasil console.log dibawah akan eror 
console.log(i);

// cara diatas merupakan cara lama, cara baru di es6 cukup ganti var dengan let 

for(let i = 0; i<10 ;i++){
    console.log(i);
}
console.log(i);

// maka hasilnya ttep eror

// kalo nilainya mau diubah2 

// gunakan let

let i = 10 ;
i = 20;

// tapi kalo nilainya mau ga diubah2 

// gunakan const agar meminimalisir perubahan state 

// tapi const bisa diubah saat menggunakan object  dan array 
// tapi diubahnya saat objet/ array yang dipanggil bukan object/array nya langsung 
const j  = 20

// saran menggunakan let pada saat for saja (kalo bisa)