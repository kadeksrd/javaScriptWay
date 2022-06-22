// Dom Selection

// document.getElementById()

    const judul = document.getElementById('judul');
    

    didepan get elemen harus ada node root nya yaitu document
    jadi translatenya: js tolong carikan elemen dari id yang ada di dalem document
    jadi ketika sudah di get elementnya kita bisa lakukan apa saja dengan elemen itu dengan js 
    get element by id langsung kembalikan elementnya
    contoh ubah warna 
    judul.style.color = `red`;
    ini akan otomatis menambahkan inline css nya
    judul.style.backgroundColor= `blue`;
    ditulis menggunakan camelcase 
    
    // ubah tulisan
    judul.innerHTML = `Kadek`

// document.getElementsByTagName()
//  => mengembalikan html Collections yang mirip dengan array


    // contoh get element tag name
    const p = document.getElementsByTagName(`p`);
    // p[0].style.color =  `green`;
    // karna mengembalikan array maka yang ditulis adalah indexnya seperti diatas p[0]
    // bagaimana cara merubah semua elemen 
    // di looping 

    for(let i = 0; i<p.length; i++){
        p[i].style.color = `red`
        p[i].style.backgroundColor = `grey`;
    }

    // agar bisa mengembalikan element harus ambil indexnya contoh 
    const h1 = document.getElementsByTagName('h1')[0];
    h1.style.fontSize = `50px`;
    

// document.getElementsByClass();
// => mengembalikan htmlCollections jadi harus pake index

    const p1 = document.getElementsByClassName(`p1`)[0];
    p1.innerHTML = `ini bukan paragraf 1 lagi titik.`



// quick selector

// document.getElementQuickSelector()
