// element.InnerHTML
    // => mengubah isi dari inner/ tag htmlnya
    // misal <h1>isi</h1>
    // maka itu yang diubah

    // contoh <h1>hello World</h1> jadi <h1>hello kadek</h1>

        // const judul = document.getElementById(`judul`);
        // judul.innerHTML = `Hello Kadek`;
    // bisa juga di tambahkan htmlnya
    // contoh lain


        // const p = document.querySelectorAll(`#a`);
        // for (i = 0; i < p.length; i++) {
        // p[i].innerHTML = `apalo`;
        // }


// element.style.<property>
    // memanipulasi style/css pada dom js
        // const judul = document.querySelector(`#judul`)
        // judul.style.color = `darkblue`

// element.setAttribute()
    // memanipulasi atribut yang ada di html 
    // contoh penulisan
    // judul.setAttribute(`namaAttribute`, `isinya`)

    // contoh menambahkan atribute name pada html h1
     
        const judul = document.getElementsByTagName(`h2`)[0];
        judul.setAttribute(`id` , `kadek`);

        // maka hasilnya ada name di htmlnya 

// element.getAttribute()
    // menangkap attribute 

        judul.getAttribute(`id`);
    // maka yang ditangkap id judul

// element.removeAttribute();
    // menghapus element;
    // contoh menghapus attribute name
    judul.removeAttribute(`id`)

// element.classLIst
    // menambahkan class pada attribute

    // kalo via set Attribute akan menggantikan nama class nya bukan menambahkan 
    // solusinya classList ini

    // manipulasinya ada 4 macam
    // element.classList.add()
        // menambahkan class baru
        // contoh 
        const p1 = document.querySelector(`.p1`);
        p1.classList.add(`judulBaru`);
    
    // element.classList.remove()
        // menghapus class 
        p1.classList.remove(`p1`);
    // element.classList.toggle()
        // mengecek apakah sudah punya class yang di tentukan/ ditulis
        // kalo belom tambahkan
        // kalo sudah hapus

        // contoh tambah p1 dan hapus judulBaru;
        p1.classList.toggle("p1")
        p1.classList.toggle("p2")
        p1.classList.toggle("p3")
        p1.classList.toggle("judulBaru");
        p1.classList.toggle(`kadek`);

        // hasilnya p1 ditambahkan dan judulBaru dihapus

    // element.classList.item()
        // untuk mengetahui nama class pada sebuah element
        // Element.classList.item(urutanClassnya)
            console.log(p1.classList.item(2));
        // maka yang keluar adalah p3 karna sesuai index arraynya


    // element.classList.contains()
        // mengecek ada ga class yang ditentukan kalo ada maka hasil = true;
        // element.classList.contains(`namaClassnya`);
            console.log(p1.classList.contains(`p2`));
        // maka hasil = true karna p2 ada di classList p1
    
    
    // element.classList.replace()
        // mengubah classListnya 
        // element.classList.replace(`classYangdiGanti`, `classBarunya`)
            p1.classList.replace(`p2`, `kadekdua`);
        // maka class akan berubah menjadi dua 
