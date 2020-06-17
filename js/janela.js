var relogio = document.getElementById("relogio");
var caloria = document.getElementById("caloria");
var alimento = document.getElementById("alimento");
var btnReistrar = document.querySelector("#registrar");

btnReistrar.addEventListener("click", function(){
    relogio.value = "";
    caloria.value = "";
    alimento.value = "";
    alert("alimentação registrada");
    });
