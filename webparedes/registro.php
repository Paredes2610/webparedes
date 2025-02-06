<?php
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
$contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);

// Insertar datos en la tabla
$sql = "INSERT INTO usuarios (nombre, contraseña) VALUES ('$nombre', '$contraseña')";

echo "<link rel='stylesheet' type='text/css' href='css/miestilo.css'>";

if ($conn->query($sql) === TRUE) {
    echo "<div class='message success center'>Registro exitoso. Redirigiendo en 3 segundos...</div>";
    header("refresh:3;url=login.html");
} else {
    echo "<div class='message error center'>Error: " . $sql . "<br>" . $conn->error . ". Redirigiendo en 3 segundos...</div>";
    header("refresh:3;url=registro.html");
}

$conn->close();
?>
