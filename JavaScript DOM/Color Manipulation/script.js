// Mengambil button
const btnUbahWarna = document.getElementById('ubahWarna');
// Mengatur jika tombol di klik
btnUbahWarna.onclick = function()
{
    document.body.classList.toggle('background-special');
}

// Membuat tombol baru
const btnAcakWarna = document.createElement('button');
// Membuat content baru
const textAcakWarna = document.createTextNode('Acak Warna');
// Menggabungkan tombol dengan konten
btnAcakWarna.appendChild(textAcakWarna);
btnAcakWarna.setAttribute('type','button');

// Memasang tombol setelah tombol ubah warna
btnUbahWarna.after(btnAcakWarna);
// Membuat fungsi klik pada tombol acak warna
btnAcakWarna.addEventListener('click',function(){

    // Membuat angka random untuk rgb
    const colorRed = Math.round(Math.random() * 255 + 1);
    const colorGreen = Math.round(Math.random() * 255 + 1);
    const colorBlue = Math.round(Math.random() * 255 + 1);

    // Menyetting warna setelah tombol di klik
    document.body.style.backgroundColor = 'rgb('+colorRed+','+colorGreen+','+colorBlue+')';

});

// Membuat slider
const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

// Apabila ada perubahan di slider merah
sliderMerah.addEventListener('input',function(){

    const colorRed = sliderMerah.value;
    const colorGreen = sliderHijau.value;
    const colorBlue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+colorRed+','+colorGreen+','+colorBlue+')';


});

// Apabila ada perubahan di slider hijau
sliderHijau.addEventListener('input',function(){

    const colorRed = sliderMerah.value;
    const colorGreen = sliderHijau.value;
    const colorBlue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+colorRed+','+colorGreen+','+colorBlue+')';

});

// Apabila ada perubahan di slider biru
sliderBiru.addEventListener('input',function(){

    const colorRed = sliderMerah.value;
    const colorGreen = sliderHijau.value;
    const colorBlue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+colorRed+','+colorGreen+','+colorBlue+')';


});

// Mouse pergerakan
document.body.addEventListener('mousemove',function(event){

    // Posisi Mouse
    // console.log(event.clientX);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+', 100)';

});
