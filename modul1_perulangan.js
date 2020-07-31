for (let index = 1; index <= 10; index++){
    console.log("Perulangan ke-" + index)
}

//for atau In Loop
let siswa = {
    nama : "suma Seta",
    gender : "Wanita",
    jurusan : "RPL",
    usia : "300",
    alamat : "Ngantru"
}
for (key in siswa) {
    console.log(key);
}

// For atau Of Loop
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus dur",
"Megawati", "SBY", "Jokowi" ]
for (pres of presiden) {
    console.log(pres)
} 

// While Loop
let laptop = ["Lenovo", "HP", "Acer", "Asus"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}

// Do While Loop
let gadget = ["Xiaomi", "Samsung" , "Motorola", "Sony Ericson"]
let a = 0;
do{
    console.log(gadget[a])
    a++
}while(gadget[a])