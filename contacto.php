<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Configurar el correo electrónico
    $para = "185319@upslp.edu.mx"; // Dirección de correo electrónico válida
    $asunto_correo = "Mensaje de contacto: $asunto";
    $cuerpo_correo = "Nombre: $nombre\nCorreo Electrónico: $correo\n\nMensaje:\n$mensaje";

    // Enviar el correo electrónico
    $enviado = mail($para, $asunto_correo, $cuerpo_correo);

    // Verificar si el correo fue enviado correctamente
    if ($enviado) {
        echo "<p class='exito'>¡El mensaje ha sido enviado correctamente!</p>";
    } else {
        echo "<p class='error'>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>";
    }
} else {
    // Si no es una solicitud POST, redirigir a la página de inicio
    header("Location: index.html");
    exit;
}
?>