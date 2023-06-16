
//For In - For Of

let names = ["Onur", "Totos", "Selam", "Nasilsin"];


//For in ==> index numaralarini verecek
for (let nameIndex in names) {
    console.log(nameIndex, names[nameIndex]);
}


//For of ==> direk dizideki nesneleri verir birnevi forEach method gibi dondurur.
for (let isim of names) {
    console.log(isim, names.indexOf(isim));
}










































