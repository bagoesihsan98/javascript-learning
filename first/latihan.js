var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++)
{
    if(noAngkot <= angkotBeroperasi)
    {
        console.log("Angkot dengan No. " + noAngkot + " beroperasi dengan baik.");
    }else
    {
        console.log("Angkot dengan No. " + noAngkot + " sedang tidak beroperasi.");
    }
}