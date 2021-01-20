<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Simulador de Compras - Consumente</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
</head>

<body id="page-top" onload="defineHistory();">
    <header class="d-flex masthead" style="background: #85d997; height: 100vh;">
        <div class="container my-auto text-center">
            <h3 class="mb-5" style="margin-top:10vh;"><em id="textoHistoria"></em></h3>
            <a class="btn  rounded pulse animated infinite" role="button" style="
                    width: 250px;
                    font-size: 20px;
                    text-align: center;
                    border-style: none;
                    border-color: #ffffff;
                    border-bottom-style: none;
                    opacity: 1;
                    filter: blur(0px);
                    background: #ffffff;
                    height: 50px;
                    padding: 8px 12px;
                    margin: 90px;
                    color:#212121;
                    " href="#shop"> Começar as compras </a>
            <div class="overlay"></div>
        </div>
    </header>
    <!-- Start: 1 Row 2 Columns -->
    <div style="width:60%; margin-top: 100px; margin:auto;" id="shop">
        <br><br>
        <div class="container-fluid">
            <p class=" text-center" style="font-size: 200%;">Selecione seus produtos</p>
            <br>
            <input list="produtos" name="produto" id="produto" style="width: 60%; height: 40px; background: #fff; border: #85d997 solid 3px; border-radius: 10px; margin-left: 10%" placeholder="  Comece a digitar o produto desejado...">
            <datalist id="produtos"> <?php
                                require('productsDataList.php');
                                ?> </datalist>
            <span>&nbsp;x&nbsp;</span>
            <input type="number" name="qtd" id="qtd" min="1" style="width: 13%; height: 40px; background: #fff; border: #85d997 solid 3px; border-radius: 10px;padding:2px 6px;" placeholder="Qtd">
            <br>
            <button class="btn" type="button" onclick="adiciona()" style="width:30%; margin-left:35%; margin-top:10px; 
                    background-color: #85d997;">Adicionar</button>
            <br><br>
            <p style="font-size: 120%; margin-left:10%;">Ou selecione na lista abaixo:</p>
            <div class=" table-responsive" style="height: 55vh; width:80%; margin:auto;">
                <table class="table table-striped" style="margin:auto;">
                    <thead style="background-color: #85d997;">
                        <tr>
                            <th scope="col">Produto</th>
                            <th scope="col">Preço</th>
                            <th scope="col" class="text-center"> Adicionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> <?php
                                            require('productsList.php');
                                            ?> </tr>
                    </tbody>
                </table>
            </div>
            <br><br>
            <button class="btn" type="button" data-toggle="modal" data-target=".bd-example-modal-lg" style="width:30%; height:60px; margin-left:35%; margin-top:40px margin-bottom:100px; 
                    background-color: #85d997;">Ir ao carrinho</button>
            <br><br>
        </div>
    </div>
    <!-- End: 1 Row 2 Columns -->
    <br>
    <div class="text-center" style="padding: 20px">
        <span>Feito com por 💚 éppica</span>
    </div>
    <form name="formzinho" method="POST" action="processa.php">
        <input type="text" id="escondido" name="escondido" hidden="true">
    </form>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLongTitle">Carrinho de Compras</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive" style="background: #ffffff; max-height: 60vh; width:90%; margin:auto;">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Produto</th>
                                    <th scope="col">Quantidade</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col" class="text-center">Remover</th>
                                </tr>
                            </thead>
                            <tbody id="cart">
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th scope="col" colspan="2">Total:</th>
                                    <th scope="col" id="total"></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <input type="text" id="nomepessoa" placeholder="Qual o seu nome?" style="margin-left:5%; width: 60%; height: 40px; background: #fff; border: #85d997 solid 3px; border-radius: 10px; padding:2px 6px;" required="true" required>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-dismiss="modal" style="background-color: #ff5351; color:#fff;">Adicionar mais produtos</button>
                    <button type="button" class="btn" style="background-color: #85d997;" onclick="finalizar()">Finalizar</button>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="logic.js"></script>
</body>

</html>