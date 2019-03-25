<?php
    $destino = "restaurante_lospescadores@hotmail.com";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: ".$nombre."\nE-mail: ".$email."\nMensaje: ".$mensaje;
    mail($destino,"Contacto Pescadores",$contenido);
    header("Location:index.html");
?>