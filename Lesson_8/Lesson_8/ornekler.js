

/*
    Kelime sayis bulma uygulamasi // return methodu

    Metin isteyecegiz.
    Harf isteyecegiz.
    Sonra da girilen metindeki, girilen harf sayisinin kac tane oldugunu yazdiracagiz.

*/
/*
let metin = prompt("Lutfen metini giriniz:");
let harf = prompt("Lutfen harf giriniz:");

function harfSayisi(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i) === harf) {
            toplam += 1;
        }
    }
    return toplam;
}
yeniSatir = "\r\n";
let sonuc = harfSayisi(harf);
alert("Harf sayisi: " + sonuc + yeniSatir + "Girilen metin: " + metin + yeniSatir + "Girilen harf: " + harf)
*/



/*          
        Mukemmel Sayi Uygulamasi
  
        Mukemmel Sayi = Kendisi haric bolenlerinin toplami ; kendisine esitse Mukemmel Sayidir.

*/
/*
let number = prompt("Lutfen sayi giriniz: ");

function perfectNumber(number) {

    let toplam = 0;
    for (let i = 1; i < number; i++) {
        if (number%i ==0) {
            toplam = toplam+i;
        }
    }
    if (toplam == number) {
        alert("Girilen sayi mukemmel bir sayidir! " + number)
    } else {
        alert("Girilen sayi mukemmel bir sayi degildir! " + number)
    }
    return number;
}

    let sonuc1 = perfectNumber(number);
 */

/* Decimal to Binary */

/*

let number = prompt("Lutfen sayi giriniz:");

function convertDecimalToBinary(number) {
    let binary = "";
    while (true) {
        binary += String(number%2);
        number = Math.floor(number/2);
        if (number == 1) {
            binary += 1;
            break;
        }
    }
    let result = reverse(binary);
    alert("Sonuc: " + result);
    return number;
}

function reverse(binary) {
    let reverseBinary = "";
    for (let i = binary.length-1; i >=0; i--) {
        reverseBinary += binary.charAt(i);
    }
    return reverseBinary;
}


    let sonuc2 = convertDecimalToBinary(number);

 */

/*
    
        Binary to Decimal

*/

let binary =prompt("Binary sayinizi giriniz:");

function binaryToDecimal(binary) {
    let toplam = 0;
    let ust = 0;
    for (let i = binary.length-1; i >= 0; i--) {
        toplam += Number(binary.charAt(i)) * (Math.pow(2, ust));
        ust++;
    }
    alert("Sonuc: " + toplam);
}
binaryToDecimal(binary);

