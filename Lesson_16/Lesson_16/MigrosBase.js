

// Musteri JS klasi icin algoritma olusturma;

class MigrosBase {

    indirimOrani = 0.2; //indirimOrani

    //Migros.js de kullandigimiz constructor
    constructor(isim, soyisim, kartVarmi, urunler) {

        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla(){

        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {
            if (this.kartVarmi) {
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat-(urun.fiyat * this.indirimOrani);
                });
            } else {
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat);
                });
                
            }
        } else {
            alert("En az bir urun satin almalisiniz!")
        }

        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

}