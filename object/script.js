// Membuat Object

var mahasiswa = {
    nama : "Bagoes Ihsan Taufiqurrahman",
    nim : "E41181277",
    universitas : "Politeknik Negeri Jember",
    indeksPrestasi : [3.90,3.85,3.96]
};

// Object Literal

var driver = {
    nama : 'Siswanto Suryapurwo',
    notelp : '0823331588636',
    alamat : 'Jln. Simatupang 58'
};

//Function Declaration
function buatObjectMahasiswa(nama,nim,universitas)
{
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.universitas = universitas;
    return mhs;
}

//Menggunakan contsructor
function Mahasiswa(nama,nim,universitas)
{
    this.nama = nama;
    this.nim = nim;
    this.universitas = universitas;
}