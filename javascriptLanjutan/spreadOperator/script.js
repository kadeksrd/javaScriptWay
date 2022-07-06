// spread Operator 
// memecah iterables menjadi single element

    const mhs = [`kadek`,`surya`,`rd`];

// nampilin array biasaa
    // console.log(mhs);
// nampilin menjadi single element
    console.log(...mhs);
// nampilin satu index array dipecah menjadi per kata 
    console.log(...mhs[0]);

// menggabungkan 2 array 
    const mhs1 = [`siapa`,`ya`];
    const dosen = [`ade`,`hendra`];
    const orang = [...mhs,`kadek lagi`,...mhs1,...dosen]
    console.log(orang);

// mengreference array 
    const mhs2 =  [`ga`,`tau`,`siapa`];
    const newMhs = mhs2;
    newMhs[0] = `kadek`;
    console.log(mhs2[0])

    // note : 
    // jadi dengan mengreference ke array yang dituju jadi 
    // kalo kita ubah isi arraynya dengan menggunakan referencenya maka
    // isi array aslinya juga keubah

// cara agar isi copyannya ga bisa di ubah
// gunakan spread operator 
    const newMhs1 = [...mhs2];
    newMhs1[0] = `kadek2`;
    console.log(mhs2);

    // jadi saat array reference nya diubah yang aslinya ga ikut keubah

// mengubah node list menjadi array menggunakan map

const namas = document.querySelectorAll(`li`);

// menggunakan function map 
const mhs3 = [...namas].map(m => m.textContent);

console.log(mhs3)

// jadi agar bisa diconsole menjadi array maka digunakan pergabungan 
// spread  operator agar dipecah dan diubah menjadi array 
// dan map biar di keluarkan isi semua isi array nya