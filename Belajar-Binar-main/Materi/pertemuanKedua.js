//bolean
let x = 1<2;
let y = (true || true) && (false || false)
console.log(y);

//&& kalau 1 salah itu salah semua
//|| kalau 1 benar itu benar semua

//if&else percabangan
var binar = 2;
// if > kalau true diajalanin kalau engga dia skip, kalau ada elseif dia cek lgi true/false kalau false dia next sampai mentok ke else (default value)

if (false){
    console.log("binar")
}else if(false){
    console.log("binar 2")
}
else{
    console.log("binar")
}

//switch
switch('1'){
    case "2" :
        console.log(2)
    case "1" :
        console.log(1)
        break;
    default :
    console.log("default")
}

//if&else gabung switch (rumit tidak make sense sulit dipahami)
switch('1'){
    case "2" :
        console.log(2)
    case "1" :
        console.log(1)
        if(true){
            console.log(1)
        }
        break;
    default :
    console.log("default")
}

//function
function halo (){
    console.log("halo, nama saya rizal")
}
halo ();
const halo2 = "nama saya rizal"
const halo3 = () => {
    return 'nama saya rizal'
}
console.log(halo3());