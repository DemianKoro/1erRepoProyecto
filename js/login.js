$(document).ready (function() {

    $("#formulario").submit(function (e) {

        e.preventDefault();

        if (validarForm()){
               
            console.log(email.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);   
            let user = document.createElement("p");
            user.textContent = (email.value);
            userP.appendChild(user);
            email.value="";
            password.value="";
            $("#staticBackdrop").modal('hide');
           
        }
    })

    $("#btnOculto").click(function () {

        if (validarForm()){
    
            console.log(email.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);   
            let user = document.createElement("p");
            user.textContent = (email.value);
            userP.appendChild(user);
            email.value="";
            password.value="";
            $("#staticBackdrop").modal('hide');
             
        }
    })

})

function validarForm () {

    if ($("#floatingInput").val().indexOf('@',0) == -1){
        alert("El campo Email debe tener una dirección de correo valida.");
        $("#floatingInput").focus();
        return false;

    }

    if ($("#floatingPassword").val().length < 8 ){
        alert("La Contraseña debe tener al menos 8 carácteres.");
        $("#floatingPassword").focus();
        return false;
    }

    return true;
}

let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let data = document.getElementById("addData");


function mostrarContrasena(){
var tipo = document.getElementById("floatingPassword");
if(tipo.type == "password"){
    tipo.type = "text";
}else{
    tipo.type = "password";
}
}


let enter = document.getElementById("btnOculto");



