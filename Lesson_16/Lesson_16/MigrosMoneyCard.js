

//Money Card Uygulamasi - O.O.P - Inheritance

//Once kullaniciya Karti var mi yok mu soralim?
let mesaj =
    `
    Migros'a hosgeldiniz!
    Money kartiniz var mi?
    Evet (OKAY)
    Hayir(CANCEL)

    `;


//Daha sonra urunler adinda dizimizi olusturup icerisine objeler halinde urunlerimizi
//ve ozelliklerini yerlestirelim.
const urunler = [
    {
        urunIsmi: "Sut",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi: "Dana Kiyma",
        fiyat: 220
    }

]

//Daha sonra mesajimizi kullanicimiza verdik confirm kullanarak
//ve toplam odenecekTutar icin degiskenimizi tanimladik.
let sonuc = confirm(mesaj);
let odenecekTutar;

//Eger confirm mesaj ciktiginda OKAY veya Tamam tusuna basilirsa
//adini soyadini aldik; sonuc true oldugu icin kartVarmi nesnemizde true oldu
//ve urunlerimizi getirdik.
//Odenecek Tutarida hesaplayabilmek adina MigrosBase Classimizdaki
//Algoritmamizla birlikte musteri bilgileriyle birlikte
//indirimli fiyatimizi alert methodu kullanarak ekrana yazdirdik.

//Eger sonuc==false ise musteri bilgileri almadik ve indirimsiz fiyati ekrana verdik.
if (sonuc){

    let isim = prompt("Adinizi Giriniz:");
    let soyisim = prompt("Soyisminizi Giriniz:");
    const musteri = new Musteri(isim, soyisim, sonuc, urunler); //Musteri.js
    odenecekTutar = musteri.hesapla();

    alert(
        `Musteri Bilgileri : ${isim} ${soyisim}
         Odenecek Tutar : ${odenecekTutar}

        `)
} else {

    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(
        `
         Odenecek Tutar : ${odenecekTutar}

        `)
}






























