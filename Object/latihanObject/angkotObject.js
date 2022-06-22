// membuat object angkot

function angkot (nama,trayek,penumpang,kas){
    this.nama = nama;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangNaik = (namaPenumpang) => {
        if(this.penumpang.length == 0 ){
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }
        
        else {
            for (let i = 0; i <= this.penumpang.length; i++){
                // jika nama penumpang sama 
                if (this.penumpang[i] == namaPenumpang) {
                    console.log(`nama ${namaPenumpang} sudah ada `)
                    return this.penumpang;
                }
            }
            for (let i = 0; i <= this.penumpang.length; i++) {
                // jika kursi kosong maka tambahkan penumpang
                if (this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                }
    
                // jika namanya sama maka tulis pesan kesalahannya
            
                // jika seluruh kursi terisi maka penumpang ada di akhir array
                else if (i == this.penumpang.length) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    }
    this.penumpangTurun = (namaPenumpang,bayar) => {
        if(this.penumpang.length  === 0 ){
            console.log(`angkot kosong`)
            return false;
        }

        for(let i = 0; i<this.penumpang.length; i++){
        if(this.penumpang[i] == namaPenumpang){
            this.penumpang[i] = undefined;
            this.kas += bayar;
            return this.penumpang;
        }
     }   
    }
}

let angkot1 = new angkot(`kadek`, [`bekasi`,`kota`],[],0);
