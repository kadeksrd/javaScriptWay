// Destructuring



// function kali tambah
const sumMultiples= (a,b) => {
    return [a+b,a*b];
}

// yang terpanggil adalah bentuk array
const all = sumMultiples(2,3);

    
    
// cara manggil function yang dibutuhkan 
    // dengan membuat variabel baru
        // const jumlah = sumMultiples(2,3)[0];
        // const kali = sumMultiples(2,3)[1];

    // dengan destructuring function 

        // const[jumlah,kali] = sumMultiples(2,3);
        // lebih simple 


// console
// console.log(kali);


// function kalkulator 

const kalkulas = (a,b) => [a+b,a-b,a*b,a/b];

const[jumlah,kurang,kali,bagi] = kalkulas(2,3)

// console
console.log(jumlah);
