


//Spread Operatoru

let numbers = [10, 20, 30, 40];
function add(a, b, c, d) {
    console.log(a + b + c + d);
}
//add(10, 20, 30, 40);
add(numbers[0], numbers[1], numbers[2], numbers[3]);

//Spread operatoru
add(...numbers);
add(...numbers);
add(...numbers);

const diller1 = ["Java", "C#"];
const diller2 = ["Php", "Python", diller1[0], diller1[1]];
const diller3 = ["Php", "Python", ...diller1];

console.log(diller2);
console.log(diller3);

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a1, b1, ...kalanSayilar] = sayilar;
console.log(a1, b1, kalanSayilar);










