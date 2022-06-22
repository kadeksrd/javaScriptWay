// events

// event handler
// onclick

// const p3 = document.querySelector(`.p3`);


// // method untuk onClick untuk tag html
// function ubahWarnap3() {
//     p3.style.backgroundColor = `lightblue`;
// }




// const p2  = document.querySelector(`.p2`);
// // method untuk script js
// function ubahWarnap2() {
//     p2.style.backgroundColor = `lightblue`;
// }
// p2.onclick = ubahWarnap2;


// perbedaan onclick di html dan script js 

// html
// 1. function nya perlu pakai ()
// 2. onclicknya bisa ditulis onClick atau onclick
// 3. ditulis di tag html onclick="method"

// script js
// 1. function ga perlu pakai () karna kalo di pakai = manggil functionnya onclicknya ga jalan
// 2. onclick nya hanya bisa di tulis onclick kalo onClick ga jalan eventnya
// 3. ditulis di script element.onclick = method



// buat events ketika kita klik paragraf 4 item listnya bertambah
const p4 = document.querySelector(`section#b p`);
p4.addEventListener('click',function(){
    const parentLi = document.querySelector('section#b ul');
    const newLi = document.createElement('li');
    const newText = document.createTextNode(`New Item`);
    newLi.appendChild(newText);
    parentLi.appendChild(newLi);
});



// perbedaan event handler (onclick) dengan eventListerner()

const p3 = document.querySelector(`.p3`);
// event handler
p3.onclick = function(){
    p3.style.backgroundColor = `red`;
}
p3.onclick = () => p3.style.color = `blue`;

// eventListener

p3.addEventListener(`click`, () => p3.style.backgroundColor = `red`)
p3.addEventListener(`dblclick`, () => p3.style.color = `white`)


// perbedaannya 

// 1. kalo event handler itu ketika kita buat event baru maka yang lama akan di timpa
// 2. kalo event Listener itu kalo ada event baru maka akan di tambahkan 



// const p = document.querySelector(`section#a p`);
// p.addEventListener(`click` , () => {
//     p.style.color = `white`;
//     const p1 = document.querySelector(`.p1`);
//     p1.style.backgroundColor = `black`
//     const p2 = document.querySelector(`.p2`);
//     p2.style.backgroundColor = `red`;
//     const p3 = document.querySelector(`.p3`);
//     p3.style.backgroundColor = `lightBlue`;
// })