function evalua() {
    // Obtiene el valor del campo de texto
    var cadena = document.getElementById("cadena").value;
    var tieneMayusculas = false;
    var tieneMinusculas = false;

    // Itera sobre cada caracter del texto
    for (var i = 0; i < cadena.length; i++) {
        // Si encuentra una letra mayúscula, actualiza la variable
        if (cadena[i] >= 'A' && cadena[i] <= 'Z') {
            tieneMayusculas = true;
        }
        else if (cadena[i] >= 'a' && cadena[i] <= 'z') {
            tieneMinusculas = true;
        }
    }

    // Determina el mensaje a mostrar
    var mensaje = "";
    if (tieneMayusculas && tieneMinusculas) {
        mensaje = "La cadena de caracteres " + cadena + " contiene mayúsculas y minúsculas.";
    } else if (tieneMayusculas) {
        mensaje = "La cadena de caracteres " + cadena + " contiene solo mayúsculas.";
    } else if (tieneMinusculas) {
        mensaje = "La cadena de caracteres " + cadena + " contiene solo minúsculas.";
    }

    // Actualiza el párrafo con el mensaje
    document.getElementById("parrafo").innerHTML = mensaje;
}