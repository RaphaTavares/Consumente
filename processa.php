<?php
session_start();
include_once ("conexao.php");
try{
    $dados = $_POST['escondido'];
    echo $dados;
    $query = "INSERT INTO tabelinha(dados) VALUES ('$dados')";

    $resultado_query = mysqli_query($conn, $query);

}
catch(Exception $e){
    echo $e->getMessage();
}
header('Location: ./agradecimento.php');
?>