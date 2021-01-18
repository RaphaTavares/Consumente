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

    total();
}

const total = () =>
{
    const regexValor = /R\$([0-9]{1,5},[0-9]{2})/;

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






    let text1 = "cdnbujvnbfeujvnbf´vsdefnv´f";
    let text2 = "cdnbujvnbfeujvnbf´vsdefnv´f";

    function defineHistory(){
        // sortear número aleatório e colocar um dos dois textos no span com id 'textoHistoria'
    }

    //atualizar o id cart para adicionar os produtos do carrinho.
