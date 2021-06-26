function remueve_nodos(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function optener_paises(argument) {
	let seleccion = argument;
	let url =
		"server/optener_paises.php";

	let data = {
		"func": "todo"
	};

	$.post(url, data, function(data) {
		let datos = JSON.parse(data);
		console.log(datos);

		if (datos.respuesta == "si") {

			let data_pais = JSON.parse(JSON.stringify(datos.datos));

			console.log(data_pais);
			let opciones = [];
			for (var i = data_pais.length - 1; i >= 0; i--) {
				opciones.push(document.createElement("OPTION"));
			}
			console.log(opciones);

			for (var i = 0; i < data_pais.length; i++) {

				opciones[i].value = data_pais[i]["id_pais"];
				opciones[i].innerHTML = data_pais[i]["nombre_pais"];

				// console.log(data_pais[i]["id_pais"]);
				// console.log(data_pais[i]["nombre_pais"]);
				console.log(data_pais[i]);
				console.log("===============================");

			}

			remueve_nodos(seleccion);

			let opcion_por_defecto = document.createElement("OPTION");
			opcion_por_defecto.value = "inicial";

			opcion_por_defecto.innerHTML = "Selecciona un país";
			opcion_por_defecto.selected = true;
			seleccion.appendChild(opcion_por_defecto);

			for (var i = 0; i < opciones.length; i++) {
				seleccion.appendChild(opciones[i]);
			}

		} else {
			console.log(datos.respuesta);
		}

	});
}
// Esta funcion no esta completada 
function optener_pueblos(select, id_pais, nombre_pueblo) {
	let seleccion = select;
	let url =
		"server/optener_paises.php";

	let data = {
		"id_pais": id_pais,
		"nombre_pueblo": nombre_pueblo
	};

	$.post(url, data, function(data) {
		let datos = JSON.parse(data);
		console.log(datos);

		if (datos.respuesta == "si") {

			let data_pueblos = JSON.parse(JSON.stringify(datos.datos));

			console.log(data_pueblos);
			let opciones = [];
			for (var i = data_pueblos.length - 1; i >= 0; i--) {
				opciones.push(document.createElement("OPTION"));
			}
			console.log(opciones);

			for (var i = 0; i < data_pueblos.length; i++) {

				opciones[i].value = data_pueblos[i]["id_pais"];
				opciones[i].innerHTML = data_pueblos[i]["nombre_pais"];

				console.log(data_pueblos[i]["id_pais"]);
				console.log(data_pueblos[i]["nombre_pais"]);
				console.log("===============================");

			}

			remueve_nodos(seleccion);

			let opcion_por_defecto = document.createElement("OPTION");
			opcion_por_defecto.value = "inicial";

			opcion_por_defecto.innerHTML = "Selecciona un pueblo";
			opcion_por_defecto.selected = true;
			seleccion.appendChild(opcion_por_defecto);

			for (var i = 0; i < opciones.length; i++) {
				seleccion.appendChild(opciones[i]);
			}

		} else {
			console.log(datos.respuesta);
		}

	});
}