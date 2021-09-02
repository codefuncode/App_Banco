function registro_agencia(argument) {
	console.log("ok");

	let textarea_registro_agencia =
		document.querySelector(".registro_agencia .textarea_registro_agencia");
	textarea_registro_agencia.value = "";
	textarea_registro_agencia.innerHTML = "";

	console.log(textarea_registro_agencia);

	let elementos_seleccion =
		document.querySelectorAll(".registro_agencia select");

	let select_pais = elementos_seleccion[0];
	let select_pueblo = elementos_seleccion[1];
	// console.log(select_pueblo[1]);
	select_pueblo.disabled = true;
	optener_paises(select_pais);

	select_pais.addEventListener("input", function(argument) {
		// console.log(this.value);

		if (this.value == "inicial") {
			// statement
		} else {
			console.log("Perfecto");
			select_pueblo.disabled = false;
			console.log(this.value);
			optener_pueblos(select_pueblo, this.value);
		}
	});

	let nombre_agencia = document.querySelector(".registro_agencia input[name=nombre_agencia]");
	console.log(nombre_agencia);
	let saldo_inicial = document.querySelector(".registro_agencia input[name=saldo_inicial]");
	console.log(saldo_inicial);

}