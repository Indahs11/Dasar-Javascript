var panjang = 20.5;
var lebar = 30;
var harga = 1500000;
var ppn = 15/100;
// menghitung harga
var hargaAsli = panjang * lebar * harga;
// menghitung harga ppn
var hargappn = hargaAsli * ppn;
// menghitung Total
var hargaTotal = hargaAsli + hargappn;

console.log("Nominal Yang harus dibayar oleh pak Arman adalah Rp." + hargaTotal);


