var largada = document.getElementById("largada");
var chegada = document.getElementById("chegada");
var btncorrer = document.querySelector("#correr");

btncorrer.addEventListener("click", function(){
    console.log("corrida")
    largada.value="";
    chegada.value="";
    alert("corrida registrada");
});