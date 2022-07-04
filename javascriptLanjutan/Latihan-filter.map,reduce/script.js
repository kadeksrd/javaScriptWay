// ambil semua elemen video

// Array.from(ubah tagname jadi array)
const getVideos = Array.from(document.querySelectorAll("[data-duration]")); //[data - duration] : cari element yang didalemnya ada attr
console.log(getVideos);

// pilih hanya yang 'javascript lanjutan'
let jsLanjut = getVideos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")) // textContent.includes("JAVASCRIPT LANJUTAN") : mengambil data text yang ada di dalam tag nya
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration) //dataset.duration : ambil data durasinya

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 => [10,30]split
    const parts = waktu.split(":").map((parts) => parseFloat(parts));
    //waktu.split(":") : pecah jadi 11,30
    // map(parts) => parseFloat(parts)); : ubah jadi float biar bisa di jumlahkan secara rill bukan string
    return (parts[0] * 60 ) + parts[1];
  })

  // jumlahkan semua detik
  .reduce((detikAwal, detikAkhir) => detikAwal + detikAkhir);
// ubah formatnya jadi jam menit dan detik
const jam = Math.floor(jsLanjut / 3600); // math.floor : pembulatan kebawah  // math.ceil : pembulatan keatas
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di DOM
const durasi = document.querySelector(`.total-durasi`)

durasi.textContent = `${jam} Jam : ${menit} Menit : ${detik} Detik`


// jumlah Video 

const jmlVideo = getVideos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;
console.log(detik);
