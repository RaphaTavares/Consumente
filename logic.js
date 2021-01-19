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
        if(produtos.includes(produto))
        {
            let index = produtos.indexOf(produto);
            quantidades[index]++;
        }
        else
        {
            produtos.push(produto);
            quantidades.push(qtd);
        }
    }
    document.getElementById("produto").value = "";
    document.getElementById("qtd").value = "";


    let code = '';
    

    for(let i = 0; i < produtos.length; i++)
    {
        const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
            const produtoSemPreco = produtos[i].split("-");
            let preco = regexValor.exec(produtoSemPreco[1]);
            
            let precoQtd = preco[1].replace(',','.') * quantidades[i];
            code += "<tr><td>" + produtoSemPreco[0] + "</td>";
            code += "<td>" + quantidades[i] + "</td>";
            code += "<td>" + precoQtd.toFixed(2) + "</td>";

            code += "<td>" + "<button class='btn btn-danger' onclick='removeFromCart(\"" + produtos[i] + "\")'>-</button></td></tr>"
        }
    let tbody = document.getElementById('cart');
        tbody.innerHTML = code;

    total();
}

const addToCart = (produtoCompleto) =>
{
    let code = '';
    let tbody = document.getElementById('cart');
    
    let qtd = 1;

    if(produtos.includes(produtoCompleto))
    {
        let index = produtos.indexOf(produtoCompleto);
        quantidades[index]++;
    }
    else
    {
        if(produto != null && qtd != null && qtd != 0 && produto != '')
        {
            produtos.push(produtoCompleto);
            quantidades.push(qtd);    
        }
    }
    
    if(produtos.length == 0)
    {
        tbody.innerHTML = "";
            total();
            return;
    }
    for(let i = 0; i < produtos.length; i++)
    {   
        const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
            const produtoSemPreco = produtos[i].split("-");

            let preco = regexValor.exec(produtoSemPreco[1]);
            console.table(preco);
            console.table(quantidades);
            let precoQtd = preco[1].replace(',','.') * quantidades[i];
            code += "<tr><td>" + produtoSemPreco[0] + "</td>";
            code += "<td>" + quantidades[i] + "</td>";
            code += "<td>" + precoQtd.toFixed(2) + "</td>";
            code += "<td>" + "<button class='btn btn-danger' onclick='removeFromCart(\"" + produtoCompleto + "\")'>-</button></td></tr>"
    }
    
        tbody.innerHTML = code;
    
        total();
}

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

const removeFromCart = (product) =>
{
    const index = produtos.indexOf(product);
    if (index > -1) {
      produtos.splice(index, 1);
      quantidades.splice(index, 1);
    }
    
    // array = [2, 9]
    let vazio = '';
        addToCart(vazio);
}
    