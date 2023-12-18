//substring >

let text = "Hellow World";
let result = text.substring(0, 5);
console.log(result);
// Hello

parseInt("123");

let z = 123;
z.toString()
// => '123'
String(z)     // => '123'

//Bolean >

let apakahLebihDariDUa = 1 > 2;
console.log(apakahLebihDariDUa); //false

let a = 1;
let b = 1;
let apakahASamaDenganB = a == b;
console.log(apakahASamaDenganB);
//true

//null >

let bukuA = null;
console.log(bukuA);
// null

//Tipe data non-primitif = object && array

//object merupakan sebuah tipe data yang menyimpan koleksi tipe data yang lain.
const object = {
    hello: "World"
} 
//object

//array adalah data yang menyimpan kumpulan tipe data primitif.

//untuk check tipe data >
let pesan = "Hello World";
console.log(typeof pesan);
//string
console.log(typeof 10);
//number
console.log(typeof(true));
//boolean

let age = (2022 - 1991);
console.log(age);
//31

const myAge = 60
const yourAge = 45
const ourAge = myAge + yourAge;
console.log(ourAge);
console.log(myAge*yourAge);
console.log(ourAge/myAge);
console.log(yourAge+myAge);
console.log(myAge-yourAge);
console.log(myAge%yourAge);


//new Date () method (mengidentifikasi waktu)
{
let a = new Date ()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getMilliseconds());
}

//Function > sebuah blok kode yang membungkus suatu proses, dengan tujuan agar kode yang sama enggak perlu ditulis berulang kali.
// 3 komponen function, yaitu parameter(), prosedur{}, dan return value (hasil).
// contoh : funtion nama(parameter1, parameter2, parameter3) {  
    //kode yang akan dieksekusi
//}
// return untuk memberikan atau mengembalikan hasil dari function.
function diskonBirthday(x) {
    let birthdaySale = (x * 30)/100
    return birthdaySale
}
let sale = diskonBirthday(20000)
console.log(sale) //output: 6000
//jika prosedur function yang kita input string maka wajib memasukan nilai dengan tipe data yang sama atau sting juga.
//function digunakan agar kode yang sama bisa dipakai secara berulang-ulang
//ada dua tipe function 1. function declaration, 2 function expression
//1.function declaration (harus dimulai dengan keyword function)
function kuadrat (x){return x*x}
//2. function expression (disimpan kedalam suatu variabel)
var myFunction = function() {
    //kode yang akan dijalankan
}

//Arrow function (tanpa keyword return)

//Currying > dipakai pada function yang memiliki lebih dari 1 parameter
//gunanya agar function tsb bisa dipanggil dengan 1 parameter saja contoh : f (a,b,c) dapat dipanggil sebagai f (a) (b) (c)
function hitungVolume(p) {
        return function (l) {
            return function (t) {
                return p * l * t;
            }
        }
    }
    console.log(hitungVolume(4)(5)(6));