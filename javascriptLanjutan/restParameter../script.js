//  rest parameter 
// mengeluarkan semua isi argument dengan menggunakan ...

// gunakan parameter biasa
function myFunc (a,b) {
    return `ini nilai array ${[a,b]}`;
}

console.log(myFunc(1,2,3,4,5,6,7,8,9));
    // padahal yang dioutput 1-9 
    // yang keluar 1-2 

// bagaimana cara untuk keluar semua 
// rest parameter 

function restParams(...a){
    // return a;
    // maka yang keluar array
    // untuk mereturn menjadi variabel
    return `${a}`;
}

console.log(restParams(1,2,3,4,5,6,7,8));



// buat fungsi jumlahkan semua argumens
function jumlahkan(...args){
    // menggunakan reduce
        // return args.reduce((a,b) => a+b);    
    
    // menggunakan for of 

    let total = 0;
    for(const a of args){
        total += a;
    }
    return total 

    // menggunakan for biasa 
    //     let total = 0;
    //     for(let i = 0; i<args.length; i++){
    //         total.push(total+=args[i]);
    //     }
    //     return total;
    }

    console.log('jumlah dari 1-7 adalah '+ jumlahkan(1,2,3,4,5,6,7));

// array destructuring 

    const kelompok1 = [`kadek`,`surya`,`rena`,`dwi`,`payana`];
    const [ketua,wakil,...anggota] = kelompok1 
    console.log(ketua);

// object destructuring 
    const team = {
        pm: `kadek`,
        frontEnd: `surya`,
        backend : `rena`,
        ux: `dwi`,
        devOps: `payana`
    }

    const{pm,frontEnd,backend,...anggotaDev} = team;
    console.log(pm);
    console.log(anggotaDev);

// filtering 

// membuat fungsi untuk menyesuaikan type data 
// rules nya 
// (tipe data yang dicari, isinya); 

const filterBy = (type,...values) => {
    return values.filter(t => typeof t === type);
}
// (type,semua isinya)
console.log(filterBy('boolean',1,2,`kadek`,false,10,true,`surya`));
