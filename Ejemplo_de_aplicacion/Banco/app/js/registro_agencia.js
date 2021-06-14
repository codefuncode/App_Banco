function registro_agencia(argument) {
	let descripcion_agencia =
		document.querySelector(
			".registro_agencia textarea"
		);

	descripcion_agencia.value = "";
	// console.log('registro_agencia');

	let btn_registrar_agencia =
		document.querySelector(
			".registro_agencia .btn_registrar_agencia"
		);

	let nombre_agencia =
		document.querySelector(
			".registro_agencia .nombre_agencia"
		);

	let balance_inicial =
		document.querySelector(
			".registro_agencia .balance_inicial"
		);

	let lista_paises =
		document.querySelector(
			".registro_agencia .lista_paises"
		);

	let listado_pueblos =
		document.querySelector(
			".registro_agencia .listado_pueblos"
		);

	btn_registrar_agencia.addEventListener("click", function(argument) {
		console.log(this);

		balance_inicial

		if (formato_moneda(balance_inicial.value)) {
			console.log('true');
		} else {
			console.log('false');
		}
	});

	function formato_moneda(valor) {

		var patt = new RegExp("(^[0-9]{1,}[\.]{1}[0-9]{2}$)");
		var resultado = patt.test(valor);

		return resultado;
	}
}