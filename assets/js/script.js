var myVar = setInterval(timer, 1000);
let toplamPuan=1000;
let playerPuan=1000;
let seviye="basit";
let gecenSure=0;
let basla=false;
let enKucuk=0;
let enBuyuk=1000;
let rastgeleSayi;
let toplamEnBuyukPuan=0;


function baslat(){
    basla=true;
    playerPuan=1000;
    gecenSure=0;
    enKucuk=0;
    enBuyuk=1000;
    rastgeleSayi=Math.floor(Math.random() * maksimumRastgele)+1;
    document.getElementById("tahmin").innerHTML="?";
    document.getElementById("tahminEtYazi").innerHTML="Sayıyı Tahmin Et...";
    document.getElementById("tahminNe").innerHTML="Tahmine Başlanıyor...";
    document.getElementById("ortaKutu").style.backgroundColor="blue" ;
}

function durum(sonuc){
    if (sonuc==0) {
        document.getElementById("tahminEtYazi").innerHTML="???KAYBETTİNİZ???";
        document.getElementById("ortaKutu").style.backgroundColor="red" ;

    }else {
    document.getElementById("tahminEtYazi").innerHTML="****KAZANDINIZ****";
    document.getElementById("ortaKutu").style.backgroundColor="green"  ;  
  
    if (toplamEnBuyukPuan<playerPuan) {toplamEnBuyukPuan=playerPuan;
        document.getElementById("enYuksekPuan").innerHTML=toplamEnBuyukPuan;
        
        basla=false;    
    }


    }
    document.getElementById("tahmin").innerHTML=rastgeleSayi;
}
function tahminNeYazdir(tahmin){
    if (tahmin>enKucuk&&tahmin<rastgeleSayi) {
        enKucuk=tahmin;
    }else if(tahmin<enBuyuk&&tahmin>rastgeleSayi) {
        enBuyuk=tahmin;
    }
    document.getElementById("puan").innerHTML=playerPuan;
    document.getElementById("tahminNe").innerHTML=enKucuk+" iLE "+enBuyuk+" arasında";
}


function timer() {
  if (basla) {
    gecenSure++;
    document.getElementById("zaman").innerHTML = gecenSure;
    if (seviye=="basit") {
        playerPuan-=1;
        document.getElementById("puan").innerHTML=playerPuan;
    }else if (seviye=="orta") {
        playerPuan-=5;
        document.getElementById("puan").innerHTML=playerPuan;
    }else if (seviye=="zor") {
        playerPuan-=10;
        document.getElementById("puan").innerHTML=playerPuan;
    }

    if (playerPuan<0) {
        basla=false;
        playerPuan=0;
        document.getElementById("puan").innerHTML=playerPuan;
        durum(0);   
    }
  }


  
}

document.querySelector("#btnTekrar").onclick =function(){
    if (!basla) {
        baslat();
    }
   
}


document.querySelector("#btnKolay").onclick =function(){
    maksimumRastgele=1000;
    seviye="basit";
    document.getElementById("seviye").innerHTML="KOLAY";
    document.getElementById("sayiAralik").innerHTML="1-1000 Arasında Sayı Giriniz...";
    document.getElementById("zorlukMenu").classList.remove('d-block');
    document.getElementById("zorlukMenu").classList.add('d-none');
    document.getElementById("oyun").classList.remove('d-none');
    document.getElementById("oyun").classList.add('d-block');
    
    
}

document.querySelector("#btnOrta").onclick =function(){
    maksimumRastgele=1000;
    seviye="orta";
    document.getElementById("seviye").innerHTML="ORTA";
    document.getElementById("sayiAralik").innerHTML="1-1000 Arasında Sayı Giriniz...";
    document.getElementById("zorlukMenu").classList.remove('d-block');
    document.getElementById("zorlukMenu").classList.add('d-none');
    document.getElementById("oyun").classList.remove('d-none');
    document.getElementById("oyun").classList.add('d-block');
}

document.querySelector("#btnZor").onclick =function(){
    maksimumRastgele=1000;
    seviye="zor";
    document.getElementById("seviye").innerHTML="ZOR";
    document.getElementById("sayiAralik").innerHTML="1-1000 Arasında Sayı Giriniz...";
    document.getElementById("zorlukMenu").classList.remove('d-block');
    document.getElementById("zorlukMenu").classList.add('d-none');
    document.getElementById("oyun").classList.remove('d-none');
    document.getElementById("oyun").classList.add('d-block');
}


document.querySelector("#btnKontrolEt").onclick =function(){
    let sayi = document.getElementById("sayiGir").value;
    if (!basla) {
        baslat();    
    }
    if (rastgeleSayi==sayi&&basla) {
    durum(1);
    }else{
    if (seviye=="basit") {
        playerPuan-=1;
    }else if (seviye=="orta") {
        playerPuan-=10;
    }else if (seviye=="zor") {
        playerPuan-=50;
    }
    tahminNeYazdir(sayi);
    }
}



document.getElementById("sayiGir").onkeyup=function(){
if (!basla) {
    baslat();    

}
}