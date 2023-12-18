//=> 1. Asynchronous
//=> 2. Synchronous
//=> 3. Race Condition
//=> 4. Callback, async/await
//=> 5. setTimeout
//=> 6. setInterval
//=> 7. Callback didalam Callback (function yang dipanggil oleh function lain)
//=> 8. Promise
//=> 9. Asyn/await

//1. Asynchronous => merupakan proses yang ditugaskan ke suatu proses lain tanpa menunggu proses tersebut selesai dijalankan. hal ini disebut non-blocking.
//Pengeksekusian proses tersebut akan diserahkan sepenuhnya ke core dan processor, dan thread-nya tidak akan menunggu proses tersebut selesai.
//2. Synchronous => outputnya berurutan alias sesuai urutan waktu, jadi eksekusi kodenya dilakukan dengan blocking atau menunggu setelah pperintah sebelumnya selesai dieksekusi.

//1. Asynchronous Process
console.log("Hello Binarian!");
//output kode akan ditunda selama 100 milliseconds
setTimeout(() => {
    console.log("JavaScript")}, 100)
    console.log("Developer");
//Output : Hello Binarian! Developer JavaScript

//2. Synchronous Process
console.log("Hello Binarian!");
console.log("JavaScript");
console.log("Developer");
//output: Hello Binarian! JavaScript Developer

//Pada saat aynchronous diterapkan ada kemungkinan terjadi "Race condition"
//3. Race condition => kondisi yang terjadi ketika suatu perintah yang bergantung pada output eksekusi asynchronous sebelumnya.
//Dengan kata lain kejar-kejaran antar perintah.

//3. Contoh Race Condition: (Solusinya adalah (4. Callback))
console.log("hello");
let user = requestAjax(); // dieksekusi secara asynchronous
displayUser(user);

//4. Callback => adalah function yang dipanggil oleh function lain.
//contoh penggunaan callback bisa ditemukan ketika implementasi suatu event seperti event click, focus, keydown,, keypress, dan sebagainya.
//Callback digunakan karena suatu function yang berjalan secara asynchronous tidak akan langsung bisa menjalankan fungsinya.

//*Contoh tanpa callback:
function kuadratAsync(x) {
    setTimeout(() => x * x, 100);
}
console.log(kuadratAsync(5));
//output: undefined

//*Contoh dengan callback:
function kuadratAsync(x, callback) {
    setTimeout(() => callback(x * x), 100);
}
kuadratAsync(5, console.log);
//output: 25

//5. setTimeout => adalah metode yang dapat digunakan untuk mengatur waktu kapan sebuah kode akan dieksekusi.
//selain setTimeout, juga ada setInterval.

//setTimeout digunakan untuk memberi delay pada proses yang sedang dijalankan.
//contoh:
console.log("Hello Binarian!");
//output kode akan ditunda selama 100 milliseconds
setTimeout(() => {
    console.log("JavaScript")}, 100)
    console.log("Developer");
//Output : Hello Binarian! Developer JavaScript

//6. setInterval => digunakan untuk menjalankan proses berulang kali berdasarkan intervalnya.
//contoh dibawah ini kode setInterval 100, artinya perintah akan dijalankan dalam interval setiap 100 milisecond.
let a = 0
const iniInterval = setInterval(() => {
    console.log(`${++a} kali jalan`)
    if (a === 10) clearInterval(iniInterval)
}, 100);
console.log("Apakah aku jalan duluan?")
//output: apakah aku jalan duluan ? 1. kali jalan 2 kali jalan ... 10 kali jalan.

//*setTimeout, hanya akan mengeksekusi function sebanyak 1 kali
//*setInterval, mengeksekusi function secara berulang pada setiap waktu yang ditentukan.

//7. Callback lebih dari satu (callback didalam callback)
//Contoh:
const download = (url, callback) => {
    console.log(`Downloading from ${url}....`);

    callback();
};

const url1 = 'https;//branchio.site/download';
const url2 = 'https;//trex.site/download';
const url3 = 'https;//stego.site/download';

download(url1, function() {
    download(url2, function () {
        download(url3, function () {
            console.log('Download complete!');
        });
    });
});
//Output: 
//Downloading from https;//branchio.site/download....
//Downloading from https;//trex.site/download....
//Downloading from https;//stego.site/download....
//Download complete!

//8. Promise => adalah solusi jika terjadinya callback hell(kondisi dimana terlalu banyak callback sehinggi memunculkan callback hell).
//Promise => adalah suatu object di dalam JavaScript(EcmaScript6) yang pendinisiannya dilakukan dengan operator "new" diikuti nama class "Promise".
new Promise
//Setiap promise nantinya akan diproses dengan status "pending", kemudian hasilnya akan berisi dua kemungkinan
//Hasilnya antara : resolve atau reject
//Promise ini semacam error checking (memeriksa kondisi ketika kita melakukan request Asynchronous)
//Contoh Promise:
const myPromise = new Promise(resolve =>
resolve('Hello World'))

myPromise.then(result => {
console.log(result);
})
//Output: Hello world
//*Promise digunakan agar kode lebih mudah dibaca dan manajemen error yang lebih baik.

//Contoh Function dengan promise yang akan melakukan rejection atau resolve, misal saal kita memasukan password pada akun google milik kita.
function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        console.log("Password:", password)
        if (password !== "123456")
            return reject("Wrong Password!")

        resolve("Password is Correct!")
    })
}

//Outputnya akan resolve: password is correct!
isPasswordCorrect("123456")
.then(resolve => console.log(resolve))
.catch(reject => console.error(reject))
//Outputnya akan reject: Wrong Password
isPasswordCorrect("123455")
.then(resolve => console.log(resolve))
.catch(reject => console.error(reject))

//9. Async-Await => Teknik alternatif untuk menangani callback hell
//Dengan Asyn-await, bisa menjalankan asynchronous tanpa .then dan .catch spserti dalam teknik promise.
//Dengan cara Asyn-wait tinggal menambahkan operator await di depan promise.
//Contoh:
let punyaBuku = false
// Function beliBuku
const beliBuku = () => new Promise(resolve => {
    setTimeout(()=> {
        punyaBuku = true
        resolve()
}, 1000)
})
//Funstion gambar meminta judul sebagai parameter
//Mengembalikan Promise
const gambar = judul => {
    if (!punyaBuku) return Promise.reject("Gak Punya buku")
    return Promise.resolve({
        id: Date.now(), title: judul, createdAt: Date()
    })
}
//Function utama akan menjalankan function yang lain.
async function main(){
    if (!punyaBuku) await beliBuku()
    const hasilGambar = await gambar("Doraemon")
    console.log(hasilGambar)
}
main()
//Output
//{
//  id: 1689791913829,
//  title: 'Doraemon',
//  createdAt: 'Thu Jul 20 2023 01:38:33 GMT+0700 (Western Indonesia Time)'
//}

//*Cara mengatasi error karena perintah await suatuPromise()
//*Menggunakan kode try{} catch(err){} block seperti dibawah ini:
async function main() {
    try {
        //if (!punyaBuku) await beliBuku()
        const hasilGambar = await gambar("Doraemon")
        console.log(hasilGambar)
    }
    catch(err) {
        console.log("Beli buku dulu dong!")
    }
}
//output: Beli buku dulu dong!