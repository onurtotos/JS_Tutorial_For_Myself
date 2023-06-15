


/*

        Veri Tipleri

        1-String
        2-Number
        3-Boolean
        4-Null
        5-Undefined
        6-Object
        7-Function

*/

//string
let isim = "Onur Totos";
console.log(typeof isim);

//int
let sayi1 = 35;
console.log(typeof sayi1);
let sayi2 = 45;
console.log(sayi1 + sayi2);

//string concatenation
let a = "5";
let b = "2";
console.log(a + b);

//boolean (true or false)
let c = 6;
console.log(c > 5);

//Null (bos)
let d = null;
console.log(d > c);

//Undefined
let e;
console.log(typeof e);

//Object
let insan = {
    isim: "Onur",
    soyisim: "Totos",
    yas: "30",
    Egitim: "Yuksek Lisans",
    Meslek: "Yazilim Gelistirici"
}

console.log(insan);
console.log(typeof insan);

//Objective Array
let numbers = [5, 6, 7, 8, 9, 10, 11];
console.log(numbers);
console.log(typeof numbers);

let func = function () {
    console.log("Merhaba");
}
func();
console.log(typeof func);

