//Membuat Element Baru
const newElementP = document.createElement('p');
//Membuat Konten untuk element baru
const textElementP = document.createTextNode('Paragraf Baru');
//Menyimpan konten element baru kedalam element baru
newElementP.appendChild(textElementP);

//Menyimpan element baru beserta konten kedalam parent
const sectionA = document.getElementById('a');
sectionA.appendChild(newElementP);

//Membuat element baru
const newListItem = document.createElement('li');
//Membuat konten element baru
const newListContent = document.createTextNode('List Baru');
//Menyimpan konten element baru kedalam element baru
newListItem.appendChild(newListContent);

//Mengambil parent
const ulParent = document.querySelector('section#b ul');
//Mengambil element setelahnya
const liNext = ulParent.querySelector('li:nth-child(2)');

//Memasang elemen baru kedalam parent
ulParent.insertBefore(newListItem,liNext);

//Menghapus child
const parentA = document.getElementById('a');
const childAnchor = parentA.getElementsByTagName('a');
parentA.removeChild(childAnchor[0]);

//Membuat elemen baru
const newHeading2 = document.createElement('h2');
//Membuat konten baru untuk elemen baru
const newHeadingContent = document.createTextNode('Heading baru');
//Memasukkan konten kedalam elemen baru
newHeading2.appendChild(newHeadingContent);

//Mengambil parent
const sectionB = document.getElementById('b');
//Mengambil child yang mau diganti
const sectionBHeading = sectionB.querySelector('#b p');
//Menganti child heading di section B
sectionB.replaceChild(newHeading2, sectionBHeading);

//Event Listener
const p3 = document.querySelector('.p3');

//Membuat fungsi untuk dijalankan
function ubahWarna()
{
    p3.style.backgroundColor = "red";
}

//Membuat const baru dan fungsinya
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

//Menggunakan addEventListener
newHeading2.addEventListener('click',function(){

    //Mengambil data parent
    const sectionBList = document.querySelector('section#b ul');
    //Membuat child baru
    const listItemNew = document.createElement('li');
    //Membuat konten child baru
    const listItemContent = document.createTextNode('List Baru');
    //Menggabungkan child baru dengan konten
    listItemNew.appendChild(listItemContent);

    //Menggabungkan child baru dengan parent
    sectionBList.appendChild(listItemNew);

});

newHeading2.addEventListener('mouseenter',function(){
    newHeading2.style.backgroundColor = 'salmon';
});

newHeading2.addEventListener('mouseleave',function(){
    newHeading2.style.backgroundColor = 'white';
});