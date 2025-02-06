<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.html"); // Redirigir a la página de login si no está autenticado
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página Web</title>
    <link rel="stylesheet" href="../webparedes/css/miestilo.css"> <!-- Enlace a tu archivo CSS -->
</head>
    <body>
        <div class="header">
            <span class="welcome-message">Bienvenido, <?php echo $_SESSION['usuario']; ?>!</span>
            <a href="logout.php" class="logout-button">Cerrar sesión</a>
        </div>
    </body>
</html>