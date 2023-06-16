


// Object Oriented Programming

/*JS nesne tabanli programlamaya yeni yeni dahil olmustur
  Cok derin nesne tabanli programlama icin C# C++ Java gibi programlar genellikle
  tercih edilir
  Ama biz genede asagidaki blok kodlariyla birlikte JS icinde OOP kurabiliriz.
*/
class Insan{

    constructor(isim, soyisim, yas, maas) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }


    bilgileriGoster() {
        console.log(`
            Isim: ${this.isim}
            Soyisim: ${this.soyisim}
            Yas: ${this.yas}
            Maas: ${this.maas}
        `)
    }
}

const insan1 = new Insan("Onur", "Totos", 30, 10000);
const insan2 = new Insan("Ayse", "Cinar", 24, 15000);

insan1.bilgileriGoster();
insan2.bilgileriGoster();


//STATIK Nedir?

class Matematik {

    topla(a, b) {
        console.log(a + b);
    }
    static cikar(a, b) {
        console.log(a-b);
    }
    carp(a, b) {
        console.log(a * b);
    }
    bol(a, b) {
        console.log(a/b);
    }
}

//Statik olmadigi zaman nesne uzerinden erisiriz;
const mat = new Matematik();
mat.topla(10, 8);

//Statik oldugu zaman CLASS ismi uzerinden erisiriz;
Matematik.cikar(10, 8);



//Inheritance (Miras Alma)

class Person {

    firstname = "Onur";

    write() {
        console.log(this.firstname);
    }
}

class Student extends Person{
    firstname = "Fener";
    write() {
        console.log("Student Write", this.firstname);
        super.write();
    }
}

const student1 = new Student();
student1.write();

//const person = new Person();
//person.write();



//this-super-super()



class Person1 {

    constructor(firstname1) {
        this.firstname1 = firstname1;
    }

    write() {
        console.log(this);
    }
}

const person1 = new Person1("onuRt");
person1.write();