//tipe data non primitif (aray dan object)  => Penyimpanan beberapa nilai pada variabel
//Array => data yang penyimpan kumpulan tipe data primitif\
//Index dalam array merupakan angka yang mulai dari 0 (0, 1, 2, 3, 4, 5)

//Syntax untuk mengambil value dari suatu data di dalam array
const namaVariabel = [index0, index1, index2, index3, ...];
const ambilIndex = namaVariabel[nomor index];
//untuk menampilkan
console.log(ambilIndex);

//Array: contoh penggunaannya:
const colors = ["black", "red", "blue", "yellow", "green"];
const indexOne = colors[0];
console.log(indexOne);
//output: black

//Cara mengubah data yang ada di dalam array.
//Misal, ingin mengganti value pada array colors index nomor 1, dari "red" menjadi "purple".
//caranya, tuliskan value yang ingin dimasukan, yaitu :
//colors[1] = "purple";

const colors = ["black", "red", "blue", "yellow", "green"];
colors[1] = "purple";
console.log(colors);

//Metode untuk mengotak-atik data didalam Array
//Metode: Push, pop, shift, unshift, forEach, filter, map, concat.

//1. Push => Menambahkan item yang disimpan ke dalam index terakhir di Array
const fruits = ["Apple", "Orange", "Durian"]
fruits.push('Lemon'); 
console.log(fruits); // output ['Apple', 'Orange', 'Durian','Lemon']
// ex: fruit.push("Lemon")

//2. Pop => Mengeluarkan item yang terakhir di Array
const fruits = ["Apple", "Orange", "Durian"]
fruits.pop(); 
console.log(fruits); //output: ["Apple", "Orange"]

//3. shift => Mengeluarkan Item pertama di dalam Array.
const fruits = ["Apple", "Orange", "Durian"]
fruits.shift(); 
console.log(fruits); //output: ["Orange", "Druian"]

//4. Unshift => Menambahkan item di index pertama di dalam Array (Kebalikan dari Shift).
const fruits = ["Apple", "Orange", "Durian"]
fruits.unshift("Strawberry"); 
console.log(fruits); //output: ["Strawberry", "Apple", "Orange", "Durian"]

//5. forEach => dipakai sebagai cara singkat melakukan perulangan (looping) di dalam Array
const fruits = ["Apple", "Strawberry", "Durian"]
fruits.forEach(function(item)) {
    console.log(item);
}
//Dengan method fruits.forEach() dan syntax console.log(item) di dalam blok kode fungsi, terjadi pengulangan pencetakan item Array ke dalam konsool hingga semuanya tercetak.

//Apple
//Strawberry
//Durian

//6. filter => untuk melakukan penyaringan dalam suatu Array.
//kode dibawah menyisir setiap angka dalam array lalu hanya menampilkan angka yang lebih besar dari 9 saja
const numbers = [1, 2, 3, 10, 9, 2, 2, 1, 4, 5]
const filteredItems = numbers.filter(function(item) {
    return item >= 9
})
console.log(filteredItems);
//output: [9. 10]

//7. Map => DIpakai untuk memanipulasi isi dalam Array tanpa mengubah Array aslinya.
//Method numbers.map() menganmbil setiap angka dalam array "numbers" untuk dipetakan ke dalam array "mutatedItems".
const numbers = [1, 2, 3, 4, 5]
const mutatedItems = numbers.map(function(i) {
    return i * 2
})
console.log(mutatedItems);
//Output :[2, 4, 6, 8, 10]

//8. concat => dipakai untuk menggabungkan beberapa Array menjadi satu Array.
//kode dibawah menggunakan mammals.concat(birds) untuk menggabungkan array mammals dan birds.
const mammals = ["cats", "dogs"]
const birds = ["eagles", "penguins"]

const animals = mammals.concat(birds);
console.log(animals);
//output: ["cats", "dogs", "eagles", "penguins"]

//9. Manipulasi data di array menggunakan for loop
const colors = ["black", "red", "blue", "yellow", "green"];

const brightColors = (param) => {
    let newColors = [];
    for (let i = 0; i < param.length; i++) {
        console.log(param[i]);
        if (param[i] == "red" || param[i] == "blue" ||
        param[i] == "yellow" || param[i] == "green"
        ) {
        newColors.push(param[i]);
        } else {newColors.push()}
    }
    return newColors;
};
console.log(brightColors(colors));
//['red', 'blue', 'yellow', 'green']

//OBJECT => merupakan tipe data yang meyimpan koleksi tipe data yang lain.
//Syntax dasar sebuah object seperti dibawah:
const object = {
    //property
key: value
}

const object = {
    hello: "world" // "hello" is a key and "world" is a value.
}
// Object bisa memasukan tipe data apapun sebagai value, baik itu primitif, Array atau object itu sendiri. Dengan syarat data-data tersebut memiliki key atau propety.
//Contoh:
const myInfo = {
    name:"Rizal",
    age: 26,
    hobbies: ["musik", "workout"],
    family: {
        father: "Rahman",
        mother: "siti",
        siblings: ["hendra", "indra", "wildan"]
    }
}

//Cara membuat Object: Selain dengan cara literal, membuat atau mendeklarasikan Object bisa pakai cara berikut:
//Metode: Object constructor, constructor function, object assign, ES6 Class.

//1. Object constructor => membuat object dengan constructor bawaan js "Object()".
//untuk menambahkan value, dapat menggunakan "." dot notation. 
const student = new Object();

student.name = "Rizal";
student.age = 27;

console.log(student);
//{name: "budi, age; 30"}

//2. Constructor function => merupakan function biasa yang ertinda sebagai constructor dengan me-return object apabila dipanggil menggunakan "new".
//penggunaan function sebagai constructor ini menggunakan kapital pada huruf pertama, seperti User.
function User(name, age) {
    (this.name = name), (this.age = age);
}

const student = new User("rizal", 27);
console.log(student);
//{name: "rizal", age: 27}

//3. Object assign => bisa menggabungkan dua atau lebih Object menjadi satu.
//kode 1: menggunakan object.assign untuk langsung membuat object bernama student.
const student = Object.assign({ name: "Rizal", age: "27"});
console.log(student);
//{name: 'Rizal', age: '27'}
//kode 2: menggunakan object.assign untuk menggabungkan dua object yaitu info1 dan info2
const info1 = {
    name: "Rizal",
};
const info2 = {
    age: 27,
};

const student = Object.assign({}, info1, info2);
console.log(student);
//{name:'Rizal', age:27}


//4. ES6 Class => Mirip constructor function, bedanya disini dibuat dengan menuliskan "class".
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const newStudent = new Student("Rizal", 27);
console.log(newStudent);
//{ name: 'Rizal', age: 27 }

// Mengambil key atau value dari sebuah Object bisa pakai cara for in, for of, dan object.entries, dan Object.key/foreach.
//Dalam penggunaannya, masing2 cara ini bakal menggunakan: dot notation ".", bracket notation "[]", dan ES6 Destruction "const{}"
const myInfo = {
    name:"Rizal",
    age: 26,
    hobbies: ["musik", "workout"],
    family: {
        father: "Rahman",
        mother: "siti",
        siblings: ["hendra", "indra", "wildan"],
    },
};
const father = myInfo.family.father; //dot notation
const mother = myInfo["family"]["mother"]; //bracket notation
const {siblings} = myInfo.family; //destructing

console.log(father);
console.log(mother);
console.log({siblings});