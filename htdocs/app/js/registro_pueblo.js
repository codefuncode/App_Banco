function registro_pueblo(argument) {

	// console.log("ok");

	// =============================================
	// Declaracion de varibles  para los elementos 
	// envueltos en los prosedimintos 
	let btn_registrar_pueblo =
		document.querySelector(
			".registro_pueblo .btn_registrar_pueblo"
		);
	let seleccion_pais =
		document.querySelector(
			".registro_pueblo  [name='seleccion_pais']"
		);

	// console.log(seleccion_pais);

	let nombre_pueblo =
		document.querySelector(
			".registro_pueblo .nombre_pueblo"
		);
	// =============================================
	// Eliminamos todos los nodos que pueda tener 
	// el elemento de selección 
	remueve_nodos(seleccion_pais);

	// console.log(seleccion_pais);

	// Se opinen los países 
	// Esta función está declarada en el fichero 
	// funciones_global en este mismo directorio 
	optener_paises(seleccion_pais);

	// Evento para el botón que envía los datos 
	// al servidor para ser insertados 
	btn_registrar_pueblo.addEventListener(
		"click",
		function(argument) {

			let url =
				"server/registro_pueblo.php";

			let data = {
				"nombre_pueblo": nombre_pueblo.value,
				"id_pais": seleccion_pais.value
			};

			// console.log(data);

			$.post(url, data, function(data) {

				// console.log(data);

				const myArr = JSON.parse(data);

				// console.log(myArr.respuesta);

				fun_modal_registro_pueblo(myArr.respuesta);

			});
		});

	// Función encargada de controlar el modal existente en la  
	// aplicación y escribir el mensaje adecuado según la respuesta del servidor 
	function fun_modal_registro_pueblo(respuesta) {
		// ==================================================================
		//  Declaración de variables para los elementos de la ventana modal
		let modal_registro_pais_mensaje_titulo =
			document.querySelector(
				"#modal_registro_pais .modal_registro_pais_mensaje_titulo"
			);
		let modal_registro_pais_mensaje_cuerpo =
			document.querySelector(
				"#modal_registro_pais .modal_registro_pais_mensaje_cuerpo p"
			);
		let modal_registro_pais_mensaje_pie =
			document.querySelector(
				"#modal_registro_pais .modal_registro_pais_mensaje_pie p"
			);
		// ==================================================================

		// =========================
		// Variable para el mensaje 
		let mensaje_titulo = "";
		let mensaje_cuerpo = "";
		let img_mensaje = "";
		// =========================

		if (respuesta == "si") {
			mensaje_titulo = "Éxito";
			mensaje_cuerpo =
				"El registro fue insertado" +
				" satisfactoriamente";

		} else if (respuesta == "no") {

			mensaje_titulo = "Existe";
			mensaje_cuerpo =
				"El dato que ingreso existe " +
				"en la base de datos";

		} else if (respuesta == "error") {

			mensaje_titulo = "Error";
			mensaje_cuerpo =
				"Ha ocurrido un error en le servidor," +
				" inténtelo de nuevo mas tarde ";

		} else if (respuesta == "datos") {

			mensaje_titulo = "Datos inválidos";
			mensaje_cuerpo = "Los datos que ha ingresado no son validos ";
		}

		modal_registro_pais_mensaje_titulo.innerHTML = mensaje_titulo;
		modal_registro_pais_mensaje_cuerpo.innerHTML = mensaje_cuerpo;
		// modal_registro_pais_mensaje_pie.innerHTML = mensaje;

		let btn_cerrar_modal_registro_pais =
			document.getElementById("btn_cerrar_modal_registro_pais");

		let modal_registro_pais =
			document.getElementById("modal_registro_pais");

		modal_registro_pais.style.display = "block";

		btn_cerrar_modal_registro_pais.addEventListener("click", function() {

			modal_registro_pais.style.display = "none";

		});
	}

}