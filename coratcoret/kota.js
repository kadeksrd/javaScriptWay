// menentukan variabel 
alert('tebak kota 5 di indonesia yuk! \nsetiap tebakan kamu punya 3 kesempatan!')
var kesempatan=2;
        while(kesempatan>=0){
            var player=prompt('Pilihlah 5 kota Terbesar! di indonesia\njika benar kamu diberikan tambahan 1 kesempatan');
            // rumusnya 
            var comp=Math.floor(Math.random()*5)+1;
            // tentukan angka nya 
            if (comp==1){
                comp='medan'
            }
            else if (comp==2){
                comp='surabaya'
            }
            else if (comp==3){
                comp='denpasar'
            }
            else if (comp==4){
                comp='yogyakarta'
            }
            else if (comp==5){
                comp='jakarta'
            }
            // tentuka rulesnya 
           
            if (player==comp && kesempatan>=0){
                alert ('Yeay! jawaban kamu BENAR! yaitu '+comp+'\nkamu berhak dapat tambahan 1 kesempatan'+'\n kesempatanmu sisa '+kesempatan);
                kesempatan+=1
            }
            else if(player!==comp && kesempatan>=0) {
                alert('Yahh jawaban kamu SALAH!\njawaban yang benar adalah '+comp+'\n kesempatanmu sisa '+kesempatan);
            }
            else if (kesempatan==0){
                alert('yahh kesempatan mu habis!!');
            }
            kesempatan-=1;
        }
        
alert('terimakasih!')