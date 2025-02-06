<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "contacto";

// Conectar a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];

// Validación
$errors = [];

if (empty($nombre)) {
    $errors[] = "El nombre es obligatorio.";
}

if (empty($apellido)) {
    $errors[] = "El apellido es obligatorio.";
}

if (empty($email)) {
    $errors[] = "El correo electrónico es obligatorio.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "El correo electrónico no es válido.";
}

if (empty($telefono)) {
    $errors[] = "El número de teléfono es obligatorio.";
} elseif (!preg_match('/^\d+$/', $telefono)) {
    $errors[] = "El número de teléfono debe contener solo números.";
}

if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p>$error</p>";
    }
    echo "<a href='../index.html'>Volver al formulario</a>";
}

// Insertar datos en la tabla
$sql = "INSERT INTO formulario (nombre, apellido, email, teléfono) VALUES ('$nombre', '$apellido', '$email', '$telefono')";

echo "<link rel='stylesheet' type='text/css' href='../css/miestilo.css'>";

if ($conn->query($sql) === TRUE) {
    echo "<div class='message success center'>Registro exitoso. Redirigiendo en 3 segundos...</div>";
    header("refresh:3;url=index.html");
} else {
    echo "<div class='message error center'>Error: " . $sql . "<br>" . $conn->error . ". Redirigiendo en 3 segundos...</div>";
    header("refresh:3;url=index.html");
}

$conn->close();
?>

