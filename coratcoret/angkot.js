let penumpang = [];

let tambahPenumpang = (namaPenumpang, penumpang) => {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    }
    else {
        for (let i = 0; i <= penumpang.length; i++){
            // jika nama penumpang sama 
            if (penumpang[i] == namaPenumpang) {
                console.log(`nama ${namaPenumpang} sudah ada `)
                return penumpang;
            }
        }
        for (let i = 0; i <= penumpang.length; i++) {
            // jika kursi kosong maka tambahkan penumpang
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }

            // jika namanya sama maka tulis pesan kesalahannya
        
            // jika seluruh kursi terisi maka penumpang ada di akhir array
            else if (i == penumpang.length) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = (namaPenumpang,penumpang) => {

    // jika angkot kosong
    if(penumpang.length == 0){
        console.log(`angkot kosong`);
        return penumpang;
    }

    // cek seluruh angkot
    for(let i =  0 ; i <= penumpang.length; i++){
        // jika ada nama penumpang maka hapus nama penumpang menjadi undifined
        if(penumpang[i] == namaPenumpang){
            penumpang[i] = undefined;
            return penumpang;
        
        // kalo ga ada maka kasih pesan eror
        }else if (i == penumpang.length){
            console.log(`nama penumpang ${namaPenumpang} tidak ada`)
        }
    }
    return penumpang;
}