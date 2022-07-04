// DOM Traversal
// penelusuran DOM
// node => telunsuri parentnya
// element.parentElement

// console.log(nama.parentElement.parentElement);
//     // semakin nambah parent semakin keatas misal ambil parent card yaitu container harus manggil lagi parentElement

//     // next sibling (saudara setelahnya)
// console.log(nama.nextElementSibling);
//     // hasilnya #text karena ada gap antara sibling nya karna tranversal yang kita panggil meruapkan node 
// // cara mengatasinya hapus gapnya/ ambil sibling elementnya
// // jadi perbedaan node kalo node semua yang ada di html diambil
// // kalo element cukup elementnya aja 

//     // previous sibling (saudara sebelumny)
// console.log(nama.previousElementSibling);
// const close = document.querySelectorAll(`.close`)


// close.forEach(function(act){
//     // masukan parameternya untuk function domnya
//     act.addEventListener(`click`,function (e){
//         // parameter pada event digunakan untuk mengetahui informasi apa saja saat event tsb diklik contoh nya target yang diklik : span.close
//         //parentElement: menelusuri parent di nodenya
//             e.target.parentElement.remove();
        
//         // preventDefault()
//         // untuk mencegah proses default element
//         // study kasus kali ini menggunakan href a yang mana href nya kosong
//         // sehingga ketika di klik di ga hilang malah ngeloading karna hrefnya kosong dikira defaultnya yaitu balik ke halaman sendiri
//             e.preventDefault();
        
//         // cara agar tidak terjadi event bubling
//             e.stopPropagation();
//     })
// })


// // Event Bubbling
// //jadi event yang kita buat berpengaruh ke child dan parent sekitarnya
// // contoh kasus dibawah
// // membuat semua card ketika di klik keluar alert 
// // namun karna card merupakan parent dari close maka ketika close di klik
// // keluar juga alertnya baru di proses closenya
// // cara atasin biar tidak terjadi Event bubbling yaitu 
// // menambahkan stopPropagation();
// const cards = document.querySelectorAll(`.card`);
// cards.forEach(function(card){
//     card.addEventListener(`click`,function(e){
//        alert(`ok`);
//     })
// })


// const nama = document.querySelector(`.nama`);


const container = document.querySelector(`.container`);
container.addEventListener(`click`, function(e){
    // kalo class targetnya close
    if(e.target.className == `close`){
        // hapus element parentnya
        e.target.parentElement.remove();
    }

    // cegah proses defaultnya 
    e.preventDefault();
})