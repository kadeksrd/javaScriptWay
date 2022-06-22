// DOM MANIPULATION NODE 

// buat elemen baru dibawah paragraf 3 dengan appendChild

    // 1. buat elementnya paragraf baru menggunakan createElement
    const pBaru = document.createElement('p');
    // 2. buat textnya dengan createTextNode
    const textBaru = document.createTextNode(`New Paragraf`);
    // 3. simpan tulisan ke dalam paragraf baru dengan appendChild
    pBaru.appendChild(textBaru);
    // 4. simpan pBaru di akhir section biar bisa dicreate di didalem section dengan appendChild
    const sectionA = document.querySelector(`#a`)
    sectionA.appendChild(pBaru)



// buat elemen baru di antara item 1 dan item 2 dengan ditambahkan insertBefore

    const newLi = document.createElement(`li`);
    const newText = document.createTextNode(`New Item`);

    // masukan text ke dalam li
    newLi.appendChild(newText);

    // ambil parentnya
    const parentLi = document.querySelector(`section#b ul`);
    // ambil li yang kedua
    const li2 = document.querySelector(`section#b ul li:nth-child(2)`)
 
    // letakan newLi diatas li2 dan di dalam parent

    // cara penulisan element.insertBefore(elemenBaru, posisi elemen dibawahnya);
    parentLi.insertBefore(newLi, li2);


// remove child

    // ambil link instagram
    const link = document.getElementsByTagName(`a`)[0];
    
    // remove linknya
    sectionA.removeChild(link);


// replace child
// replace childnya menjadi element baru

// contoh replace paragraph 4 menjadi h2 

// ambil parentnya dulu section b

const sectionB = document.querySelector(`#b`);
// ambil paragraph 4 nya
const p4 = sectionB.getElementsByTagName(`p`)[0];
// buat elemen h2 baru 
const h2Baru  = document.createElement('h2');
// buat elemen text baru
const textBaru2 = document.createTextNode('ini h2 baru');

// masukan text ke h2 
h2Baru.appendChild(textBaru2);


// replace p4nya ke h2 
// replaceChild(element baru, element lama);
sectionB.replaceChild(h2Baru,p4)


// merubah warna yang baru di ganti
pBaru.style.backgroundColor = `lightgreen`;
newLi.style.backgroundColor = `lightgreen`;
h2Baru.style.backgroundColor = `lightgreen`;


// remove node langsung

element.remove();