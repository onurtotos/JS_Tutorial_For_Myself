

// ! Var - Let - Const

/*

    var/let/const degiskenIsmi = degiskenDegeri;

    var a=10;   --ram bellekte cok fazla yer kaplar.
    
    let a=10;  
                    >>>Let ve Const block scope ozelligine sahiptir.
    const a=10;

*/

function selamVer() {
    var selam = "Herkese Selamlar"; // function scope
    if (true) {
        var b = 10;         
    }
    if (true) {
        let c = 10;   //block scope
        console.log(c);
    }
    if (true) {
        const d = 10;  //block scope
        console.log(d);
    }
    console.log(b);
    console.log(selam);
}

selamVer();


//var degiskeni ile istedigimiz kadar deger ile ayni degiskenIsmini kullanarak tanimlayabiliriz.
//Fakat let ve const kullanirsak, ayni degisken ismi kullanarak iki kere tanimlama yapamayiz.

//let kullanarak degisken tanimlaadiktan sonra degiskenin degerini degistirebiliriz!!
let aBc = 15;
aBc = 25;
console.log(aBc);

//Const= Constant(Sabit) ==> degismeyecek degerler icin kullanilan tanimlama tipidir!!
dEf = 25;
console.log(dEf);


//object olusturma
const user = {

    username: "onur",
    password: "1234"
}

//object olusturduktan sonra asagidaki gibi degiskenlerin degerlerini degistirebiliriz.
user.username = "onurtotos";
console.log(user);