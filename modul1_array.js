//array setting
let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer dan Jaringan"]

//array numeric
let tingkatan_kelas = [10,11,12]

//array object
let siswa = [
    //object pertama
    {
        nama : "Yaya", jurusan : "RPL"
    },
    //object kedua
    {
        nama : "Ying", jurusan : "TKJ"
    },
    //object ketiga
    {
        nama : "Gopal", jurusan : "RPL"
    }
]
//mengetahui jumlah data yang tersimpan di array
console.log ("jumlah elemen array jurusan = " + jurusan.length);
console.log ("jumlah elemen array tingkatan kelas = " + tingkatan_kelas.length);
console.log ("jumlah elemen array siswa = " + siswa.length);

// menambahkan / memasukan data pada array 
let kota =["Malang", "Surabaya", "Tulungagung"]

console.log("Isi Array Kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("------------------------------------");

//tambah data kota baru
kota.push("Banyuwangi")

console.log("Isi Array Kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

//penerapan penambahan object pada array object
let barang = [
    {nama : "Rinso", harga : 5000},
    {nama : "Moonlight", harga : 4000}
]
console.log("Isi Array Barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("------------------------------------");

//tambah data kota baru
barang.push(
    {nama : "Molto", harga : 1000}
)

console.log("Isi Array Barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

//menghapus data pada array
let nama = ["Ana", "Sulaiman", "Putri", "Gatot", "Adit", "Gico"]
console.log("Isi Array Nama");
console.log(nama);
console.log("Jumlah data = " + nama.length);

console.log("------------------------------------");

//Hapus data pada array
nama.splice(0,1)

console.log("Isi Array Nama");
console.log(nama);
console.log("Jumlah data = " + nama.length);

//menampilkan data pada array object
let siswa1 =[
    {nama_depan : "jack" , nama_belakang : "Ma"},
    {nama_depan : "johnny" , nama_belakang : "English"},
    {nama_depan : "john" , nama_belakang : "Cena"}
]
//menampilkan nama lengkap di array
siswa1.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)