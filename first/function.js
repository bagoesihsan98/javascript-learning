// Function menghitung jumlah kedua volume kubus

function jumlahVolumeDuaKubus(a,b)
{
    // Inisialisasi Variabel
    var volumeA;
    var volumeB;
    var total;

    // Pengisian
    volumeA = Math.pow(a,3);
    volumeB = Math.pow(b,3);
    total = volumeA + volumeB;

    return total;
}

var totalKubus = jumlahVolumeDuaKubus(10,15);
console.log(totalKubus);

// Variable Scope
var windowVariable = "Ini variabel window / global";

// Function Scope
function iniVariabel()
{
    var functionVariable = "Ini variable function";
    console.log(windowVariable);
}

iniVariabel();

// Rekursif

function faktorial(n)
{
    if(n === 0) return 1;
    console.log(n);
    return n * faktorial(n - 1);
}

console.log(faktorial(5));