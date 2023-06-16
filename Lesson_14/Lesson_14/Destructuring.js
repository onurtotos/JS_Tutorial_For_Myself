

//Destructing Kullanimi

let langs = ["C#", "JS", "Python", "Fener"];
let lang1, lang2, lang3, lang4;

/*
lang1 = langs[0];
lang2 = langs[1];
lang3 = langs[2];
lang4 = langs[3];
 */

[lang1, lang2, lang3, lang4] = langs;


console.log(lang1, lang2, lang3, lang4);


const hesapla = (a,b) => {
    const toplam = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;

    const dizi = [toplam, cikar, carp, bol];
    return dizi;
}

let [a, b, c, d] = hesapla(10, 2);
console.log(a, b, c, d);

const person = {
    firstName :"Onur",
    lastName :"Totos",
    salary: 10000,
    age : 30
}

/*
let isim, soyisim, maas, yas;
isim = person.firstName;
soyisim = person.lastName;
maas = person.salary;
yas = person.age;
 */

let { firstName:isim, lastName:soyisim, salary:maas, age:yas } = person;
//console.log(firstName, lastName, salary, age);
console.log(isim, soyisim, maas, yas);