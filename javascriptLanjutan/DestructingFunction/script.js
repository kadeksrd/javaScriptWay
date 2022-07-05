// Destructuring function return value;

// function kali tambah
const sumMultiples= (a,b) => {
    return [a+b,a*b];
}

// yang terpanggil adalah bentuk array
const all = sumMultiples(2,3);

    
    
// cara manggil function yang dibutuhkan 
    // dengan membuat variabel baru
        const jumlah = sumMultiples(2,3)[0];
        const kali = sumMultiples(2,3)[1];

    // dengan destructuring function 

        const[jumlah,kali] = sumMultiples(2,3);
        // lebih simple 


// console
// console.log(kali);


// function kalkulator 

const kalkulas = (a,b) => [a+b,a-b,a*b,a/b];

const[jumlah,kurang,kali,bagi] = kalkulas(2,3)


// untuk array posisi saat function dipanggil tidak bisa diubah2
// contoh case
// hasilnya akan sama maka

// gunakan object

const kalkulasObject = (a,b) => {
    return {
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi: a/b
    }
}

// maka kita ubah posisinya pun aman 

const {bagi,kali,kurang,tambah} = kalkulasObject(2,3)

// destructuring function arguments

// cara biasa object 

const mhs1 = {
    nama : `kadek`,
    umur: 21,
    email: 'kadeksrd@example.com',

}


// cara cetak 1
function cetakMhs(nama,umur){
    return `halo nama saya ${nama} dan umur saya ${umur} tahun`;
}

// cara cetak 2 
const CetakMhs = (mhs) => {
    return `halo nama saya ${mhs.nama} dan umur saya ${mhs.umur} tahun`;
}



// cara cetak Destructuring

const CetakMhsDestruct = ({nama,umur}) => {
    return `halo nama saya ${nama} dan umur saya ${umur} tahun`;
}

// console
console.log(CetakMhsDestruct(mhs1))

// cetak destructuring object bersarang 

const mhs2 =  {
    nama : `siapaya`,
    umur: 21,
    email: 'kadeksrd@example.com',
    nilai: {
        uas: 80,
        uts: 100,
        tugas: 90
    }
}

// cara Destructuring biasa
const CetakNilaiMhs = ({nama,umur,nilai}) => {
    return `halo nama saya ${nama} dan umur saya ${umur} tahun
     nilai tugas saya ${nilai.tugas}, nilai uts saya ${nilai.uts}, nilai uas saya${nilai.uas}
    `;    
}
// cara Destructuring bersarang
const CetakNilaiMhs2 = ({nama,umur,nilai :{tugas,uts,uas}}) => {
    return `halo nama saya ${nama} dan umur saya ${umur} tahun
     nilai tugas saya ${tugas}, nilai uts saya ${uts}, nilai uas saya ${uas}
    `;    
}

console.log(CetakNilaiMhs(mhs2))
console.log(CetakNilaiMhs2(mhs2))