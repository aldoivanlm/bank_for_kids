
const users = [
    {
        name: "Sergio David",
        balance: 200
    },
    {
        name: "Aranza",
        balance: 260
    },
    {
        name: "Emma",
        balance: 67
    }
];


let initialBalance = (users[0].balance);
let newQuantity = document.querySelector('#new-quantity');

let errorMaxBalance = document.getElementById("error-max");
let errorMinBalance = document.getElementById("error-min");


document.getElementById("balance-display").innerHTML = initialBalance; // PARA MOSTRAR SALDO EN PANTALLA



function alertMaxBalanceOn() {

    errorMaxBalance.style.display = "block";
}

function alertMaxBalanceOff() {

    errorMaxBalance.style.display = "none";
}


function alertMinBalanceOn() {

    errorMinBalance.style.display = "block";
}

function alertMinBalanceOff() {

    errorMinBalance.style.display = "none";
}



// FUNCIONES PARA SUMAR Y RESTAR


function incrementNumber() {
    alertMinBalanceOff()
    alertMaxBalanceOff()
if (newQuantity.value != "") {
    initialBalance = (initialBalance) + (parseInt(newQuantity.value));

    if (initialBalance > 10 && initialBalance < 990) {
        document.getElementById("balance-display").innerHTML = initialBalance;
    } else {
        alertMaxBalanceOn();
        initialBalance = (initialBalance) - (parseInt(newQuantity.value));
    }

    newQuantity.value = "";
}
}


    


function decrementNumber() {
    alertMinBalanceOff()
    alertMaxBalanceOff()

    if (newQuantity.value != "") {

    initialBalance = (initialBalance) - (parseInt(newQuantity.value));

    if (initialBalance > 10 && initialBalance < 990) {
        document.getElementById("balance-display").innerHTML = initialBalance;
    } else {
        alertMinBalanceOn();
        initialBalance = (initialBalance) + (parseInt(newQuantity.value));
    }

        newQuantity.value = "";
    }
}







    // FUNCIONES PARA OCULTAR Y MOSTRAR SALDO


    function show() {
        document.getElementById('display-numbers').style.visibility = "visible";

    }
    function hide() {
        document.getElementById('display-numbers').style.visibility = "hidden";

    }





















