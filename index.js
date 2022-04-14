function naredi() {
let lab = document.getElementById("lab");
lab.addEventListener("click", function(){
    location.href="labirint/index.html";
});
let igra = document.getElementById("igra");
igra.addEventListener("click",function(){
    location.href="labirint/game/index.html";
});
let graf = document.getElementById("graf");
graf.addEventListener("click",function(){
    location.href="zvok/graf part/graf.html";
});
let zvok = document.getElementById("zvok");
zvok.addEventListener("click", function(){
    location.href="zvok/2d zvok/2dZvok.html";
});
let mapa = document.getElementById("mapa");
mapa.addEventListener("click",function(){
    window.location.assign("http://localhost:3000/");
});
}
window.onload = function(){
    naredi();
    console.log("kaj pa ti tukaj delaš? >:(");
}