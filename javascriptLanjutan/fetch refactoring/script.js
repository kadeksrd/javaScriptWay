
// // kita buat data movies api dengan fetch

// const searchButton = document.querySelector(".search-button");

// searchButton.addEventListener("click", function () {
//   // panggil fetchnya
//   // fetch(urlnya+ input valuenya )

//     const getDataInput = document.querySelector(".input-keyword");
//     fetch("http://www.omdbapi.com/?apikey=3bb6c039&s=" + getDataInput.value)
//     // agar yang dicetak objectnya langsung kita perlu 2x promise then callback response
//     // yang ini ambil data promisenya dan cetak dalam bentuk json
      
//       .then((response) => response.json()) // gunakan json() agar data yang dicetak dalam bentuk json

//     // yang ini cetak isi data dalam bentuk object
//     // .then(response => {console.log(response)});

//   // ambil data movies lalu cetak ke dalam cards
//     .then((response) => {
//       // hapus property searchnya agar langsung ambil objectnya
//         const movies = response.Search;
//       // buat variabel cardsnya untuk menyimpan html cards
//         let cards = "";
//       // looping cardsnya
//         movies.forEach((m) => (cards += showCards(m)));
//       // cetak cardsnya
//         const movieContainer = document.querySelector(".movies-container");
//         movieContainer.innerHTML = cards;

//     // ketika tombol detail di klik 
//     // ambil semua data yang di klik
//       const modalButton = document.querySelectorAll('.modal-detail-button');
//     // lalu looping semuanya
//       modalButton.forEach(btn => {
        
//         btn.addEventListener('click', function (){
//             // ambil data dari user lalu ambil data dari  api dengan fetch lalu taroh ke promise
//                // ambil data dari user
//                   const imdbid = this.dataset.imdbid;
//               // ambil data api dengan fetch
//                   fetch('http://www.omdbapi.com/?apikey=3bb6c039&i=' + imdbid)
//                   // lalu masukan ke promise 
//                     .then(response => response.json())
//                     // lalu masukan kembali ke modal body
//                     .then(m => {
//                       const movieDetail = showModals(m);
//                       const modalBody = document.querySelector('.modal-body');
//                       modalBody.innerHTML = movieDetail;
//                     })
//         })
//       })
    
//     });
// });





// fetch refactoring 
// membuat fetch nya lebih rapi lagi

// fitur search
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  //ambil input keywordnya 
    const inputKeyword = document.querySelector('.input-keyword');
    // buat function dengan mengambil value input keywordnya sebagai parameternya
      const movies =  await getMovies(inputKeyword.value);
      console.log(movies);

      /*
        -hasilnya promise kenapa ? 
        -karena semua kodingan diatas merupakan synchronous dengan lempar variabel sana sini
        -sehingga sih console.log dicetak duluan karena dicetak duluan maka sih function fetch movies mengembalikan promise bukan object
        -padahal get moviesnya kan asynchronous kok jadi keanggap synchronues
        -caranya gmn biar jadi asynchronous ?
        
        -dengan membuat asyn await
        -apa itu asyn await
        -jadi intinya menyuruh javascript agar mengecek bahwa suatu variabel/function ada yang asyn asynchronous ?
        -cara nulisnya di parameter nya ditulis asyn 
        - dan yang diindikasi asynchronous nya ditulis await biar javascript bisa langsung mendeteksi
      
      */



    // buat function untuk mengambil  data movies dan dijadikan parameter
    // lalu dicetak di cards
    updateUI(movies)
});


// fitur modal details
// const modalButton = document.querySelectorAll('.modal-detail-button');
//     // lalu looping semuanya
//       modalButton.forEach(btn => {
        
//         btn.addEventListener('click', function (){
//             // ambil data dari user lalu ambil data dari  api dengan fetch lalu taroh ke promise
//                // ambil data dari user
//                   const imdbid = this.dataset.imdbid;
//               // ambil data api dengan fetch
//                   fetch('http://www.omdbapi.com/?apikey=3bb6c039&i=' + imdbid)
//                   // lalu masukan ke promise 
//                     .then(response => response.json())
//                     // lalu masukan kembali ke modal body
//                     .then(m => {
//                       const movieDetail = showModals(m);
//                       const modalBody = document.querySelector('.modal-body');
//                       modalBody.innerHTML = movieDetail;
//                     })
//         })
//       })



/*
  fitur diatas ga bisa kenapa ?

  -karena kan fitur websitenya data kosong dulu saat diketik lalu muncul 
  -nah promblemnya dengan membuat dom modal details maka saat website loading dia datanya ikut muncul juga karena dasarnya menggunakan 
  -document lalu dicetak langsung modal buttonnya maka saat loading data langsung dicetak bukan data di klik dahulu baru dicetak
  -gimana saat tombol di klik terlebuih dahulu baru dicetak 
  -gunakan event binding 
*/


// event binding dengan target kliknya

document.addEventListener("click", async function (e) {
  // e = event
  // jika target yang dituju buttonnya
  if(e.target.classList.contains('modal-detail')){
      // maka targetkan imdbid nya
      const imdbid = e.target.dataset.imdbid;
    // lalu buat functin fetchnya dengan imdbid sebagai apinya
      const movieDetail = await getMovieDetail(imdbid);
    // lalu cetak dalam modal detailnya
      updateUIDetail(movieDetail);
  }
});



function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=3bb6c039&i=' + imdbid)
    .then(response => response.json())
    .then(m => m); // jadi parameter di updateUInya karena datanya akan dicetak menjadi modal ui 
}

function updateUIDetail(m){
  const movieDetail = showModals(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}




function getMovies(keyword){
  return fetch('http://www.omdbapi.com/?apikey=3bb6c039&s=' + keyword)
  .then(response => response.json())
  .then(response => response.Search);
}



function updateUI(movies){
  let cards = "";
    // looping cardsnya
      movies.forEach((m) => (cards += showCards(m)));
        // cetak cardsnya
          const movieContainer = document.querySelector(".movies-container");
          movieContainer.innerHTML = cards;
}


function showCards(m) {
  return `             
            <div class="col-md-4 my-5">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-3 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail" data-toggle="modal"
                data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showModals(m) {
  return `
  <div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" alt="" class="img-fluid">
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
        <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
        <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
        <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
        <li class="list-group-item"><strong>Plot: </strong> <br>${m.Plot}</li>
      </ul>
    </div>
  </div>
</div>`;
}
