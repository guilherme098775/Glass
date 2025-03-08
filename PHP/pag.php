<?php 
// Configurações do banco de dados
$host = 'localhost'; // ou o endereço do seu servidor de banco de dados
$db = 'formulario_db';
$user = 'root';
$pass = 'Mudar@123';

// Conexão com o banco de dados
$conn = new mysqli($host, $user, $pass, $db);

// Verifica se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("conexão falhou: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = trim($_POST['nome']);
    $email = trim($_POST['email']);
    $telefone = trim($_POST['telefone']);
    $descricao = trim($_POST['descricao']);


// Inicializa um array para armazenar mensagens de erro
$erro = [];

 // Validação dos dados
 if (empty($nome)) {
    $erros[] = "O nome e obrigatório.";
 }

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros[] = "Um e-mail válido é obrigatório.";
}

if (empty($telefone)) {
    $erros[] = "O telefone é obrigatório.";
}

if (empty($descricao)) {
    $erros[] = "A mensagem não pode estar vazia.";
}

// Se não houver erros, processa os dados
if (empty($erros))  {
    // Prepara a consulta SQL
    $stmt = $conn->prepare("INSEERT INTO contatos (nome, email, telefone, descricao) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nome, $email, $telefone, $descricao);

     // Executa a consulta
     if($stmt->execute()) {
        echo "Obrigado $nome! Sua mensagem foi enviada com sucesso.";
    } else {
        echo "Erro ao enviar a mensagem: " . $stmt->error;
    }

    // Fecha a declaração
    $stmt->close();
} else {
    // Exibe os erros
    foreach ($erros as $erro) {
        echo "<p style='color:red;'>$erro</p>";
        }
    }
}

// Fecha a conexão
$conn->close();
?>