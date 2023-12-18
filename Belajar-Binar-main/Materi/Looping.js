//1. "for" loop
//inisialisasi=> Untuk menentukan variabel awal perulangan
//kondisi=> Untuk menghentikan fungsi perulangan
//pengubah nilai=> ntuk mengaktifkan perulanga, baik untuk menambahkan atau mengurangi
for (inisialisasi; kondisi; perubahan nilai){
    // Oernyataan atau perintah yang diulang
}
//contoh penerapannya
for (let i = 1; i <= 5; i++){
    //mengepel lantai 1 sampai 5
    alert(i); 
}
//2. "while" loop
//
while (kondisi){
    //pernyataan atau perintah yang diulang
}
//Contoh Penerapan
let i = 1;
while (i <= 5){
    //mengepel lantai 1 sampai 5
    alert(i);
    i++;
}
// let i = 1 artinya kita mulai mengepel lantai 1. Kemudian melakukan pengecekan dilantai mana kita sedang mengepel.
// i++ => artinya, setiap selesai satu lantai, kita naik ke lantai berikutnya
// jika i++ dihilangkan, maka loop bakal berulang secara terus menerus (infinity loop)

// cara menanggulangi inifiniti loop
const lantaiBersih = true;
let lantaiGedung = 5;

while (lantaiBersih){
    alert('saya sudah mengepel lantai ${lantaiGedung}.');
    lantaiGedung--;
        if (lantaiGedung === 0){
        alert('semua lantai sudah bersih.');
        break;
        }
}

//3. "do while" loop
//looping akan dilakukan dulu sekali (do), lalu kondisinya akan di cek. kalau masih terpenuhi, maka loop akan dilanjutkan.
//contoh =>
do {
    //pernyataan atau perintah yang diulang
} while (kondisi);
//contoh penerapannya =>
let i = 1;
do {
    //mengepel lantai dari lantai 1 hingga 5
    alert(i);
    i++;
} while (i <= 5)
