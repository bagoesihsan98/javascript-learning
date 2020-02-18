var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++)
{
    if(noAngkot == 5)
    {
        console.log("Angkot No. " + noAngkot + " sedang lembur.");
    }else if(noAngkot == 7 || noAngkot == 10)
    {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
    }else if (noAngkot == 8)
    {
        console.log("Angkot No. " + noAngkot + " sedang cuti.");
    }else
    {
        console.log("Angkot No. " + noAngkot + " sedang beroperasi dengan baik.");
    }
}