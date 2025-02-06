<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$contraseña = $_POST['contraseña'];

// Verificar usuario y contraseña
$sql = "SELECT * FROM usuarios WHERE nombre='$nombre'";
$result = $conn->query($sql);
echo "<link rel='stylesheet' type='text/css' href='css/miestilo.css'>";

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($contraseña, $row['contraseña'])) {
        $_SESSION['usuario'] = $row['nombre'];
        header("Location: index.php"); 
    } else {
        echo "<div class='message error center'>Contraseña incorrecta. Redirigiendo en 3 segundos...</div>";
        header("refresh:3;url=login.html");
    }
} else {
    echo "<div class='message error center'>Usuario no encontrado. Redirigiendo en 3 segundos...</div>";
    header("refresh:3;url=login.html");
}

$conn->close();
?>
