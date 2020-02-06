		$(() => {
		    /* 1. Ocultar todos los elementos div.module; */
		    $("div.module").hide();

		    /* 2. Crear una lista desordenada antes del primer div.module para utilizar como pestañas; */
		    $("div.module").first().before($("<ul>"));

		    /* 3. Interactuar con cada div utilizando $.fn.each.Por cada uno, utilizar el texto del elemento h2 como el texto para el ítem de la lista desordenada; */
		    var lista = $("#myList").next();
		    $("div.module").each(function (i, e) {
		        var valor = $(e).children($("h2")).html();
		        lista.append($("<li>").html(valor));
		    });

		    /* 4. Vincular un evento click a cada ítem de la lista de forma que:  */
		    /* Muestre el div correspondiente y oculte el otro; */
		    /* Añada la clase "current" al ítem seleccionado;  */
		    /* Remueva la clase "current" del otro ítem de la lista; */
		    lista.children().click(function () {
		        var indexLista = $(this).index();
		        $("div.module").eq(indexLista).show().addClass("current");
		        $("div.module").not($("div.module").eq(indexLista)).hide().removeClass("current");
		    });

		    /* 5. Finalmente, mostrar la primera pestaña. */
		});