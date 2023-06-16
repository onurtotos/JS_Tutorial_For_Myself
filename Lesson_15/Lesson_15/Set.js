


//SET KULLANIMI ==> bir deger yalnizca bir kere tanimlanir!


const set = new Set();

set.add(true);
set.add(3.5);
set.add("Onur");
//set.add("Onur");
//set.add("Onur");
set.add(17);
set.add({ username: "Onur", password: "123" });
set.add([1, 2, 3, 4]);

//Size
console.log(set.size);

//Delete
set.delete("Onur");
console.log(set.size);

//referans tiplerini silmek icin degere atayip silmek gerekir

let osman = set.delete({ username: "Onur", password: "123" });
console.log(set.size);


for (let value of set) {
    console.log(value);
}
















