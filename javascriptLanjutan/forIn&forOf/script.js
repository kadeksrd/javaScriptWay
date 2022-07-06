// for of

// meloop object yang iterable / menelusuri object yang iterable

// contoh
// 1. string
// 2. array
// 3 arguments/NodeList
// 4. typed array
// 5. map
// 6. set
// 7. user-defined iterable

// looping array

    const mhs = [`kadek`, `surya`, `rds`];

    // cara for loop

    for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
    }

    // cara foreach

    mhs.forEach((mhs) => console.log(mhs));

    // cara for of

    for (const m of mhs) {
    console.log(m);
    }

    // note : 1. kenapa for loop pakai let karena dia selalu berubah indexnya (i++)
    // 2. kalau for of dia hanya mencetak yang ada di dalam array (kasanrya for loop versi canggih);

// looping pada string

    const nama = `kadek`;

    for (const n of nama) {
    console.log(n);
    }

// penggunaan forEach pada array

const mhs2 = [`kadek`, `surya`, `rds`];

    mhs.forEach((m, i) => {
    console.log(`${m} adalah nama saya ke - ${i + 1}`);
    });

// note
// for each kalo parameternya bertambah misalnya (o,i) maka i adalah indexnya
// forEach((o,i))
// o: object yang representasi mhs2
// i: indexnya

// ini bisa digunakan untuk for looping dan forEach tapi untuk
// for Off tidak bisa

    for (m of mhs2) {
    console.log(m);
    }

// looping pada NodeList

    const namaLi = document.querySelectorAll(`.nama`);

    console.log(namaLi);

    // looping dengan forEach
    namaLi.forEach((n) => console.log(n.textContent));

    // looping dengan for of
    for (n of namaLi) {
    console.log(n.textContent);
    }


// arguments

function jumlahAngka(){
    // return arguments.reduce((a,i) => a + i);
    // arguments.forEach(a => jumlah += a) 

    let jumlah = 0;
    for( a of arguments){
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahAngka(1,2,3,4,5));

// note 

// untuk menjumlahkan suatu arguments / menggunakan arguments kosong
// tidak bisa menggunakan reduce dan forEach karena arguments bukan bentuk array
// bisa menggunakan for of karena arguments masuk kedalam iterable object 

// for in 

// menloop isi dari object atau properti dari object

// contoh

const newMhs = {
    nama:"kadek Surya Rena Dwipayana",
    umur: 21,
    email : `kadeksuryard@example.com`,
}

for (m in newMhs) {
    // propertinya
        // console.log(m);
    // isi properti / valuenya
    console.log(newMhs[m]);
}