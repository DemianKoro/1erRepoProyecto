let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let data = document.getElementById("addData");


data.addEventListener("click",() =>{

    console.log(email.value);
    alert("Bienvenido/a " + email.value + "!");
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);   
    let user = document.createElement("li");
    user.textContent = ("Bienvenido/a " + email.value);

    ulList.appendChild(user);
    email.value="";
    password.value="";

})

