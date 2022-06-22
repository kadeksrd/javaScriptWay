// menambahkan warna pada bg saat di click 
  const playColor = document.querySelector(`#playColor`);
  const bodyColor = document.querySelector(`body`);
  const script = document.script;
  playColor.addEventListener(`click`, function () {
    // sekali klik langsung berubah tapi ga bisa balik
      // bgColor.style.backgroundColor = "darkBlue";
      // bgColor.style.color = "#fff";
    // bisa balikin warna lagi dengan manipulasi class
    bodyColor.classList.toggle(`dark-blue`);
  });



// buat warna random saat di click 
  const btnRndm = document.createElement('button');
  const textBtn = document.createTextNode(`Playing random color`);

  btnRndm.appendChild(textBtn);
  btnRndm.setAttribute('type' , 'button');

  // taroh setelah btn sebelumnya
  playColor.after(btnRndm);

  btnRndm.onclick = () => {
    const r = Math.round(Math.random() * 255 + 1); // random 1-255;
    const g = Math.round(Math.random() * 255 + 1); // random 1-255
    const b = Math.round(Math.random() * 255 + 1); // random 1-255

    console.log(r)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    document.body.style.color =`#fff`;
  }


// slider warna

  // preset
  const redSlide = document.querySelector(`input[name=redSlide]`)
  const  greenSlide = document.querySelector(`input[name=greenSlide]`)
  const  blueSlide = document.querySelector(`input[name=blueSlide]`)


  redSlide.addEventListener("input",function() {
    // change : warna berubah saat selesai di klik 
    // change : warna berubah saat dislide (realtime)
    // ambil valuenya
    const r  = redSlide.value;
    const g  = greenSlide.value;
    const b  = blueSlide.value;

    document.body.style.backgroundColor = `rgb(${r},${g} ,${b})`
  })

  greenSlide.addEventListener("input",function() {
    const r  = redSlide.value;
    const g  = greenSlide.value;
    const b  = blueSlide.value;

    document.body.style.backgroundColor = `rgb(${r},${g} ,${b})`
  })
  blueSlide.addEventListener("input",function() {
    const r  = redSlide.value;
    const g  = greenSlide.value;
    const b  = blueSlide.value;

    document.body.style.backgroundColor = `rgb(${r},${g} ,${b})`
  })


  // buat warna berubah saat mouse digerakin ke document

document.body.addEventListener(`mousemove`, function(event){
  // posisi mouse
    // console.log(event.clientY)
  // ukuran browser
  // console.log(window.innerWidth);
    // innerWidth : untuk mengetahui lebar document

    // buat logicnya
    const xPost = Math.round((event.clientX / window.innerWidth) * 255)
    const yPost = Math.round((event.clientY / window.innerWidth) * 255)

  document.body.style.backgroundColor = `rgb(${xPost},${yPost}, 100)`
  document.body.style.color = `#fff`


// clientX: sumbu x
// clientY : sumbu Y

// jadi konsep event.client itu `eventnya` merupakan fungsi callback dari fungsinya sendiri biar bisa di lihat sumbunya dari mouse


})




