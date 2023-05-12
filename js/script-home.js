
// VARIABLES PARA LA CALCULADORA

const balance = document.querySelector('#balance-display');
let newQuantity = document.querySelector('#new-quantity');



// VARIABLES Y JS PARA EL HOME

// HOME VENTANA DAVID

let btnDavid = document.getElementById("bttn-david");
let displayPassDavid = document.getElementById("password-section");
let closeWindowD = document.getElementById("cross-out-david");



function passwordSectionDavid(e) {
    if (e.target.id == "close-david") {

        displayPassDavid.style.display = "none";
        closeWindowD.style.display = "none";
    } else {

        displayPassDavid.style.display = "flex";
        closeWindowD.style.display = "flex";
    }
}

btnDavid.onclick = passwordSectionDavid;


// HOME VENTANA ARANZA 

let btnAranza = document.getElementById("bttn-aranza");
let displayPassAranza = document.getElementById("password-section-aranza");
let closeWindowA = document.getElementById("cross-out-aranza");

function passwordSectionAranza(e) {

    if (e.target.id == "close-aranza") {

        displayPassAranza.style.display = "none";
        closeWindowA.style.display = "none";
    } else {
        displayPassAranza.style.display = "flex";
        closeWindowA.style.display = "flex";
    }

}

btnAranza.onclick = passwordSectionAranza;


// HOME VENTANA EMMA


let btnEmma = document.getElementById("bttn-emma");
let displayPassEmma = document.getElementById("password-section-emma");
let closeWindowE = document.getElementById("cross-out-emma");

function passwordSectionEmma(e) {

     if (e.target.id == "close-emma") {
        displayPassEmma.style.display = "none";
        closeWindowE.style.display = "none";
    } else {
        displayPassEmma.style.display = "flex";
        closeWindowE.style.display = "flex";

    }
}
btnEmma.onclick = passwordSectionEmma;









// JS Y VARIABLES PARA PASSWORDS

// PASSWORD USUARIO DAVID

let btnLoginDavid = document.getElementById("bttn-login-david");

function loginDavid() {
    const passwordDavidValidated = "d123";
    let passwordDavid = document.getElementById("pwd-david").value;

    if (passwordDavid == passwordDavidValidated) {
        window.location = "template.html";


    } else {
        document.getElementById('password-error').style.display = "block";

        return false;
    }
}
if (btnLoginDavid) {
    btnLoginDavid.onclick = loginDavid;
}

// PASSWORD USUARIO ARANZA

let btnLoginAranza = document.getElementById("bttn-login-aranza");

function loginAranza() {
    const passwordAranzaValidated = "a123";
    let passwordAranza = document.getElementById("pwd-aranza").value;

    if (passwordAranza == passwordAranzaValidated) {
        window.location = "template.html";


    } else {
        document.getElementById('password-error-aranza').style.display = "block";

        return false;
    }
}

btnLoginAranza.onclick = loginAranza;


// PASSWORD USUARIO EMMA

let btnLoginEmma = document.getElementById("bttn-login-emma");

function loginEmma() {
    const passwordEmmaValidated = "e123";
    let passwordEmma = document.getElementById("pwd-emma").value;

    if (passwordEmma == passwordEmmaValidated) {
        window.location = "template.html";


    } else {
        document.getElementById('password-error-emma').style.display = "block";

        return false;
    }
}

btnLoginEmma.onclick = loginEmma;








