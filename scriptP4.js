
function genera_rfc() {
    var nombre = document.getElementById('nombre').value;
    var ap_paterno = document.getElementById('ap').value;
    var am_materno = document.getElementById('am').value;
    var anio = document.getElementById('anio').value;
    var mes = document.getElementById('mes').value;
    var dia = document.getElementById('dia').value;

    if (mes.length === 1) {
        mes = "0" + mes;
    }
    if (dia.length === 1) {
        dia = "0" + dia;
    }

    var primLetraNom = obtenerPrimeraLetra(ap_paterno);
    var primerosApaPat = ap_paterno.substring(0, 2);
    var primerLetraApMat = am_materno.charAt(0);
    var ultimosDosAnios = anio.substring(2);

    var rfc = primerosApaPat + primerLetraApMat + primLetraNom + ultimosDosAnios + mes + dia;

    document.getElementById("resultado").value = rfc;
}

function obtenerPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase();
}
