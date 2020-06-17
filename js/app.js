
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var campoemail = document.getElementById("email");
var campopass = document.getElementById("pass");
var btnEntrar = document.querySelector("#entrar");



var body = document.querySelector("body");

btnEntrar.addEventListener('click', function(){
    if(campoemail.value != "" && campopass.value != ""  ){
        location.href = "home.html";
        console.log('depois')
    }else {
         location.href = "index.html";
        console.log("else")
    };
});

btnSignin.addEventListener("click", function () {
   document.body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
   document.body.className = "sign-up-js";
});






