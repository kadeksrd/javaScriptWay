let angka = [2, 3, 4, 5, 8, 6, 7, 8, 9, 2, 3, 4, 5];
// sort
angka.sort();
console.log(angka);

// filter
let angka2 = angka.filter(function (x) {
    return x>4;
});

console.log(`ini metode filter ${angka2}`);

// find 
let angka5 = angka.find(function (x){
    return x>4
})

console.log(`ini metode find ${angka5}`)
// foreach 
let angka4 = angka.forEach(function(e){
    console.log(e);
})

// map
let angka3 = angka.map(function (e) {
    return e * 3;
})

    console.log(angka3);

// slice

let arr = ["aku","kamu","dia","mereka"]
// pengen hgapus mereka karena jahat :(
// slice harus di inisiasi langsung di debuginh method
console.log(`ini adalah array slice ${arr.slice(1,4)
}`);

// splice

let day = ["mon",'tue','wed','thu','fri'];
let addDay = ["sat","sun"]
day.splice(4,0,addDay)

console.log(`ini adalah splice ${day}`)