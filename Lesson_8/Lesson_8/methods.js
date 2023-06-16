


/*                  METHODLAR       


    1) Parametre almayan ve geriye deger dondurmeyen methot

*/

/*
    *function methodName () {

    //codeblock
    }
    *


function yazdir() {
    console.log("Onur");
}

yazdir();

function topla() {
    console.log(8 + 9);
}

topla();
*/
/* ---------------------------------------------------------------------------------------*/


/*                  METHODLAR       


    2) Parametre alan ve geriye deger dondurmeyen methot

 */

/*
function yazdir(isim,soyisim) {
    console.log(isim,soyisim);
}

yazdir("fener","bahce");


function topla(sayi1, sayi2) {
   
    console.log(sayi1+ sayi2);
}
topla(9, 8);

let yas = Number(prompt("Yasinizi Giriniz:"));

function kontrolEt(yas) {
    if (yas>18) {
        alert("Ehliyeti alabilirsiniz!");
    }
    else {
        alert("Ehliyet icin " + Math.abs(yas - 18) + " yil beklemeniz gerekli!", );
    }
}

kontrolEt(yas);

*/


/*                  METHODLAR       


    3) Geriye deger donduren ve parametre alan methot

*/


let donenDeger = Cube(8);
console.log(donenDeger);
function Cube(sayi) {
    let sonuc = sayi * sayi * sayi;
    return sonuc;
}


function kareAl(sayi) {
    let sonuc = sayi * sayi;
    console.log(sonuc);
}

kareAl(donenDeger);