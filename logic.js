const produtos = [];
const quantidades = [];
const valores = [];
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


    console.table(produtos);
    let code = '';
    

    for(let i = 0; i < produtos.length; i++)
    {
        const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
            const produtoSemPreco = produtos[i].split("-");
            let preco = regexValor.exec(produtoSemPreco[1]);
            
            let precoQtd = preco[1].replace(',','.') * quantidades[i];
            console.log("preco: " + preco + "/nprecoQtd: " + precoQtd);
            code += "<tr><td>" + produtoSemPreco[0] + "</td>";
            code += "<td>" + quantidades[i] + "</td>";
            code += "<td>" + precoQtd + "</td>";
            code += "<td>" + "<button class='btn btn-danger' onclick='removeFromCart(" + produtoSemPreco[0] + "'>-</button></td></tr>"
        }
    let tbody = document.getElementById('cart');
        tbody.innerHTML = code;

    total();
}

const addToCart = (produtoCompleto) =>
{
    let qtd = 1;

    if(produtos.includes(produtoCompleto))
    {
        let index = produtos.indexOf(produtoCompleto);
        quantidades[index]++;
    }
    else
    {
        produtos.push(produtoCompleto);
        quantidades.push(qtd);    
    }
    
    let code = '';
    for(let i = 0; i < produtos.length; i++)
    {   
        const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
            const produtoSemPreco = produtos[i].split("-");
            let preco = regexValor.exec(produtoSemPreco[1]);
            
            let precoQtd = preco[1].replace(',','.') * quantidades[i];
            console.log("preco: " + preco + "/nprecoQtd: " + precoQtd);
            code += "<tr><td>" + produtoSemPreco[0] + "</td>";
            code += "<td>" + quantidades[i] + "</td>";
            code += "<td>" + precoQtd + "</td>";
            code += "<td>" + "<button class='btn btn-danger' onclick='removeFromCart(" + produtoSemPreco[0] + "'>-</button></td></tr>"
    }
    let tbody = document.getElementById('cart');
        tbody.innerHTML = code;
    
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
    let valorTotal = 0;
    const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;

    for(let i = 0; i < produtos.length; i++)
    {
        let result = regexValor.exec(produtos[i]);
        
        valores[i] = result[1];
        valores[i] = valores[i].replace(',', '.');

        valorTotal += valores[i] * quantidades[i];
        console.log("valor total: " + valorTotal);
    }

    document.getElementById("total").innerHTML = "R$" + valorTotal;

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
    