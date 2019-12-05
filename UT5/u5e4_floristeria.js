document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    document.querySelector("#generar").addEventListener("click", generarPlanta);
    document.querySelector("#borrar").addEventListener("click", borrarFila);
    document.querySelector("#contar").addEventListener("click", contar);
}

function generarPlanta(e) {
    e.preventDefault();

    var tabla = document.querySelector("tbody");
    var fila = document.createElement("tr");
    var columna = "";
    var cadenas = ["un nombre", "ubicacion", "nº de ejemplares", "tipo de flor"];

    for (let i = 0; i < 4; i++) {
        columna = document.createElement("td");
        columna.textContent = prompt("introduzca " + cadenas[i]);
        fila.appendChild(columna);
    }

    tabla.appendChild(fila);
}

function borrarFila(e) {
    e.preventDefault();

    var filas = document.querySelectorAll("tbody tr");
    if (filas.length < 1) {
        alert("No hay filas que borroar");
    } else {
        filas[filas.length - 1].remove();
    }

}

function contar(e) {
    e.preventDefault();

    document.querySelector("p").innerHTML = "El numero de filas es " + document.querySelectorAll("tbody tr").length;

}