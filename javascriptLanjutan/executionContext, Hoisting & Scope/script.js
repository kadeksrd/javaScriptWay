// 2.1 Execution Context, Hoisting, & Scope 

creation phase = proses javascript untuk mengecek dalem suatu scope atau suatu coding apakah ada variabel / function didalemnya 

setelah itu di lakukan hoisting


hoisitng  =  proses dari javascript untuk memberikan nilai default terlebih dahulu sebelum  dideklarasi 
            pada variabel dan juga function 

            contoh variabel

            var nama = `kadek`;

            sebelum dideklarasi kadek sih javascript ngehoisting nilai var nama = undefined sebelum di deklarasi 


                contoh function 

                function A(){
                    console.log(`a`);
                }

                sih javascript menuliskan fungsinya dulu yaitu fn() sebelum mendeklarasi isi di dalemnya;
                              
                
execution phase =  proses mendeklarsi atau mengeksekusi  

contoh penggunaan creation phase, hoisting dan execution 

console.log(nama);
var nama = `kadek`;

1. javascript melakukan creation phase terlebih dahulu ada var ga ? dari bawah keatas ternyata ketemu tuh ada nama di console.log
2. setelah ketemu javascript melakukan hoisting terhadap memori dengan memberikan nilai default nilai nama menjadi undefined
3. setelah itu langsung di execution phase di console.log
4. kemudian lakukan creation phase lagi eh ternyata ada var nama =  `kadek`
5. karena terlanjur di execution maka hasilnya ttep nilai default sih nama yaitu undefined;

contoh study kasus pada function 


var nama = `kadek`;
var umur = 22;

function SayHello(){
    return(`Hallo, Nama saya ${nama}, umur saya ${umur}`)
}

console.log(SayHello())

1. javascript melakukan creation phase dengan mencari variabel dan function nya 
2. javascript melakukan hoisting, makannya saat kita hanya tulis SayHello tanpa `()`
dia mengembalikan isi functionya bukan menjalankan functionnya karna fungsi dari `()` untuk menjalankan functionnya 
3. saat console.log dijalankan variabel nya nilainya undefined karna seperti kasus diatas nama keburu di hoisting execution dahulu sebelum di deklarasi 
4. sehingga nama yang di deklarasi ga di execution
5. lain halnya ketika kita taroh executionnya dibawah karena javascript melakukan : 
        5.1 creation phase dari atas ke bawah 
        5.2 ternyata ada nih variabel dan umur 
        5.3 di hoisting, eh dia udh ada nilainya
        5.4 langusng di execution berserta deklarasinya
        5.5 tapi kita sih nilai default dulu function nya karena belum di return 
ketika di console.log ada nilai undefined dibawah itu karena function ga kita return langsung di console.log
