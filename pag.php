<?php 
$localhost = "localhost";
$username = "root";
$password = "Mudar@123";
$database = "formulario_db";

$conn = new mysqli($localhost, $username, $password, $database);

if ($conn->connect_error) {
    echo "Falha na conexão";
}

echo "Conectado com o banco de dados"

$conn->close();
?>