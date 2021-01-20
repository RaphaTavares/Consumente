const produtos = [];
const quantidades = [];
const valores = [];
let compra;
let date = new Date();
const adiciona = () => {
    let produto = document.getElementById("produto").value;
    let qtd = document.getElementById("qtd").value;
    if (produto != null && qtd != null && qtd != 0) {
        if (produtos.includes(produto)) {
            let index = produtos.indexOf(produto);
            quantidades[index]++;
        } else {
            produtos.push(produto);
            quantidades.push(qtd);
        }
    }
    document.getElementById("produto").value = "";
    document.getElementById("qtd").value = "";
    let code = '';
    for (let i = 0; i < produtos.length; i++) {
        const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
        const produtoSemPreco = produtos[i].split("-");
        let preco = regexValor.exec(produtoSemPreco[1]);
        let precoQtd = preco[1].replace(',', '.') * quantidades[i];
        code += "<tr><td>" + produtoSemPreco[0] + "</td>";
        code += "<td>" + quantidades[i] + "</td>";
        code += "<td>" + precoQtd.toFixed(2) + "</td>";
        code += "<td class='text-center'>" + "<button class='btn btn-danger' style='width:50%; margin:auto;' onclick='removeFromCart(\"" + produtos[i] + "\")'> - </button></td></tr>"
    }
    let tbody = document.getElementById('cart');
    tbody.innerHTML = code;
    total();
}
const addToCart = (produtoCompleto, remove = false) => {
    let code = '';
    let tbody = document.getElementById('cart');
    let qtd = 1;
    if (produtos.includes(produtoCompleto)) {
        let index = produtos.indexOf(produtoCompleto);
        quantidades[index]++;
    } else {
        if (produto != null && qtd != null && qtd != 0 && produto != '' && remove == false) {
            produtos.push(produtoCompleto);
            quantidades.push(qtd);
        }
    }
    if (produtos.length == 0) {
        tbody.innerHTML = "";
        total();
        return;
    }
    for (let i = 0; i < produtos.length; i++) {
        const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
        const produtoSemPreco = produtos[i].split("-");
        let preco = regexValor.exec(produtoSemPreco[1]);
        let precoQtd = preco[1].replace(',', '.') * quantidades[i];
        code += "<tr><td>" + produtoSemPreco[0] + "</td>";
        code += "<td>" + quantidades[i] + "</td>";
        code += "<td>" + precoQtd.toFixed(2) + "</td>";
        code += "<td class='text-center'>" + "<button class='btn btn-danger' style='width:50%; margin:auto;' onclick='removeFromCart(\"" + produtos[i] + "\")'>-</button></td></tr>"
    }
    tbody.innerHTML = code;
    total();
}
const total = () => {
    let valorTotal = 0;
    const regexValor = /R\$ ([0-9]{1,5},[0-9]{2})/;
    for (let i = 0; i < produtos.length; i++) {
        let result = regexValor.exec(produtos[i]);
        valores[i] = result[1];
        valores[i] = valores[i].replace(',', '.');
        valorTotal += valores[i] * quantidades[i];
    }
    document.getElementById("total").innerHTML = "R$" + valorTotal.toFixed(2);
}
const finalizar = () => {
    let objProdutos = [];
    for (let i = 0; i < produtos.length; i++) {
        let produtojson = {
            nome: produtos[i],
            quant: quantidades[i],
        }
        objProdutos.push(produtojson);
    }
    compra = {
        'nome': document.getElementById("nomepessoa").value,
        'data': date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear(),
        'produtos': objProdutos
    }
    let jsonPronto = JSON.stringify(compra);
    document.getElementById("escondido").value = jsonPronto.toString();
    document.formzinho.submit();
}

function defineHistory() {
    let txt1 = "Sua amiga te avisou de última hora que vai almoçar com você hoje! São 10h da manhã e sua única opção é recorrer ao mercadinho na esquina da sua rua. Você tem R$ 50,00 para fazer suas compras!";
    let txt2 = "Você está indo para um encontro com os amigos e de última hora te encarregam de comprar os lanches! Sua única opção é recorrer ao mercadinho na esquina da sua casa. Você tem R$ 50,00 para fazer suas compras!";
    let rand = Math.round(Math.random() * (2 - 1) + 1);
    if (rand == 1) {
        document.getElementById("textoHistoria").innerHTML = txt1;
    } else {
        document.getElementById("textoHistoria").innerHTML = txt2;
    }
}
const removeFromCart = (product) => {
    const index = produtos.indexOf(product);
    if (index > -1) {
        produtos.splice(index, 1);
        quantidades.splice(index, 1);
    }
    // array = [2, 9]
    let vazio = '';
    addToCart(product, remove = true);
}