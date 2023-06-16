

let urun1 = {
    isim: "Acer Swift",
    kategori: "Teknoloji",
    fiyat:7000
}
let urun2 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: 17000
}
let urun3 = {
    isim: "Acer Gaming",
    kategori: "Teknoloji",
    fiyat: 14000
}
let urun4 = {
    isim: "Lenovo V15",
    kategori: "Teknoloji",
    fiyat: 11000
}
let urun5 = {
    isim: "Lenovo V14",
    kategori: "Teknoloji",
    fiyat: 12000
}
let urun6 = {
    isim: "Lenovo V13",
    kategori: "Teknoloji",
    fiyat: 14000
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6]
/*console.log(urunler);*/

let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir urun ismi giriniz:");

function getUrunler(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun)
        }
      
    });
    
}

function printUrunler(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------");
    });
}

getUrunler(urunler);
printUrunler(filtreliUrunler);