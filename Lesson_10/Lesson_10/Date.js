
/*      *DATE        */

//GET
let tarih = new Date();
console.log(tarih.getDate());
console.log("haftanin " + tarih.getDay() +". gunu");
console.log(tarih.getFullYear());
console.log(tarih.getHours());
console.log(tarih.getMilliseconds());
console.log(tarih.getMinutes());
console.log(Math.abs(tarih.getTimezoneOffset() / 60) + " saat");
console.log(tarih.toLocaleString());


//SET
console.log(tarih);
tarih.setTime(12);
console.log(tarih);