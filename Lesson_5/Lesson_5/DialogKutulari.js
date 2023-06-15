

/*
                                        /   /console.log(window);
     -Dialog Kutulari

    **Bunlar birer fonksiyondur
     *alert
     *prompt
     *confirm
*/




//Sayfanin ustunde onay almak veya mesaj vermek gibi islemler icin kullanilir
alert("Lutfen OK butonuna basiniz!");


//Kullanicidan deger alabilmek icin kullanilir. Ve her zaman string doner.
//prompt("Isminizi Giriniz:");
let isim = prompt("Isminizi Giriniz:");
console.log(isim);
let yas = prompt("Yasinizi Giriniz:");
console.log(yas);


//Boolean dondurur.
let sonuc = confirm("Silmek istediginizi emin misiniz?");
console.log(sonuc); // Kullanici OK a basarsa True; Cancel derse False.

