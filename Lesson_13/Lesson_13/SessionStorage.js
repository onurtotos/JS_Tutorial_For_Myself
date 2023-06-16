

//Session Storage Kullanimi

//ekle
sessionStorage.setItem("450", "Fener");
sessionStorage.setItem("216", "Cimbom");
sessionStorage.setItem("123", "Bejk");
//sil
sessionStorage.removeItem("123");
//degerAlma

let Osman = sessionStorage.getItem("450");
console.log(Osman);

/*sessionStorage de butun ifadeler string olarak kabul edilir.
olusturulan bir diziyi dizi olarak atayabilmek icin JSON.stringify methodunu 
kullaniriz.
*/

let names = ["Ali", "Osman", "Ayse", "Fatma"];
sessionStorage.setItem("names", JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));
value.forEach(function (name) {
    console.log(name);
})

// localStorage ==> farki hicbir sekilde silinmiyor.
/*

window.localStorage.setItem("123", "DegerKurma");
window.localStorage.setItem("456", "DegerSilme");
window.localStorage.setItem("789", "TumunuSilme");
let value1 = localStorage.getItem("123");
console.log(value1);
localStorage.removeItem("456");
//localStorage.clear();

//Array
let motions = ["DegerKurma", "DegerSilme", "TumunuSilme"];
localStorage.setItem("motions", JSON.stringify(motions));

let value2 = JSON.parse(localStorage.getItem("motions"));
console.log(value2);

value2.forEach(function (motion) {
    console.log(motion);
})
 */