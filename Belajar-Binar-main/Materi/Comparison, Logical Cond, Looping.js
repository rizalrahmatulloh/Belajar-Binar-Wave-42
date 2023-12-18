// kode membandingkan nilai pada variabel umur yang di input dengan beberapa kondisi if, yang nantinya akan memperngaruhi variabel akses, apakah true/false
let akses ;
let age = prompt('kamu umur berapa?');

if (age > 18){
akses = true;
} else {
akses = false;
}

alert(akses);

//!(NOT)
//operator untuk mengembalikan nilai boolean yang bernilai sebaliknya dari
//operator tersebut.

let hujan = false;
// ! akan merubah nilai hujan dari false, ke true
if (!hujan) console.log('gausah pake payung');

let umur = 6

let masukSd = umur >= 7 ? true : false
console.log(masukSd)