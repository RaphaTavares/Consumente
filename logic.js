const produtos = [];
const quantidades = [];
const valores = [];
let valorTotal = 0;
let compra;
let date = new Date();

const adiciona = () =>
{
    let produto = document.getElementById("produto").value;
    let qtd = document.getElementById("qtd").value;
    
    if(produto != null && qtd != null && qtd != 0)
    {
        produtos.push(produto);
        quantidades.push(qtd);
    }
    document.getElementById("produto").value = "";
    document.getElementById("qtd").value = "";
    console.log(produto);
    // creating table elements
    let table = document.getElementById("cart");
    
    let newRow = document.createElement('tr');
    newRow.setAttribute('id', produto);
    let newColumn1 = document.createElement('td');
    let newColumn2 = document.createElement('td');
    let newColumn3 = document.createElement('td');
    let newColumn4 = document.createElement('td');

    //separating product from price
    
    const arrayPrecoProduto = produto.split("-");
    const arrayPrecoPuro = arrayPrecoProduto[1].split(" ");


    let column1Text = document.createTextNode(arrayPrecoProduto[0]);
    let column2Text = document.createTextNode(qtd);
    
    let arrayPrecoPuroPronto = arrayPrecoPuro[2].replace(",", ".");
    console.log("pronto" + arrayPrecoPuroPronto);
    let precoTotal = arrayPrecoPuroPronto * qtd;
    console.table(arrayPrecoPuro);
    console.table(precoTotal);
    let column3Text = document.createTextNode(precoTotal);
    console.log("arrayPrecoPuro: " + arrayPrecoPuro[2] + ", qtd: " + qtd + "preco total: " + precoTotal);


    let column4Button = document.createElement('button');
    let column4Text = document.createTextNode("-");
    
    column4Button.appendChild(column4Text);

    column4Button.className += " btn btn-danger";
    //column4Button.onclick = removeFromCart(document.getElementById(produto));
    column4Button.setAttribute("onclick","removeFromCart(document.getElementById('" + produto + "').value)");

    newColumn1.appendChild(column1Text);
    newColumn2.appendChild(column2Text);
    newColumn3.appendChild(column3Text);
    
    newColumn4.appendChild(column4Button);

    newRow.appendChild(newColumn1);
    newRow.appendChild(newColumn2);
    newRow.appendChild(newColumn3);
    newRow.appendChild(newColumn4);
    table.appendChild(newRow);
    total();
}

/*

    var table = document.getElementById("tabela");
    for(let i = 0; i < linhas.length; i++)
    {
        newLinha = document.createElement('tr');
        

        newColuna = document.createElement('td');
        var texto = document.createTextNode(linhas[i]);

        newColuna.appendChild(texto);
        newLinha.appendChild(newColuna);
        table.appendChild(newLinha);
    }

*/
const total = () =>
{
    const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;

    for(let i = 0; i < produtos.length; i++)
    {
        let result = regexValor.exec(produtos[i]);
        
        valores[i] = result[1];
        valores[i] = valores[i].replace(',', '.');

        valorTotal += valores[i] * quantidades[i];
    }

    document.getElementById("total").value = "R$" + valorTotal;

}


const finalizar = () =>
{
    
    let objProdutos = [];
    

    for(let i = 0; i < produtos.length; i++)
    {
        let produtojson =
        {
            nome: produtos[i],
            quant: quantidades[i],
        }
        objProdutos.push(produtojson);
    }
    compra = 
    {
        'nome': document.getElementById("nomepessoa").value,
        'data': date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear(),
        'produtos': objProdutos
    }

    let jsonPronto = JSON.stringify(compra);
    console.table(jsonPronto);

    writeFile();
}

const writeFile = () =>
{  
    let fileName = compra.nome + date.getDate();

    let blob = new Blob([compra], { type: "text/pain,charset=utf-8"});
    saveAs(blob, fileName + ".txt");
    
    }

    function defineHistory(){
        // sortear número aleatório e colocar um dos dois textos no span com id 'textoHistoria'
    }

const removeFromCart = (productId) =>
{
    const index = produtos.indexOf(productId);
    if (index > -1) {
      produtos.splice(index, 1);
    }
    
    // array = [2, 9]
    console.log(productId);
        console.log(produtos); 
}
    