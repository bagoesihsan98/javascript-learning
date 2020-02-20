// Menangkap pilihan dari pemain
var pilihanPemain = prompt("Silahkan pilih : Gajah, Semut, atau Orang \n Besar Kecil huruf diperhatikan");

// Menangkap pilihan dari computer
// Membuat bilangan random
var pilihanComp = Math.random();

// Menentukan pilihan computer berdasarkan angka random
if(pilihanComp < 0.34)
{
    pilihanComp = "Gajah";
}else if(pilihanComp >= 0.34 && pilihanComp < 0.66)
{
    pilihanComp = "Semut";
}else
{
    pilihanComp = "Orang";
}
// Menentukan aturan main
var resultMain = '';
var cobaLagi = true;

while(cobaLagi)
{
    if( pilihanPemain === pilihanComp )
    {
        resultMain = 'Draw';
    }else if(pilihanPemain == "Gajah")
    {
        // Menentukan hasil dari pilihan computer
        if(pilihanComp == "Orang")
        {
            resultMain = "Win";
        }else if(pilihanComp == "Semut")
        {
            resultMain = "Lose";
        }
    }else if(pilihanPemain == "Orang")
    {
        // Menentukan hasil dari pilihan computer
        if(pilihanComp == "Semut")
        {
            resultMain = "Win";
        }else if(pilihanComp == "Gajah")
        {
            resultMain = "Lose";
        }
    }else if(pilihanPemain == "Semut")
    {
        // Menentukan hasil dari pilihan computer
        if(pilihanComp == "Gajah")
        {
            resultMain = "Win";
        }else if(pilihanComp == "Orang")
        {
            resultMain = "Lose";
        }
    }else
    {
        resultMain = "Error";
    }

    alert("Kamu memilih " + pilihanPemain + " dan komputer memilih " + pilihanComp +"\n Hasil : Kamu " + resultMain);

    cobaLagi = confirm("Ingin coba lagi ?");

}
// Tampilkan Hasilnya
alert("Terimakasih sudah bermain game ini");