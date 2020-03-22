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

// Function Declaration & Function Expression

// Function Declaration
function belajarFunctionSatu()
{
    console.log("Ini Fungsi Deklarasi");
}

// Function Expression
var belajarFunctionDua = function()
{
    console.log("Ini Fungsi Ekspresi");
}

belajarFunctionSatu();
belajarFunctionDua();

// Array
// 1. Menambah isi array
var latArray = [];

latArray[0] = "Bagoes Ihsan Taufiqurrahman";
latArray[1] = "Ahmad Daifullah";
latArray[2] = "Ummalatul Kamilah";
latArray[3] = "Dyta Shofia Amelia";
latArray[4] = "Dinda Ayu Nafisyah";

console.log(latArray);

// 2. Menghapus isi array
latArray[0] = undefined;
console.log(latArray);

// 3. Menampilkan isi array
for(var i = 0; i < latArray.length; i++)
{
    console.log("Mahasiswa ke " + (i + 1) + " adalah " + latArray[i]);
}

// Method - Method pada Array
// 1. Join
var newArray = ["Bagoes Ihsan T", "Ahmad Daifullah", "Ummalatul Kamilah"];
console.log(newArray.join(" - "));

// 2. Push dan Pop
console.log(newArray.pop());
console.log(newArray.join(" - "));
console.log(newArray.push("Ummalatul Kamilah","Dyta Shofia Amelia","Dinda Ayu nafisyah"));
console.log(newArray.join(" - "));

// 3. Unshift dan Shift
console.log(newArray.unshift("Dodhy Kurnia Dewanto"));
console.log(newArray.join(" - "));
console.log(newArray.shift());
console.log(newArray.join(" - "));

// 4. Splice
// Rumus
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
newArray.splice(2,3, "Muhammad Naufal Ferdiansyah Hadju", "Maulana Sultan Alrian Hierarchiraya", "Aufa Nafis Hibatulah");
console.log(newArray.join(" - "));

// 5. Slice
// slice(awal,akhir)
var awalArray = newArray;
var slicedArray = awalArray.slice(2,awalArray.length);

console.log(awalArray.join(" - "));
console.log(slicedArray.join(" - "));

// 6. forEach
newArray.forEach(function(e)
{
    console.log(e);
});

// 7. Map
var newMappedArray = newArray.map(function(e)
{
    return e + " belum belajar.";
});

console.log(newMappedArray.join(" - "));

// 8. Sort
console.log(newArray.sort());
console.log(newArray.join(" - "));

// 9. Filter
var variousArray = ["Bagoes Ihsan Taufiqurrahman",20,19,18,67,16,10,12,55];
var hasilFilter = variousArray.filter(function(e)
{
    if(e == "Bagoes Ihsan Taufiqurrahman")
    {
        return true;
    }else
    {
        return false;
    }
});
console.log(hasilFilter);

// 10. Find
var findArray = [1,2,3,4,5,6,7,8,9];
var hasilFind = findArray.find(function(e){
    return e == 9;
});
console.log(hasilFind);