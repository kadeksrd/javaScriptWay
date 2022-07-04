// variabelnya kesempatan
var kesempatan = 4;
var tanya =true;
alert ('selamat datang! di game angka random')
// angka random 
while(kesempatan>=0){
    // math
    var comp = Math.floor(Math.random()*10)+1;
    // hooman 
    var hooman = prompt('Masukan angka 1-10 \nkamu diberikan 5 kesempatan!');
    // menentukan rules 
    if (hooman==comp && kesempatan>0){
        alert('Piihan yang kamu pilih benar! yaitu '+comp+'\nanda berhak dapat 1 kesempatan!'+'\nSekarang kesempatan mu sisa '+kesempatan);
        kesempatan+1
    }
    else if (hooman<comp && kesempatan>0){
        alert ('Yahh pilihan kamu terlalu rendah! \nayo kamu masih ada kesempatan '+kesempatan+' lagi')
        // tentukan kesempatannya
        kesempatan -=1
    }
    else if (hooman>comp && kesempatan>0){
        alert ('Yahh pilihan kamu terlalu tinggi! \nayo kamu masih ada kesempatan '+kesempatan+' lagi')
         // tentukan kesempatannya
         kesempatan -=1
    }
    else if (kesempatan==0 && hooman!==comp){
        alert ('yahhh kesempatan kamu sudah habis! anda kalah!\nangka yang benar adalah '+comp+('\ncoba lagi ya!'))
        kesempatan-=1
    }
    else{
        alert('kamu salah memasuka angka')
    }
    
}
alert ('Terima kasih sudah bermain!')
