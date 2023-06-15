

/*
 *MANTIKSAL OPERATORLER
 
    &&: ve
    ||: veya
    ! : degil
 */

let yas = 20;
let para = 3500;
let saglik = true;

//  && operatoru
console.log(yas > 18 && para > 3000 && saglik == true); //==> true
console.log(yas > 18 && para > 3000 && saglik == false); //==> false

//  || operatoru
console.log(yas > 18 && para > 3000 || saglik == true); //==> true
console.log(yas > 18 && para > 3500 || saglik == true); //==> true

// ! operatoru
console.log(!(5 > 3));
console.log(!(saglik));  //==> ZIT ozelligini almak icin kullanilir