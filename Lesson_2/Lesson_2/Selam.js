

// ! Document write ile cikti verme(Bu method sayfaya yazar)

document.write("Hello World <br>");
document.write("How are you?");
document.writeln(93);

// ! Console log metodu ile console a yazdirma (Bu method konsola yazar)

console.log("Hello World!");
console.log(6.5);
console.log(true);

console.clear();

let a = 5;
let b = 10;
console.log(a + b);
console.log("iki sayinin toplami:", a + b);
console.clear();
console.log(window);
console.log(document.location.hostname);

//! Alert (Uyari) popup ile cikti verme (Bu method sayfa acilinca mesaj popup olarak gelir)

/* Toplami islemini yaparken parantez icine almak olasi
bir string(concatenation) toplamasini engeller.*/
let d = 25;
let c = 30;
alert("Iki Sayinin Toplami: " + (d + c));

alert("F5 tusuna lutfen basmayiniz!");

//console.log(window);
//console.error("HATA");
//console.warn("Dikkat!");
//debugger;