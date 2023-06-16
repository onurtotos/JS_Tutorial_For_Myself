

//Map Methodu ==> key(anahtar) value (deger) ==> Arraylerin bir alternatifidir.


const map1 = new Map();

//SET
map1.set(01,"Onur");
map1.set(34,"Istanbul");
map1.set(07,"Antalya");
map1.set(06,"Ankara");

//GET
console.log(map1.get(6));
document.write(map1.get(07));

//DELETE
let value = map1.size;
let value1 = map1.delete(6);
value1 = map1.size;
console.log(value);
console.log(value1);


//HAS
console.log(map1.has(07));
console.log(map1.has(77));


//Destructing:Degerleri dondurme
for (let [key, value] of map1) {
    console.log(key, value);
}

//Arraye cevirmemiz gerek forEach kullanmak icin
const keys = Array.from(map1.keys());
keys.forEach((key) => {
    console.log(key, (map1.get(key)));
})

//keys yazdirma
for (let key of map1.keys()) {
    console.log(key);
}
//values yazdirma
for (let value of map1.values()) {
    console.log(value);
}


//MAP i Array e cevirmek
console.log(map1);
const array = Array.from(map1);
console.log(array);

array.forEach((value) =>{
    //1.indextekileri getirir.
    console.log(value[1]);
})


//Arrayi Map e cevirmek

const array3 = [
    ["34","Istanbul"],
    ["35","Izmir"],
    ["36","Karabuk"],
    ["37","Kastamonu"]
]

const myMap = new Map(array3);
console.log(myMap);

const myArray = Array.from(myMap);
console.log(myArray);





//let key123 = [1, 2, 3];
let key123 = {username: "Onur"} ;
map1.set(key123, "Array");
console.log(map1.get(key123));
console.log(typeof key123);