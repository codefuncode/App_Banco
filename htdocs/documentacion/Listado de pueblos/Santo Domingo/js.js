let pueblo = document.querySelectorAll("table tr td:first-child > a:first-child");
let arrPueblos = []
for (var i = 0, length1 = pueblo.length; i < length1; i++) {
	console.log(pueblo[i].textContent.trim());
	arrPueblos.push(pueblo[i].textContent.trim());

}

console.log(JSON.stringify(arrPueblos));
let lista = document.createElement("ol");
lista.style.listStyle = "none";
let elementos_li = [];

for (var i = 0, length1 = arrPueblos.length; i < length1; i++) {
	elementos_li.push(document.createElement("li"));
	elementos_li[i].innerHTML = arrPueblos[i];
	lista.appendChild(elementos_li[i]);

}

let tabla = document.getElementsByTagName("TABLE");
// let body = document.getElementsByTagName("body");
// tabla[0].style.display = "none";

console.log(tabla);

document.body.appendChild(lista);