//Membuat fungsi objek angkot
function Angkot(sopir,trayek,penumpang,kas)
{
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang)
    {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, ongkosAngkot)
    {
        if(this.penumpang.length == 0)
        {
            alert("Belum ada penumpang");
            return false;
        }else
        {
            for(var i = 0; i <= this.penumpang.length; i++)
            {
                if(this.penumpang[i] == namaPenumpang)
                {
                    this.penumpang[i] = undefined;
                    this.kas += ongkosAngkot;
                    return this.penumpang;
                }
                else if(i == this.penumpang.length)
                {
                    alert("Penumpang tidak ditemukan.");
                    return false;
                }
            }
        }
    }

}

var angkotUtama = new Angkot('Jundaidi',['Tawangalun','Arjasa'],[],0);