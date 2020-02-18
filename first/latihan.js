var angka = 0;
var jmlhAngka = prompt("Masukkan jumlah angka");

// Pengulangan dan Pengkondisian

if(isNaN(jmlhAngka / 1))
{
    console.log("Ini bukan angka!");
}else
{
    for(angka; angka <= jmlhAngka; angka++)
    {

        // Pengkondisian
        if(angka % 2 == 0)
        {
            console.log("Angka " + angka + " adalah bilangan genap.");
        }else if(angka % 1 == 0)
        {
            console.log("Angka " + angka + " adalah bilangan ganjil.");
        }else
        {
            console.log("Ini bukan angka!");
        }

    }
}