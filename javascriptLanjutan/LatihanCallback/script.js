// buat fitur cari 
$('.search-button').on('click', function () {
  
  $.ajax({
    // ambil data dari api
    url: "http://www.omdbapi.com/?apikey=3bb6c039&s=" + $('.input-keyword').val(),
    // kalo sukses maka ambil data
    success: (results) => {
      const movies = results.Search; //biar data tulisan search di array hilang
      // lalu di looping
      let cards = "";
      movies.forEach((m) => {
        // masukan hasil looping kedalam cards di html
        cards += showCards(m);
      });
      // taroh data cards ke dalam row html nya
      $(".movies-container").html(cards);
      // ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          // ambil id dari imdb nya
          url:
            "http://www.omdbapi.com/?apikey=3bb6c039&i=" + $(this).data("imdbid"), // ini ambil dari data-imdbid diatas
          success: (m) => {
            // letakan data2 di tempatnya
            const movieDetail = showModals(m);
  
            // taroh ke modal body
            $(".modal-body").html(movieDetail);
          },
  
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });

})



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


function showModals(m){
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
