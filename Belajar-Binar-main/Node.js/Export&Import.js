//1. Export => statement yang dipakai untuk mengekspos suatu variabel atau fungsi yang berada di suatu file agar dapat diakses oleh file lain.

//ini file segitiga.js
function luasSegitiga(alas, tinggi) {
    return alas * tinggi / 2
}
module.exports = luasSegitiga
//contoh diatas misal, buat file baru yang bernama segitiga.js.
//didalam file tsb, kita buat function bernama luasSegitiga. luasSegitiga ini disebut module, yang nantinya bakal kita export.
//Untuk mengeksport suatu variabel atau fungsi, gunakan statement module.exports kemudian diikuti dengan nama variabel atau fungnsi yang mau kita export.

//2.Import => statement yang dipakai untuk mengambil atau memakai suatu variabel atau fungsi yang berada difile atau module lain.
//misal, ingin meng-import file yang punya function buat menghitung luas segitiga
//maka digunakan metode require() seperti pada kode dibawah:

//index.js
//disini akan meng-import module bernama `os`
const os = require('os')
const luasSegitiga = require('./segitiga.js')

console.log('Free Memory:', os.freeman())

console.log(luasSegitiga(3, 4))