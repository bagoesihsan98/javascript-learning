var statusAngkot = true;
var nomorAngkot = 1;

while(statusAngkot)
{
    if(nomorAngkot <= 10)
    {
        console.log("Angkot No. " + nomorAngkot + " beroperasi dengan baik.");
        nomorAngkot++;
        statusAngkot = confirm("Apakah akan menjalankan angkot lagi ?");
    }else
    {
        console.log("Mohon maaf, jumlah armada angkot hanya sebanyak 10 buah.")
        statusAngkot = false;
    }
}