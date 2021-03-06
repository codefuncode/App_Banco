function registro_pais(argument) {

	let btn_regustrar =
		document.querySelector(
			".registro_pais .btn_registrar_pais"
		);

	let nombre_pais =
		document.querySelector(
			".registro_pais [name='nombre_pais']"
		);

	// nombre_pais.value = "";

	let modal_registro_pais =
		document.getElementById("modal_registro_pais");

	modal_registro_pais.style.display = "none";

	btn_regustrar.addEventListener(
		"click",
		function(argument) {
			console.log('btn_regustrar ================');
			let url =
				"server/registro_pais.php";

			let data = {
				"nombre_pais": nombre_pais.value
			};

			$.post(url, data, function(data) {
				const myArr = JSON.parse(data);
				console.log(myArr.respuesta);

				fun_modal_registro_pais(myArr.respuesta);

			});
		});

	function fun_modal_registro_pais(argument) {

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

		let mensaje = "";

		if (argument == "si") {
			mensaje = "Éxito";
		} else if (argument == "no") {
			mensaje = "Existe ";
		} else if (argument == "error") {
			mensaje = "Error";
		} else if (argument == "datos") {
			mensaje = "Datos incorrectos";
		}
		modal_registro_pais_mensaje_titulo.innerHTML = mensaje;
		modal_registro_pais_mensaje_cuerpo.innerHTML = mensaje;
		modal_registro_pais_mensaje_pie.innerHTML = mensaje;

		let btn_cerrar_modal_registro_pais =
			document.getElementById("btn_cerrar_modal_registro_pais");

		// let modal_registro_pais =
		// 	document.getElementById("modal_registro_pais");

		modal_registro_pais.style.display = "block";

		btn_cerrar_modal_registro_pais.addEventListener("click", function(argument) {
			modal_registro_pais.style.display = "none";
		});
	}

}