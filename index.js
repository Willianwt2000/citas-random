import citas from "./citas";

let btnElement = document.getElementById("btn-change-text");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor")


function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length)
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
    autor.innerText = citas[indiceAleatorio].autor;
}

cambiarCita()

