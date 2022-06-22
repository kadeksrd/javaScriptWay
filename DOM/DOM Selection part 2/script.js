// quick selector

// document.querySelector() => element
// yang diisi selektor seperti selektor css
const p4 = document.querySelector('#b p')
p4.style.color =  `pink`;
p4.style.fontSize =  `40px`;

const li2 = document.querySelector(`section#b ul li:nth-child(2)`);
li2.style.color = `#c4c4c4`;
li2.style.backgroundColor = `#000`;


// study kasus lain
const p = document.querySelector(`p`);

p.style.color = `red`;

// karna querySelector mengembalikan 1 element saja maka yang berubah 
// hanya element p pertama saja 


// kalo untuk mengembalikan semua element gmn ?
// ini jawabannya ?

// document.querySelectorAll()
// sama seperti tag atau class mengembalikna array walaupun array tsb array dari nodecollections
const p2 = document.querySelectorAll(`p`);

// cara buat semua warna p sama
for(let i = 0; i<p2.length; i++){
p2[i].style.color = `red`;
}


// pilih yang mana ?

// kalo udh ada instrumentnya kyk id dan class pakai get element 
// kalo ingin satu macam tag html pakai get tag 

// kalo belom ada instrumentnya pakai queryselector



// mengubah node root
const sectionB = document.getElementById(`b`);
const p5 = sectionB.querySelector(`p`);

p5.style.backgroundColor = `blue`;

// jadi disini kita buat dulu variabel parentnya
// lalu jadikan parent tersebut node rootnya
