// contoh panggil api dengan jquery ajax
    $.ajax({
    url: "http://www.omdbapi.com/?apikey=3bb6c039&s=avengers",
    success: (movies) => console.log(movies),
    });

// contoh panggil api dengan ajax vanilla javascript 

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 ) {
            if (xhr.readyState == 4 ){
                console.log(JSON.parse(xhr.response));
            }
        }else{
            console.log(xhr.responseText);
        }
    }

    xhr.open ('get', 'http://www.omdbapi.com/?apikey=3bb6c039&s=avengers');
    xhr.send();




// PROMISE

    // object yang merepresentasikan keberhasilan / kegagalan sebuah
    // event yang asynchronus di masa yang akan datang 
    // janji (terpenuhi/ingkar)
    // states (fullfilled/rejected/pending) pending: waktu yang dibutuhkan untuk memutuskan terpenuhi / ingkar (fullfilled/rejected)
    // callback (resolved/reject/finally)
    // aksi (then/catch)


// contoh sederhana promise

    let ditempati = true;

    // persiapannya
    const janji = new Promise((resolve, reject) => {
        if(ditempati){
            resolve('janji telah ditepati!');
        }else{
            reject('ingkar janji');
        }
    });

    console.log(janji)


    // AKSINYA
    janji
    .then(response => console.log('OK! ' + response ))
    .catch(response => console.log('NOT OK!' +  response));  //  TODO: error handling here


// contoh lagi 

    let ditepati = true;
    const janji2 = new Promise((resolve, reject) => {
        if(ditepati) {
            setTimeout(() => {
                resolve('Ditepati setelah beberapa waktu');
            },2000);
        }else {
            setTimeout(() => {
                resolve('Tidak ditepati setelah beberapa waktu');
            },2000);
        }
    })

    console.log('mulai')
    // console.log(janji2);
    janji2.finally(() => console.log('selesai menunggu'))
    // finally ini untuk mengisyratkan bahwa pending sudah selesai
    // biasanya diproses diatas /sebelum hasil  pending sebagai isyarat  

    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));
    // console.log(janji2.then(() => console.log(janji2)));
    // apa perbedaan janji2.then dan console.log(janji2.then diatas) ?
    // pada proses asynchronus nya
    // kalo yang janji2.then itu asynchronous tapi tidak pending karena saat callback dia mengcallback dalam local thennya bisa dilihat responsenya
    // kalo yang console.log itu asynchronus tapi pending karena yang dicallback itu console.log nya sehingga butuh proses panjang 
    console.log('selesai')


// contoh membuat promise dengan banyak api


// contoh api film
const film  = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'avengers',
            sutradara: 'kadek',
            pameran : 'kadek',
        }])
    },1000);
})


// contoh api cuaca
const cuaca =  new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'bandung',
            temp: 26,
            kondisi : 'cerah berawan',
        }])
    },500);
})


// jalanin api satu2

film.then(response => console.log(response));
cuaca.then(response => console.log(response));

// karena cuaca lebih cepat waktu loadingnya maka yang jalan duluan cuaca

// jalanin api langsung

Promise.all([film,cuaca])
    .then(response => console.log(response));
    
// cara jalanin langsung tapi pecahin arraynya
Promise.all([film,cuaca])
    .then(response => {
        const [film,cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });

