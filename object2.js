var jualMobil ={
    iklan:function(){
        document.write(`Bu, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`);
    }
};

var saya = Object.create(jualMobil);

saya.nama = "Hafifi"
saya.merek = "Avanza"
saya.tahun = 2017

saya.iklan();