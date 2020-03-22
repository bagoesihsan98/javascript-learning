// Membuat aplikasi manajemen penumpang angkot menggunakan JavaScript

// Rules
// 1. Ada penumpang naik *tambahPenumpang()
// 2. Ada penumpang turun *hapusPenumpang()
// 3. Bagian tambahPenumpang()
    // 3.1. 2 Parameter :
            // 1. namaPenumpang
            // 2. array penumpang
    // 3.2. Jika angkot kosong, penumpang duduk di kursi pertama
    // 3.3. Penumpang berikutnya duduk di kursi selanjutnya secara berurutan
    // 3.4. Jika ada kursi kosong ( karena penumpang turun ), penumpang naik berikutnya akan duduk di kursi kosong tadi
    // 3.5. Asumsi kursi tidak akan penuh ( agar dinamis )
    // 3.6. Nama penumpang dilarang sama ketika naik, karena keterbatasan informasi
// 4. Bagian hapusPenumpang
    // 4.1. 2 Parameter :
            // 1. namaPenumpang
            // 2. arrayPenumpang
    // 4.2. Jika angkot kosong, tidak ada penumpang yang diturunkan
    // 4.3. Jika nama penumpang yang diminta turun tidak ada, kembalikan pesan error
    // 4.4. Jika nama penumpang yang diminta turun ada, kosongkan kursi

var penumpang = [];

var tambahPenumpang = function(namaPenumpang, arrPenumpang){

    // Jika Penumpang Kosong
    if(arrPenumpang.length == 0)
    {
        // Tambah penumpang di awal array
        arrPenumpang.push(namaPenumpang);
        // Kembalikan isi array dan keluar dari function
        return arrPenumpang;
    }else
    {
        // Telusuri seluruh isi kursi penumpang
        for(var i = 0; i < arrPenumpang.length; i++)
        {
            // Jika ada kursi kosong
            if(arrPenumpang[i] === undefined)
            {
                // Tambah penumpang di kursi tersebut
                arrPenumpang[i] = namaPenumpang;
                // Kembalikan isi array dan keluar dari function
                return arrPenumpang;
            // Jika ada nama yang sama
            }else if(arrPenumpang[i] == namaPenumpang)
            {
                // Tampilkan pesan kesalahan
                console.log("Maaf, nama penumpang " + arrPenumpang[i] + " sudah didalam angkot.");
                // Kembalikan isi array dan keluar dari function
                return arrPenumpang;
            // Jika seluruh kursi terisi
            }else if(i == arrPenumpang.length - 1)
            {
                // Tambah penumpang di akhir array
                arrPenumpang.push(namaPenumpang);
                // Kembalikan isi array dan keluar dari function
                return arrPenumpang;
            }
        }
    }

};

console.log(tambahPenumpang("Bagus",penumpang));

var hapusPenumpang = function(namaPenumpang, arrPenumpang){

    // Jika angkot kosong
    if(arrPenumpang.length == 0)
    {
        // Kembalikan pesan error
        console.log("Maaf, angkot sedang kosong");
        // Kembalikan nilai array dan keluar dari function
        return arrPenumpang;
    }else
    {
        // Telusuri semua kursi
        for(var i = 0; i < arrPenumpang.length; i++)
        {
            // Jika penumpang yang diminta turun ditemukan
            if(arrPenumpang[i] == namaPenumpang)
            {
                // Kosongkan Kursi
                arrPenumpang[i] = undefined;
                // Kembalikan nilai array dan keluar dari function
                return arrPenumpang;
            }
            // Jika penumpang yang diminta turun tidak ditemukan
            else if(i == arrPenumpang.length - 1)
            {
                // Tampilkan pesan error
                console.log("Maaf, penumpang tidak ditemukan");
                // Kembalikan nilai array dan keluar dari function
                return arrPenumpang;
            }
        }
    }

};
