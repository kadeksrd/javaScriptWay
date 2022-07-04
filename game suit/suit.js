var tanya = true;
while(tanya){
    // menangkap pilihan player 
    var p = prompt('pilih: batu, kertas, gunting');
    // menangkap pilihan computer
    // membangkitkan bilangan random 
    var comp = Math.random()
    if(comp <0.34){
        comp = 'batu';
        } 
    else if (comp>0.34 && comp<0.67){
        comp ='gunting';
        }   
        else {
        comp ='kertas';
        }
    var hasil = '';
    // menentukan rules
    if (p == comp){
        hasil = 'SERI';
    }
    else if ( p == 'batu'){
        hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    }
    else if ( p == 'kertas'){
        hasil = (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
    }
    else if ( p== 'gunting'){
        hasil = (comp=='batu') ?  'KALAH!' : 'MENANG!';
    }
    else if (p=='kertas'){
        hasil = (comp=='batu') ? 'MENANG!' : 'KALAH!';
            
        }
    else{
        hasil = 'kamu salah memasukan 3 item tersebut!';
    }

    alert(`Kamu memilih ${p}, Komputer memilih ${comp}, ${hasil}`);

    tanya = confirm('Lagi?');

    }
    alert('Terima kasih sudah bermain!');
