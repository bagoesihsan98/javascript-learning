var nama = prompt("Masukkan nama anda : ");
var konfirmasi = confirm("Apakah anda yakin ?");

if(konfirmasi === true)
{
    alert("Nama kamu adalah, " + nama);
}else
{
    alert("Cyka Blyat");
}