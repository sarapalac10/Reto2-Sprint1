const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.value);
    })
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    } )
})

// const calculadora = new Calculadora();

// console.log(calculadora.sumar(2,3))
// console.log(calculadora.restar(2,3))
// console.log(calculadora.multiplicar(2,3))
// console.log(calculadora.dividir(2,3))

//Boton para de cambio de tema

let toggleSwitch = document.getElementsByClassName('redButton')[0]

function go_to_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    document.getElementById("outerContainer").style.backgroundColor = "#3a4764"
    document.getElementById("buttonContainer").style.backgroundColor = "#222D41"
    document.getElementById("legendTextContainer").style.color = "#ffffff"
}

function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#e6e6e6"
    document.getElementById("buttonContainer").style.backgroundColor = "#D3CCCA"
    document.getElementById("legendTextContainer").style.color = "#222222"
    document.querySelector('.body').style.backgroundColor = "#e6e6e6"
    document.querySelector("h1").style.color = "#000";
    document.querySelector("#valor-anterior").style.color = "#000";
    document.querySelector("#valor-actual").style.color = "#000";
    document.querySelector(".attribution a").style.color = "#000";
    document.querySelector(".attribution").style.color = "#000";

    document.querySelector('.content-calculator').style.backgroundColor = "#d1cccc"
    document.querySelector('.screen').style.backgroundColor = "#ededed"


}

function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#000000"
    document.getElementById("buttonContainer").style.backgroundColor = "#444444"
    document.getElementById("legendTextContainer").style.color = "#E2D241"
    doStuff(3)
}
