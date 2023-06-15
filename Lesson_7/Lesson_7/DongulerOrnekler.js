

/* Carpim Tablosu */

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i * j))
    }
    console.log("-------------------")
}

/*
   Armstrong sayisi nedir?

   Bir sayinin rakamlarinin; ayri ayri kupleri alinip, daha sonra toplama islemi yapildiginda sonuc
   ayni sayiya esit ise bu bir armstrong sayisidir.
   ornek
   abc = a*a*a + b*b*b + c*c*c;
   eger ki bu durum dogru ise abc sayisi armstrong sayisidir.

 */


for (let j = 0; j < 10; j++) {
    let sayi = prompt("Lutfen sayi giriniz:");
    let toplam = 0;

    for (let i = 0; i < sayi.length; i++) {
        let rakam = sayi.charAt(i);
        toplam += rakam ** 2 * rakam;
    }

    if (Number(sayi) == toplam) {
        alert("Bu bir armstrong sayisidir!" + "Girilen Sayi:" + sayi)
    }
    else {
        alert("Bu bir armstrong sayisi degildir! " + "Girilen Sayi:" + sayi)
    }
}
alert("Giris hakkiniz bitmistir.")