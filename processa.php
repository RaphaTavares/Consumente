<?php
session_start();
include_once("conexao.php");

$dados = $_POST['escondido'];
echo $dados;
$query = "INSERT INTO tabelinha(dados) VALUES ('$dados')";

$resultado_query = mysqli_query($conn, $query);

if(mysqli_insert_id($conn))
{
    $_SESSION['msg'] = "<p style='color:green'>Dados cadastrados com sucesso</p>";
    header("Location: index.php");
}

?>

