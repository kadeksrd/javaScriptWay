function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp > 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == `gajah`) return comp == `orang` ? `MENANG!` : `KALAH!`;
  if (player == `orang`) return comp == `gajah` ? `KALAH!` : `MENANG!`;
  if (player == `semut`) return comp == `orang` ? `KALAH!` : `MENANG!`;
}

function imgRand() {
  const imgComputer = document.querySelector(`.img-komputer`);
  const gambar = [`gajah`, `semut`, `orang`];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute(`src`, `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;

    document.querySelector('.info').innerHTML = 'Loading...'
    document.querySelector('.info').style.backgroundColor = 'blue';
    document.querySelector('.info').style.color = '#fff';
    document.querySelector('.info').style.borderColor = 'blue';
  }, 115);
}

//  seleksi dom sekaligus

let scoreHasil = 0
let scoreComputer = 0;
let scorePlayer = 0;
const pilihan = document.querySelectorAll(`li img`);
pilihan.forEach(function (play) {
  play.addEventListener(`click`, function () {
    const pilihanComputer = getPilihanComputer(); //ambil function getcomputer diatas
    const pilihanPlayer = play.className; //ambil class karna nama sama
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    imgRand();

    switch (hasil){
        case "SERI!" :
        scoreComputer = scoreComputer, scorePlayer = scorePlayer;
        break;
        case "MENANG!" :
        scorePlayer++
        break;
        case "KALAH!":
        scoreComputer++
        break;
    }

   

   
    setTimeout(function () {
      // gambar comp
      const imgComp = document.querySelector(`.img-komputer`);
      imgComp.setAttribute(`src`, `img/${pilihanComputer}.png`);
      // text hasil
      const info = document.querySelector(`.info`);
      info.innerHTML = hasil;
      if (hasil == `MENANG!`) {
        info.style.hoverText = `gajah`;
        info.style.color = `#fff`;
        info.style.backgroundColor = `green`;
        info.style.borderColor = `green`;
      } else if (hasil == `KALAH!`) {
        info.style.color = `#fff`;
        info.style.backgroundColor = `red`;
        info.style.borderColor = `red`;
      } else {
        info.style.backgroundColor = `#fff`;
        info.style.color = `#000`;
        info.style.borderColor = `white`;

      }
      const score = document.querySelector(`.score`)
      score.querySelector(`.comp`).innerHTML = scoreComputer; 
      score.querySelector(`.player`).innerHTML = scorePlayer;
  
    }, 1000);
  });
});

