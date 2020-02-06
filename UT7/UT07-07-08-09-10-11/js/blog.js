/* 	9.(6.5 .1) MOSTRAR TEXTO OCULTO
		Realice el ejercicio utilizando el archivo / ejercicios / js / blog.js. La tarea es añadir alguna interactividad a la sección blog de la página:*/

/*Al hacer click en alguno de los titulares del div #blog, se debe mostrar el párrafo correspondiente con un efecto de deslizamiento;*/
/*Al hacer click en otro titular, se debe ocultar el párrafo mostrado con un efecto de deslizamiento y mostrar nuevamente el párrafo correspondiente también con un efecto de deslizamiento Ayuda: No se olvide de utilizar el selector: visible.*/
$(() => {
    $("#blog li").children("h3").click(function (e) {
        e.preventDefault();
        $(this).siblings().show("slow");
        $($("#blog p").not($(this).siblings())).hide("slow");
    });
});