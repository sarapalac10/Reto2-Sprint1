const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operador');

window.addEventListener('DOMContentLoaded', go_to_1 );

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

        // cambios en apariencia
        document.getElementById("legendTextContainer").style.color = "#ffffff"
        document.querySelector('.body').style.backgroundColor = "#3a4764"
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("#valor-anterior").style.color = "#ffffff";
        document.querySelector("#valor-actual").style.color = "#ffffff";
        document.querySelector(".attribution a").style.color = "#ffffff";
        document.querySelector(".attribution").style.color = "#ffffff";
        document.querySelector('.boton-borrar').style.backgroundColor = "#637097"
        document.querySelector('.boton-borrarTodo').style.backgroundColor = "#637097"
        document.querySelector('.boton-borrar').style.boxShadow = "0px 3px #404e72"
        document.querySelector('.boton-borrarTodo').style.boxShadow = "0px 3px #404e72"
        document.querySelector('.content-calculator').style.backgroundColor = "#232c43"
        document.querySelector('.screen').style.backgroundColor = "#182034"
    
        botonesNumeros.forEach(boton => {
            boton.style.backgroundColor = "#eae3dc"
            boton.style.color = "#444b5a"
            boton.style.boxShadow = "0px 3px #b4a597";
        });
        
        botonesOperadores.forEach(boton => {
            boton.style.backgroundColor = "#e5e4e1"
            boton.style.color = "#35352c"
            boton.style.boxShadow = "0px 3px #a69d91";
        });
    
        document.querySelector('.resultado').style.boxShadow = "0px 3px #93261a "
        document.querySelector('.resultado').style.backgroundColor = "#d03f2f"
        document.querySelector('.resultado').style.color = "#ffffff"
}

function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#e6e6e6"
    document.getElementById("buttonContainer").style.backgroundColor = "#D3CCCA"
    //cambios en apariencia
    document.getElementById("legendTextContainer").style.color = "#222222"
    document.querySelector('.body').style.backgroundColor = "#e6e6e6"
    document.querySelector("h1").style.color = "#000";
    document.querySelector("#valor-anterior").style.color = "#000";
    document.querySelector("#valor-actual").style.color = "#000";
    document.querySelector(".attribution a").style.color = "#000";
    document.querySelector(".attribution").style.color = "#000";
    document.querySelector('.boton-borrar').style.backgroundColor = "#377f86"
    document.querySelector('.boton-borrarTodo').style.backgroundColor = "#377f86"
    document.querySelector('.boton-borrar').style.boxShadow = "0px 3px #1b5f65"
    document.querySelector('.boton-borrarTodo').style.boxShadow = "0px 3px #1b5f65"
    document.querySelector('.content-calculator').style.backgroundColor = "#d1cccc"
    document.querySelector('.screen').style.backgroundColor = "#ededed"

    botonesNumeros.forEach(boton => {
        boton.style.backgroundColor = "#e5e4e1"
        boton.style.color = "#35352c"
        boton.style.boxShadow = "0px 3px #a69d91";
    });
    
    botonesOperadores.forEach(boton => {
        boton.style.backgroundColor = "#e5e4e1"
        boton.style.color = "#35352c"
        boton.style.boxShadow = "0px 3px #a69d91";
    });

    document.querySelector('.resultado').style.boxShadow = "0px 3px #893901"
    document.querySelector('.resultado').style.backgroundColor = "#ca5502"
    document.querySelector('.resultado').style.color = "#a69d91"
    
}

function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#160628"
    document.getElementById("buttonContainer").style.backgroundColor = "#444444"
    document.getElementById("legendTextContainer").style.color = "#E2D241"

    //cambios en apariencia
    document.querySelector('.body').style.backgroundColor = "#160628"
    document.querySelector("h1").style.color = "#ffe53d";
    document.querySelector("#valor-anterior").style.color = "#ffe53d";
    document.querySelector("#valor-actual").style.color = "#ffe53d";
    document.querySelector(".attribution a").style.color = "#fff";
    document.querySelector(".attribution").style.color = "#fff";
    document.querySelector('.boton-borrar').style.backgroundColor = "#58077d"
    document.querySelector('.boton-borrar').style.boxShadow = "0px 3px #871c9c";
    document.querySelector('.boton-borrarTodo').style.backgroundColor = "#58077d"
    document.querySelector('.boton-borrarTodo').style.boxShadow = "0px 3px #871c9c";
    document.querySelector('.content-calculator').style.backgroundColor = "#1d0934"
    document.querySelector('.screen').style.backgroundColor = "#1d0934"

    botonesNumeros.forEach(boton => {
        boton.style.backgroundColor = "#341c4f"
        boton.style.color = "#ffe53d"
        boton.style.boxShadow = "0px 3px #871c9c";
    });
    
    botonesOperadores.forEach(boton => {
        boton.style.backgroundColor = "#341c4f"
        boton.style.color = "#ffe53d"
        boton.style.boxShadow = "0px 3px #871c9c";
    });

    document.querySelector('.resultado').style.backgroundColor = "#00e0d1"
    document.querySelector('.resultado').style.color = "#1b2428"
    document.querySelector('.resultado').style.boxShadow = "0px 3px #6cf9f2"

}

