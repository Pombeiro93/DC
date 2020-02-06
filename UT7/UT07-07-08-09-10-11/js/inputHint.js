$(() => {
    /* 1.	Establecer el valor del elemento input igual al valor del elemento label;*/
    var input = $("input").first();
    input.data("valor", $("label").html());
    input.attr("value", input.data("valor"));

    /* 2.	Añadir la clase "hint" al elemento input;*/
    input.addClass("hint");

    /* 3.	Remover el elemento label;*/
    $("label").remove();

    /* 4.	Vincular un evento focus en el input para remover el texto de sugerencia y la clase "hint";*/
    input.focus(function () {
        input.removeClass("hint");
        if (input.val() == input.data("valor")) {
            input.val("");
        }
    });

    /* 5.	Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase "hint" en caso que no se haya ingresado algún texto.*/
    input.blur(function () {
        input.addClass("hint");
        if (input.val() == "") {
            input.val(input.data("valor"));
        }
    });
});