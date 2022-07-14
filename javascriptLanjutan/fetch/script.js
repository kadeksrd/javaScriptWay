// // buat fitur cari
// $('.search-button').on('click', function () {

//   $.ajax({
//     // ambil data dari api
//     url: "http://www.omdbapi.com/?apikey=3bb6c039&s=" + $('.input-keyword').val(),
//     
      
    // kalo sukses maka ambil data

//     success: (results) => {
//       const movies = results.Search; //biar data tulisan search di array hilang
//       
      // lalu di looping
//       let cards = "";
//       movies.forEach((m) => {
//        
      // masukan hasil looping kedalam cards di html
//         cards += showCards(m);
//       });
//       
        // taroh data cards ke dalam row html nya
//       $(".movies-container").html(cards);
//       
          // ketika tombol detail di klik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           // ambil id dari imdb nya
//           url:
//             "http://www.omdbapi.com/?apikey=3bb6c039&i=" + $(this).data("imdbid"), // ini ambil dari data-imdbid diatas
//           success: (m) => {
//             // letakan data2 di tempatnya
//             const movieDetail = showModals(m);

//             // taroh ke modal body
//             $(".modal-body").html(movieDetail);
//           },

//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });

// })

// kita buat cara diaas dengan versi
// fetch

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
  // panggil fetchnya
  // fetch(urlnya+ input valuenya )

    const getDataInput = document.querySelector(".input-keyword");
    fetch("http://www.omdbapi.com/?apikey=3bb6c039&s=" + getDataInput.value)
    // agar yang dicetak objectnya langsung kita perlu 2x promise then callback response
    // yang ini ambil data promisenya dan cetak dalam bentuk json
      
      .then((response) => response.json()) // gunakan json() agar data yang dicetak dalam bentuk json

    // yang ini cetak isi data dalam bentuk object
    // .then(response => {console.log(response)});

  // ambil data movies lalu cetak ke dalam cards
    .then((response) => {
      // hapus property searchnya agar langsung ambil objectnya
        const movies = response.Search;
      // buat variabel cardsnya untuk menyimpan html cards
        let cards = "";
      // looping cardsnya
        movies.forEach((m) => (cards += showCards(m)));
      // cetak cardsnya
        const movieContainer = document.querySelector(".movies-container");
        movieContainer.innerHTML = cards;

    // ketika tombol detail di klik 
    // ambil semua data yang di klik
      const modalButton = document.querySelectorAll('.modal-detail-button');
    // lalu looping semuanya
      modalButton.forEach(btn => {
        
        btn.addEventListener('click', function (){
            // ambil data dari user lalu ambil data dari  api dengan fetch lalu taroh ke promise
               // ambil data dari user
                  const imdbid = this.dataset.imdbid;
              // ambil data api dengan fetch
                  fetch('http://www.omdbapi.com/?apikey=3bb6c039&i=' + imdbid)
                  // lalu masukan ke promise 
                    .then(response => response.json())
                    // lalu masukan kembali ke modal body
                    .then(m => {
                      const movieDetail = showModals(m);
                      const modalBody = document.querySelector('.modal-body');
                      modalBody.innerHTML = movieDetail;
                    })
        })
      })
    
    });
});



function showCards(m) {
  return `             
            <div class="col-md-4 my-5">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-3 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
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
