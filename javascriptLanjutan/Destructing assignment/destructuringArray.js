// destructuring array

    // konsepnya sama aja kalo kita get array/ nangkap array 
    // contoh pada array biasa 

    const perkenalan = ['halo','nama','saya','kadek']


    const salam2 = perkenalan[0];
    console.log(salam2);

    const satu2 = perkenalan[1];
    console.log(satu2)

    // contoh destructuring array
    // const perkenalan = ['halo','nama','saya','kadek']

    // const [salam,satu,dua,nama] = perkenalan
    // console.log(salam);
    // console.log(satu);

// jadi array baru [] = variabel yang menangkap array diatas

    // dengan destructing array kita ga perlu bikin variabel satu2 cukup
    // dikurung sekaligus []

    // skip item
    // mengambil atau menskip array
    // cukup kosongin aja variabelnya  
    // misal pgn ambil array nama dan saya

    // const [ ,satu,dua, ] = perkenalan
    // console.log(dua);

    // swap item 
    // menukar isi array

        // let a = 1;
        // let b = 2;

        // console.log(a);
        // console.log(b);

        // [a,b] = [b,a];

        // console.log(a)
        // console.log(b)
    
    // return value pada function 

    function coba () {
        return [1,2];
    }

    // cara array biasa
    
    // const test = coba();

    // console.log(test[0], test[1]);

    // cara destructuring array 

    // const [a,b] = coba()
    // console.log(a,b)

    // maka hasilnya sama cuma lebih simple sih destructuring

// Rest Parameter untuk Destructur array

//cara biasa 

// const [a,b] = [1,2,3,4,5];

//cara biasa 
// console.log(a,b,c)

// 1. menggunakan cara biasa kita harus buat variabel baru buat ambil array nya
// 2. maka gunakan cara rest parameter biar semua array keambil tanpa buat variabel baru

// cara rest parameter

const [a,...b] = [1,2,3,4,5,6,7,8];

console.log(a,b);

// maka akan kepanggil semua walaupun yang dipanggil dalam bentuk array 


