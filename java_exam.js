function evaluarPalindromo() {

	var frase = document.getElementById("frase").value;
	//se evalua si la frace ingresada es un palindromo.
	var resultado = palindromo(frase); 
	//muestra el resultado.
	document.getElementById("resultado").innerText = resultado;
}

function palindromo(cadena) {
	//junta el mensaje ingresado con el resultado a mostrar.
	var resultado = "La frase \""+cadena+"\" \n";
	// Convierte la cadena a minúsculas.
	var cadenaOriginal = cadena.toLowerCase();
	//crea un arreglo de caracter.
	var letrasEspacios = cadenaOriginal.split("");
	//guarda la cadena sin espasios.
	var cadenaSinEspacios = "";

	// Elimina los espacios de la cadena.
	for(i in letrasEspacios) {
		if(letrasEspacios[i] != " ") {
			cadenaSinEspacios += letrasEspacios[i];
		}
	}
	// Crea una variable igualada a la cadena sin espacioa.
	var letras = cadenaSinEspacios.split("");
	// Crea una variable igualada a la cadena sin espacioa en orden inverso.
	var letrasReves = cadenaSinEspacios.split("").reverse();
	//vareable para checar que las cadenas sean iguales.
	var iguales = true;
	//se compara la cadena original con la cadena al inveso.
	for(i in letras) {
		if(letras[i] == letrasReves[i]) {

		}
		else {
			iguales = false;
		}
	}
	// Agrega el resultado de la comparación al mensaje
	if(iguales) {
		resultado += " es un palíndromo";
	}
	else {
		resultado += " no es un palíndromo";
	}
	// Retorna el mensaje de resultado
	return resultado;
}