const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);


function gorevSilTamamla(e) {
    const tiklanilanEleman = e.target;

    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil')) {
        tiklanilanEleman.parentElement.remove();
    }
}


function gorevEkle(e) {
    e.preventDefault();

    // div oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    // li oluşturma
    
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = yeniGorev.value;
    gorevDiv.appendChild(gorevLi);

    // TAMAMLANDI BUTONU EKLE

    const goreTamamBtn = document.createElement('button');
    goreTamamBtn.classList.add('gorev-btn');
    goreTamamBtn.classList.add('gorev-btn-tamamlandi');
    goreTamamBtn.innerHTML = ' <i class="fa-solid fa-circle-check"></i>';
    gorevDiv.appendChild(goreTamamBtn)


    const gorevSilBtn = document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    gorevDiv.appendChild(gorevSilBtn);



    yeniGorev.value = '';


    // ul ye oluşturdumuz divi ekliyelim

    gorevListesi.appendChild(gorevDiv);
}