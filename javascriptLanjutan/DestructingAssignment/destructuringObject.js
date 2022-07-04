// destructuring Object

    // const mhs = {
    //     nama : "kadek Surya",
    //     umur : 33
    // }

    // const { nama, umur} = mhs;

    // console.log(nama , umur) 

    // note :

    //  1. konsepnya mirip dengan array 
    //  2. nama variabel destructuring nya harus sama dengan yang ada di object

//  assigment tanpa deklarasi object

    // ({nama,umur} = { 
    //     nama: "kadek",
    //     umur : 23
    // });

    // console.log(nama);

//  assign ke variabel baru 

//  agar bisa menambahkan nama lain di variabel destructuringnya 


//  const mhs = {
//         nama : "kadek Surya",
//         umur : 33
//     }

//     const { nama: a , umur: b} = mhs;

//     console.log(a , b);
    
    // default value 
    // menambahkan nilai default di destructuring
        // const mhs = {
        //        nama : "kadek Surya",
        //        umur : 33
        //    }
    
        // //  penambahannya disini 
        // const { nama,umur, email = "kadeksuryard13@gmail.com" } = mhs;
    
        // console.log(email);
        
    // memberi nilai default + assign ke new variabel
    
            // const mhs = {
            //     nama : "kadek Surya",
            //     umur : 33
            // }
        
            // //  penambahannya disini 
            // const { nama : n ,umur : u, email : e = "kadeksuryard13@gmail.com" } = mhs;
        
            // console.log(n,u,e);
            
            // note: 
            
            // 1. nama variabel baru harus berbeda dari sebelumnnya karena tersimpen di function mhs 
            
// rest parameter 
            
    // const mhs = {
    //     nama : "kadek Surya",
    //     umur : 33
    // }
    
    // //  penambahannya disini 
    // const {nama, ...val } = mhs;
    
    // console.log(nama,val);
    
// mengambil field pada object, setelah dikirim sebagai parameter function

    // cara biasa
    // const mhs = {
    //     id : 123,
    //     nama : "kadek Surya",
    //     umur : 33, 
    //     email : "kadeksuryard13@gmail.com"
    // }

    // function getIdMhs(mhs){
    //     return mhs.id
    // }

    // console.log(getIdMhs(mhs));
    
    // cara menggunakan destructuring 

    const mhs = {
        id : 123,
        nama : "kadek Surya",
        umur : 33, 
        email : "kadeksuryard13@gmail.com"
    }

    // perubahannya disini
    function getIdMhs({...val}){
        return val; 
    }

    // disini ga berubah
    console.log(getIdMhs(mhs));
    