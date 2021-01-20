<?php
$servidor = "mysql742.umbler.com";
$usuario = "consumente";
$senha = "consumente1234";
$dbname = "consumente";

try{
    $conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
}
catch(Exception $e){
    echo $e->getMessage();
}

?>
