var SIS = document.getElementById("SIS");
var DIA = document.getElementById("DIA");
var PUL = document.getElementById("PUL");
var entrar = document.querySelector("#entrar");

entrar.addEventListener("click", function(){
    SIS.value = "";
    DIA.value = "";
    PUL.value = "";
    alert("medição cadastrada");
    });