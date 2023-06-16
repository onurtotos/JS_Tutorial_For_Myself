


/* String Sinifi Methodlari


    //CharAt()
    //Concat()
    //IndexOf()
    //lastindexOf()
    //toUpperCase()
    //toLowerCase()
    //trim()
    //slice()
    //substring()
    //replace()
    //split()
    //valueOf()
    //startsWith()
    //endsWith()


*/

let kurs = "Modern Web Gelistirme Kursu";

//CHARAT ==> index ver karakter al
let karakter = kurs.charAt(5);
console.log(karakter);

//CONCAT ==>String birlestirme
let tarih = " 2022";
let sonuc = kurs.concat(tarih);
console.log(sonuc);

//IndexOf ==>karakter ver index al
let index = kurs.indexOf("o");
console.log(index);

//lastIndexOf ==>Kelime verip index no alabiliriz.
let osman = kurs.lastIndexOf("Ku")
console.log(osman);

//toUpperCase:toLowerCase
let buyuk = kurs.toUpperCase();
let kucuk = kurs.toLowerCase();
console.log(buyuk);
console.log(kurs);
console.log(kucuk);


//Trim
let selam = "             NASILSINIZ";
console.log(selam);
console.log(selam.trim());

//Slice ==>Son index dahil degil.
let sampiyon = " 2023 Sezonu Sampiyonu Galatasaray!";
console.log(sampiyon.slice(22, 26));

//Substring
console.log(sampiyon.substring(0, 8));

//Replace
console.log(sampiyon.replace("Galatasaray", "Fenerbahce"));

//Split ==> Dizi haline getir
let array1 = console.log(sampiyon.split(" "));

//StartsWith
console.log(sampiyon.startsWith(""));

//EndsWith
console.log(sampiyon.endsWith("e"));
