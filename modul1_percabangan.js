let tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
}

// bentuk if else
let tahun1 = 2020
if (tahun1 % 4 == 0) {
    console.log(tahun1 + " adalah tahun kabisat");
} else {
    console.log(tahun1 + " bukan tahun kabisat");
}

// bentuk if else if else
let nilai = 80
if (nilai > 80){
    console.log("Excelent");
}else if(nilai<= 80 && nilai > 70){
    console.log("Good")
}else if(nilai<= 70 && nilai > 60){
    console.log("Not Bad")
}else{
    console.log("So Bad")
}