// destructuring variabel / assigment



// destructuring array

    // konsepnya sama aja kalo kita get array/ nangkap array 
    // contoh pada array biasa 

    const perkenalan = ['halo','nama','saya','kadek']


    const salam2 = perkenalan[0];
    console.log(salam2);

    const satu2 = perkenalan[1];
    console.log(satu2)

    // contoh destructuring array
    // const perkenalan = ['halo','nama','saya','kadek']

    // const [salam,satu,dua,nama] = perkenalan
    // console.log(salam);
    // console.log(satu);

// jadi array baru [] = variabel yang menangkap array diatas

    // dengan destructing array kita ga perlu bikin variabel satu2 cukup
    // dikurung sekaligus []

    // skip item
    // mengambil atau menskip array
    // cukup kosongin aja variabelnya  
    // misal pgn ambil array nama dan saya

    const [ ,satu,dua, ] = perkenalan
    console.log(dua);

    // swap item 
    // menukar isi array