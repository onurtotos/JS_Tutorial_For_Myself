
/* 
    *DONGULER
    FOR - WHILE - DO WHILE - FOREACH

*/

/**-------------------------FOR----------****--------*/
/* 
for (var i = 0; i < length; i++) {
    codeblock
}
*/
//Tek Sayilar - Cift Sayilar
/* Faktoriyel hesaplama

    let x = Number(prompt("Lutfen bir sayi giriniz:"));
    let y = 1;
    for (let i = 1; i <= x; i++) {
        y = y* i;    
    }
    console.log(y);

*/

/* Asal Sayi midir/degil midir? 

let sayi = Number(prompt("Lutfen bir sayi giriniz:"));

for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
        console.log("Girilen sayi asal degildir")
        break;
    }
    else {
        console.log("Girilen sayi asaldir")
    }
}
*/

/**------------------------------WHILE-------------------------------------- */
/*
while (kosul) {
    //codeblock
    //counter++
}
*/
/*
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}
*/

/**-----------------------DO----WHILE-------------------------------------- */
/*
do {
 //codeblock
} while (condition);
*/
/* 
let i = 0;
do {
    console.log(i);
    i++
} while (i<10);
*/

/*
1 den 20 ye kadar olan tek sayilarin toplamini bulalim


let sayac = 1;
let toplam = 0;

do {
    if (sayac % 2 == 1) {
        toplam += sayac;
    }
    sayac++;
} while (sayac <= 20);
console.log("Toplam:" + toplam);
*/

/* Break - Continue */

let sayac = 1;
while (sayac < 10) {
    console.log(sayac);
    if (sayac==8) {
        break;
    }
    sayac++;
}

let sayac1 = 1;
while (sayac1 < 10) {
    sayac1++;
    if (sayac1 == 8) {
        continue;
    }
    
    console.log(sayac1);
}






