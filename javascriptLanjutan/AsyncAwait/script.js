const coba = new  Promise(resolve => {
    setTimeout(() => {
        resolve('selesai');
    },2000)
})

console.log(coba);
// coba.then(() => console.log(coba))

function cobaPromise(){
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('selesai');
        },2000)
    })
}

// const coba2 = cobaPromise();
// coba2.then(() => console.log(coba2));

// buat dengan cara synchronous
async function cobaAsync() {
    const coba = await cobaPromise();
    console.log(coba)
}
// cobaAsync();

/*

kenapa pending ? 

karena prosesnya synchronous sama dengan console.log(namaPromise)

karena ini synchronous 

sehingga proses promisenya di pending 

bagaimana cara biar asynchronous 

dengan cara tambahkan async di depan function 

lalu taroh await di functionnya atau promisenya

jadi proses async await itu 

proses synchronousnya akan ditahan dulu sampai promisenya selesai atau resolve





*/



function cobaPromise3(){
    return new Promise( (resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => resolve(`selesai`),waktu)
        }else{
            reject (`kelamaan !!!`)
        }
    })

}

const coba3 = cobaPromise3();
coba.then(() => console.log(coba3));
coba.catch(() => console.log(coba3))

// cara mengatasi agar ga eror menggunakan 2 promises try and catch
async function cobaAsync2() {
    try{
    const coba = await cobaPromise3();
    console.log(coba)
    }
    catch{
        console.log(err)
    }
    
}
cobaAsync2();


