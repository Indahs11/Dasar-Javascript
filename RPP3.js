let tinggi_badan = 1.7, berat_badan = 90
let bmi = berat_badan / (tinggi_badan ** 2)
console.log("Interpretasi BMI = " + bmi)
if (bmi < 18.5){
    console.log("Kekurangan Berat Badan")
}else if (bmi <= 24.9 && bmi >=18.5){
    console.log("Normal (Ideal)")
}else if (bmi <= 29.9 && bmi >=25.0){
    console.log("Kelebihan Berat Badan")
}else {
    console.log("Kegemukan")
}