class Lingkaran {
    constructor (r){
        this.jarijari = r
    }
    luas = () => {
        return 3.14 * this.jarijari ** 2
    }
    keliling = () => {
        return 2 * 3.14 * this.jarijari
    }
}
class Kerucut extends Lingkaran {
    constructor (r,t,){
        super(r)
        this.tinggi = t
    }
    luasSelimut = () => {
        return 3.14 * this.jarijari * (Math.sqrt((this.jarijari ** 2) + (this.tinggi ** 2)))
    }
    luasPermukaan = () => {
        return (3.14 * this.jarijari ** 2) + (3.14 * this.jarijari * (Math.sqrt((this.jarijari ** 2) + (this.tinggi ** 2))))
    }
    volume = () => {
        return 1 / 3 * 3.14 * this.jarijari ** 2 * this.tinggi
    }
}
console.log ("--------Kerucut-------")
let palang = new Kerucut (10,40,41.2)
console.log("Luas Permukaaan Kerucut = " + palang.luasPermukaan())
console.log("Luas Selimut Kerucut = " + palang.luasSelimut())
console.log("Volume Kerucut= " + palang.volume())
