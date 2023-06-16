

                //Arrays (Diziler)




let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers[11]);

numbers[9] = "Fener";
console.log(numbers);


let names = ["John", "Marry", "Ahmet", "Ayse"];


let mixed = [0, 2.5, true, null, undefined, "Cimbom"];



/*          FOREACH DONGUSU           */

names.forEach(function (isim) {
    console.log(isim);
});

let sayac = 0;
while (sayac < names.length) {
    console.log(names[sayac]);
    sayac++;
}

/*                      Dizi Methodlari              */




/*

    push: Dizinin sonuna eleman ekler, ayrica dizinin uzunlugunu doner
    unshift: dizinin basina eleman ekler, eleman sayisini geriye doner.

    pop: Dizinin sonundan eleman siler, eleman sayisini doner.
    shift: Dizinin basindan eleman siler, eleman sayisini doner.

    splice(index,incdex): eleman eklemek ve silmek icin kullanilir.

    toString : diziyi stringe cevirir.
    join: Diziyi stringe cevirir. Farki ise araya eleman ekleyebiliriz.

    concat: Dizileri birlestirmek icin kullanilir.
    slice: Diziyi istenilen yerden bolup yeni bir dizi olusturur.
    length: dizinin uzunlugunu verir.
    reverse: dizinin elemanlarini ters cevirir.
    split: belirli bir ifadeye gore bolup diziye cevirir.
    indexOf: elemanin index numarasini icerir.
    includes: verilen elemani iceriyor mu ona bakar.

*/



let cars = ["Bmw", "Merso", "Ferrari", "Renault", "Porsche"];

//PUSH
console.log(cars);
cars.push("Sercedes");
console.log(cars);

//UNSHIFT
cars.unshift("Merhaba");
console.log(cars);

//POP
cars.pop();
console.log(cars);

//SHIFT
cars.shift();
console.log(cars);

//SPLICE
cars.splice(2, 0, "Fener");
console.log(cars);

//TOSTRING
let arabalar=cars.toString();
console.log(arabalar);

//JOIN
arabalar=cars.join("-");
console.log(arabalar);

//CONCAT