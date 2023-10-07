import { citas } from "./citas.js";

let btnElement = document.getElementById("btn-change-text");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor")


function generarEnteroAleatorio(min, max) {
    //sin incluir el Max en los valores possibles
    return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length)
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
    autor.innerText = citas[indiceAleatorio].autor;
}

btnElement.addEventListener('click', cambiarCita)

cambiarCita()

