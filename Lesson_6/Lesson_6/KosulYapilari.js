

//KOSUL YAPILARI - IFELSEIF -SWITCHCASE
/*
let not = 35;

if (not > 50) {
    console.log("gectiniz! notunuz: " + not)
}
else {
    console.log("kaldiniz! notunuz: " + not)
}

let yas = Number(prompt("Lutfen yasinizi giriniz"));
let para = Number(prompt("Lutfen paranizi giriniz"));



if (yas > 18 && para > 2500) {
    alert("Ehliyet alabilirsiniz!")
}
else {
    alert("Tekrar deneyiniz");
}

 */



/*
 *  if (true) {

    }
    else if (true) {

    }
    else {

    }

 */

/*------------------------------------------------------------------------------------------------------------*/

//Beden Kitle Endeksi Hesaplama
/*
        Vucut kitle endeksi = Vucut Agirligi / Boy**2 (kg/m**2)

*/
/*
let kilo = Number(prompt("Lutfen kilonuzu giriniz: (kg)"));
let boy = Number(prompt("Lutfen boyunuzu giriniz:  (m2)"));

let vKi = kilo / (boy ** 2);

if (vKi < 18.5) {
    console.log("Ideal Kilonun Altindasiniz!" + vKi)
}
else if (vKi > 18.5 && vKi <= 24.9) {
    console.log("Ideal Kilodasiniz!" + vKi)
}
else if (vKi > 25 && vKi <= 29.9) {
    console.log("Ideal Kilonun Ustundesiniz!" + vKi)
}
else if (vKi > 30 && vKi <= 39.9) {
    console.log("Ideal Kilonun cok ustundesiniz!" + vKi)
}
else {
    console.log("Ideal Kilonun cok cok ustundesiniz!" + vKi)
}
 */


/*------------------------------------------------------------------------------------------------------------*/
/*
    
        --Benzin Istasyonu
        
        1-Dizel: 23.12
        2-Benzin: 25.75
        3-LPG : 11.34


        --Gelen Musteriden alacagimiz bilgiler
        1-Yakit Tipi
        2-Yuklenecek Yakit Litresi
*/

/* 

let dizel = 23.12, benzin = 25.75, lpg = 11.34;
const yenisatir = "\r\n"; //Alert icin linebreak
const yakitMetni = "1-Dizel" + yenisatir + "2-Benzin" + yenisatir + "3-Lpg" + yenisatir;
let yakitTipi = prompt(yakitMetni);


if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("Yakit litresini giriniz:"));
    let bakiye = Number(prompt("Bakiyenizi giriniz:"));
    let odenecektutar = dizel * yakitLitresi;
    function selam() {
        alert("Bakiyeniz yeterli degil!"
            + yenisatir + "Odenecek tutar:" + odenecektutar + yenisatir + "bakiyeniz:" + bakiye
            + yenisatir + "eksik kalan: " + (bakiye - odenecektutar))
    }
    if (yakitTipi == "1") {
        //Dizel
        
        if (odenecektutar < bakiye) {
            alert("Isleminiz tamamlanmistir.")
        }
        else {
            selam();
        }
    }
    else if (yakitTipi == "2") {
        //Benzin
       
        if (odenecektutar < bakiye) {
            alert("Isleminiz tamamlanmistir.")
        }
        else {
            selam();
        }

    }
    else if (yakitTipi == "3") {
        //Lpg
        
        if (odenecektutar < bakiye) {

            alert("Isleminiz tamamlanmistir.")
        }
        else {
            selam();
        }
    }

}
else {
    alert("Hatali Giris yaptiniz!")
}
*/



//Switch-Case Yapisi

/*               switch(deger)
                {
                    case 1:
                    //codeblock
                    break;
                
                    case 2:
                    //codeblock
                    break;
                
                    case 3:
                    //codeblock
                    break;
                
                    default:
                   //codeblock
                    break;
                
                }
*/

//Haftanin Gunleri Uygulamasi

/*

let sayi = Number(prompt("Lutfen 1 ile 7 arasinda sayi giriniz"));

switch (sayi) {
    case 1:
        alert("Bugun gunlerden pazartesi!")
        break;
    case 2:
        alert("Bugun gunlerden sali!")
        break;
    case 3:
        alert("Bugun gunlerden carsamba!")
        break;
    case 4:
        alert("Bugun gunlerden persembe!")
        break;
    case 5:
        alert("Bugun gunlerden cuma!")
        break;
    case 6:
        alert("Bugun gunlerden cumartesi!")
        break;
    case 7:
        alert("Bugun gunlerden pazar!")
        break;
    default:
        alert("Yanlis giris yaptiniz!")
    break;
}
 */


/* ATM UYGULAMASI
    1-Bakiye Goruntuleme
    2-Para Cekme
    3-Para Yatirma
    4-Cikis
*/

let yeniSatir = "\r\n";
let bakiye = 10000;
let metin = "1-Bakiye Goruntuleme" + yeniSatir + "2-Para Cekme" + yeniSatir
    + "3-Para Yatirma" + yeniSatir + "4-Cikis";

let secim = Number(prompt(metin));

switch (secim) {
    case 1:
        alert("Bakiyeniz:" + bakiye);
        break;

    case 2:
        let cekilecekTutar = Number(prompt("Cekmek istediginiz tutar:"));
        if (cekilecekTutar < bakiye) {
            alert("Kalan bakiyeniz:" + (bakiye - cekilecekTutar))
        }
        else {
            alert("Bakiyeniz yeterli degil!" + bakiye)
        }
        break;
    case 3:
        let yatirilanTutar = Number(prompt("Yatirmak istediginiz tutar:"));
        bakiye = bakiye + yatirilanTutar;
        alert("Yeni bakiyeniz:" + bakiye);
    case 4:
        alert("Cikis yaptiniz. Iyi gunler!")
        break;
    default:
        alert("Lutfen 1 ile 4 arasinda giris yapiniz!")
        break;
}
