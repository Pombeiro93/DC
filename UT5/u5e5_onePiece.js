document.addEventListener("DOMContentLoaded", iniciar);

//añade los eventos a los botones
function iniciar() {
    document.querySelector("#añadir").addEventListener("click", generar);
    document.querySelector("#borrar").addEventListener("click", borrar);
    document.querySelectorAll("div.contar button").forEach(function (x) {
        x.addEventListener("click", contarPersonajes);
    });
}

//genera el personaje seleccionado
function generar(e) {
    e.preventDefault();

    var opcion = "";
    var valido = false

    do {
        opcion = prompt("Elija una opcion:\n1. Sanji\n2. Zoro\n3. Nami\n4. Luffy\n").trim().charAt(0);

        switch (opcion) {
            case "1":
                crearPersonaje("sanji");
                valido = true;
                break;
            case "2":
                crearPersonaje("zoro");
                valido = true;
                break;
            case "3":
                crearPersonaje("nami");
                valido = true;
                break;
            case "4":
                crearPersonaje("luffy");
                valido = true;
                break;
            default:
                alert("Introduzca una de las opciones ofrecidas");
                break;
        }
    } while (!valido);
}

//borra el ultimo personaje
function borrar(e) {
    e.preventDefault;

    var imagenes = document.querySelectorAll("img");
    if (imagenes.length < 1) {
        alert("No hay imagenes para borrar");
    } else {
        imagenes[imagenes.length - 1].remove();
    }
}

//cuenta el personaje
function contarPersonajes(e) {
    e.preventDefault();

    var boton = e.target;
    var personaje = boton.id;
    var parrafoContar = document.querySelector("#contar")
    var numPersonajes = document.querySelectorAll("." + personaje).length;
    if (numPersonajes.length < 1) {
        parrafoContar.innerHTML = "No hay imagenes de " + personaje;
    } else {
        parrafoContar.innerHTML = "La cantidad de imagenes de " + personaje + " es: " + numPersonajes;
    }
}

//crea el personaje
function crearPersonaje(nombre) {
    var parrafoImg = document.querySelector("#imagenes");
    var imagen = document.createElement("img");

    imagen.src = "img_onepiece/" + nombre + ".jpg";
    imagen.className = nombre;
    parrafoImg.appendChild(imagen);
}