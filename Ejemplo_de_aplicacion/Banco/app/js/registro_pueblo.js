function registro_pueblo(argument) {
	// console.log("ok");

	let seleccion_pais =
		document.querySelector(
			".registro_pueblo [name='seleccion_pais']"
		);

	function removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	removeAllChildNodes(seleccion_pais);
	// console.log(seleccion_pais);
	let opcion_por_defecto =
		document.createElement("OPTION");
	opcion_por_defecto.value =
		"inicial";

	opcion_por_defecto.innerHTML =
		"Selecciona un país";
	opcion_por_defecto.selected = true;
	seleccion_pais.appendChild(opcion_por_defecto);

	optener_paises();
	insertar_pueblo();

	function optener_paises(argument) {

		let url =
			"php/optener_paises.php";

		let data = {
			"func": "todo"
		};

		$.post(url, data, function(data) {
			let datos = JSON.parse(data);
			// console.log(datos);

			if (datos.respuesta == "si") {

				let data_pueblos = JSON.parse(JSON.stringify(datos.datos));

				// console.log(data_pueblos);
				let opciones = [];
				for (var i = data_pueblos.length - 1; i >= 0; i--) {
					opciones.push(document.createElement("OPTION"));
				}
				// console.log(opciones);

				for (var i = 0; i < data_pueblos.length; i++) {

					opciones[i].value = data_pueblos[i]["id_pais"];
					opciones[i].innerHTML = data_pueblos[i]["nombre_pais"];

					// console.log(data_pueblos[i]["id_pais"]);
					// console.log(data_pueblos[i]["nombre_pais"]);
					// console.log("========================");

				}
				let seleccion_pais =
					document.querySelector(
						".registro_pueblo [name='seleccion_pais']"
					);
				removeAllChildNodes(seleccion_pais);
				let opcion_por_defecto =
					document.createElement("OPTION");
				opcion_por_defecto.value =
					"inicial";

				opcion_por_defecto.innerHTML =
					"Selecciona un país";
				opcion_por_defecto.selected = true;
				seleccion_pais.appendChild(opcion_por_defecto);

				for (var i = opciones.length - 1; i >= 0; i--) {
					seleccion_pais.appendChild(opciones[i]);
				}

			} else {
				// console.log(datos.respuesta);
			}

		});

	}

	function insertar_pueblo(argument) {

		let btn_registrar_pueblo =
			document.querySelector(
				".registro_pueblo .btn_registrar_pueblo"
			);

		btn_registrar_pueblo.addEventListener(
			"click",
			function(argument) {

				let nombre_pueblo =
					document.querySelector(
						".registro_pueblo [name='nombre_pueblo']"
					);

				let seleccion_pais =
					document.querySelector(
						".registro_pueblo [name='seleccion_pais']"
					);

				let url =
					"php/registro_pueblo.php";

				let data = {
					"nombre_pueblo": nombre_pueblo.value,
					"id_pais": seleccion_pais.value
				};

				// console.log(data);

				$.post(url, data, function(data) {
					// console.log(data);
					const myArr = JSON.parse(data);
					// console.log(myArr.respuesta);

					modal_registro_pais(myArr.respuesta);
				});
				// console.log('btn_registrar_pueblo');
			});

	}

	function modal_registro_pais(argument) {

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
		let img_modal_registro_pais =
			document.querySelector(
				"#modal_registro_pais .img_modal_registro_pais"
			);

		let btn_cerrar_modal_registro_pais =
			document.getElementById("btn_cerrar_modal_registro_pais");

		let modal_registro_pais =
			document.getElementById("modal_registro_pais");

		let lcono_estatus = '';
		let mensaje_titulo = "";
		let mensaje_cuerpo = "";
		let mensaje_pie = "";

		if (argument == "si") {
			lcono_estatus = 'img/aprobado.png';
			mensaje_titulo = "Excelente";
			mensaje_cuerpo = "La inserción del dato fue almacenado correctamente en la base de datos ";
			mensaje_pie = "Respuesta exitosa";
		} else if (argument == "no") {
			lcono_estatus = 'img/icono_advertencia.png';
			mensaje_titulo = "Advertencia";
			mensaje_cuerpo =
				"Al parecer el dato ingresado ya existe en la base de datos, por favor diríjase a la sección correspondiente y verifique si ese dato existe ";
			mensaje_pie = "Advertencia del servidor ";
		} else if (argument == "error") {
			lcono_estatus = 'img/error.png';
			mensaje_titulo = "Error";
			mensaje_cuerpo = "Verifique los datos ingresados, por alguna razón el servidor no ha podido procesar su petición ";
			mensaje_pie = "Error al procesar los datos ";
		}

		img_modal_registro_pais.src = lcono_estatus;
		img_modal_registro_pais.addEventListener("load", function(argument) {
			modal_registro_pais_mensaje_titulo.innerHTML = mensaje_titulo;
			modal_registro_pais_mensaje_cuerpo.innerHTML = mensaje_cuerpo;
			modal_registro_pais_mensaje_pie.innerHTML = mensaje_pie;
			modal_registro_pais.style.display = "block";

		});

		btn_cerrar_modal_registro_pais.addEventListener("click", function(argument) {
			modal_registro_pais.style.display = "none";
			// console.log('btn_cerrar_modal_registro_pais');

		});
	}

}