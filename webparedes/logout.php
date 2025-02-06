<?php
session_start();
session_destroy();
header("Location: login.html"); // Redirigir a la página de login
?>
