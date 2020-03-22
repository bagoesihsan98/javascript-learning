//Seleksi
//Menggunakan document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.style.textAlign = "center";
judul.innerText = "Berubah";

//Menggunakan document.getElementsByTag()
const p = document.getElementsByTagName('p');
p[2].style.backgroundColor = "blue";

//Menggunakan document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "Ini dirubah dari JavaScript";

//Menggunakan document.querySelector
const pKhusus = document.querySelector("#b p");
pKhusus.style.color = "Green";

const liKhusus = document.querySelector("#b ul li:nth-child(2)");
liKhusus.style.backgroundColor = "Orange";

const pOne = document.querySelector('p');
pOne.innerHTML = "Ini namanya baru";

//Menggunakan document.querySelectorAll
const semuaP = document.querySelectorAll('p');
let inc = 0;
while( inc < semuaP.length)
{
    semuaP[inc].style.backgroundColor = "Lightblue";
    inc++;
}

//Unique Case
//Mengganti root document
const pB = document.getElementById('b');
const para4 = pB.getElementsByTagName('p');
para4[0].style.color = "#ccc";

//Studi Kasus
const h1 = document.getElementById('judul');
h1.innerHTML = "<em> Bagoes IT <em>";

const sectionA = document.querySelector('section#a');

const para2 = document.querySelector('.p2');
para2.setAttribute('class','bruh');
para2.classList.add('goesClass');
