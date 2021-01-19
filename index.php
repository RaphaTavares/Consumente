<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Home - Trabalho 2.1 - Matemática Discreta</title>
      <meta name="description" content="Aplicação desenvolvida para o Trabalho 1 de Matemática Discreta" />
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
   </head>
   <body id="page-top" onload="defineHistory();">
      <header class="d-flex masthead" style="background: #85d997; height: 100vh;">
         <div class="container my-auto text-center">
            <h3 class="mb-5" style="margin-top:10vh;"><em  id="textoHistoria">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</em></h3>
            <a
               class="btn  rounded pulse animated infinite"
               role="button"
               style="
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
               "
               href="#shop"
               >
            Começar as compras
            </a>
            <div class="overlay"></div>
         </div>
      </header>
      <!-- Start: 1 Row 2 Columns -->
      <div style="height: 100vh; margin-top: 100px;" id="shop">
         <br><br>
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6" style="height: 100vh;">
                  <div style="height: 90vh; background: #85d997; margin: 0vh 15% 25vh 15%; width: 80%; border-radius: 10px; color: #222629; opacity: 1; padding: 2vh;">
                     <p class=" text-center"style="font-size: 200%;">Selecione seus produtos</p>
                     <br>
                     <input list="produtos" name="produto" id="produto" style="width: 60%; height: 40px; background: #fff; border:none; border-radius: 10px; margin-left: 10%" placeholder="  Comece a digitar o nome do produto desejado...">
                     <datalist id="produtos">
                        <?php
                           require('productsDataList.php');
                           ?>
                     </datalist>
                     <span >&nbsp;x&nbsp;</span>
                     <input type="number" name="qtd" id="qtd" min="0.1" style="width: 13%; height: 40px; background: #fff; border:none; border-radius: 10px;" placeholder="Qtd">
                     <br>
                     <button class="btn btn-light" type="button" onclick="adiciona()" style="width:30%; margin-left:35%; margin-top:10px;">Adicionar</button>  
                     <br><br>
                     <p style="font-size: 120%; margin-left:10%;">Ou selecione na lista abaixo:</p>
                     <div style="background: #ffffff; max-height: 60vh; min-height: 10vh; border-radius: 10px; padding: 5px; text-align: left !important; width: 80%; margin-left:10%;">
                        <table class="table table-striped table-responsive" style="max-height: 45vh">
                           <thead>
                              <tr>
                                 <th scope="col">Produto</th>
                                 <th scope="col">Preço</th>
                                 <th scope="col">Adicionar</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <?php
                                    require('productsList.php');
                                    ?>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
               <div class="col-md-6" style="height: 100vh;">
                  <div class="text-center" style="height: 90vh; background: #85d997; margin: 0vh 10% 5vh 10%; width: 80%; border-radius: 10px; opacity: 1; padding: 20px;">
                     <p class=" text-center"style="font-size: 200%;">Carrinho</p>
                     <div style="background: #ffffff; max-height: 75vh; min-height: 10vh; border-radius: 10px; padding: 5px; text-align: left !important;">
                        <table class="table table-striped table-responsive">
                           <thead>
                              <tr>
                                 <th scope="col">Produto</th>
                                 <th scope="col">Quantidade</th>
                                 <th scope="col">Preço</th>
                                 <th scope="col">Remover</th>
                              </tr>
                           </thead>
                           <tbody id="cart">
                              <tr>
                                 <td>Arroz Branco</td>
                                 <td>2</td>
                                 <td>R$ 19.99</td>
                                 <td><button class="btn btn-danger" onclick="removeFromCart('productName')">-</button></td>
                              </tr>
                           </tbody>
                           <tfooter>
                              <tr>
                                 <th scope="col" colspan="2">Total:</th>
                                 <th scope="col" id="total"></th>
                              </tr>
                           </tfooter>
                        </table>
                     </div>
                     <br>
                     <input type="text" id="nomepessoa" placeholder="Qual o seu nome?" style="width: 100%; height: 40px; background: #fff; border:none; border-radius: 10px;">
                     <button onclick="finalizar()"
                        class="btn "
                        role="button"
                        style="
                        width: 200px;
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
                        margin-left: auto;
                        margin-right: auto;
                        margin-top: 100px;
                        "
                        >Confirmar</button>
                  </div>
                  <form name="formzinho" method="POST" action="processa.php">
                  <input type="text" id="escondido" name="escondido">
</form>
               </div>
            </div>
         </div>
      </div>
      <div id="filecontents" style="display: none;"></div>
      <!-- End: 1 Row 2 Columns -->
      <footer class="footer text-center" style="height: 50px; padding: 0;"></footer>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="logic.js"></script>
   </body>
</html>