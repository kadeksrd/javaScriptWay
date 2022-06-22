const box = document.querySelector('.box');
box.addEventListener('click',function(){
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    })
})

// menjalankan animasi yang dibuat css 
// 1. deklarsi box sebagai class dari css box 
// 2. class box di buat event ketika saat di klik dia berubah menjadi 2 macam : 
// 3. class size menambah besar
// 4. class caption menjadi warna 