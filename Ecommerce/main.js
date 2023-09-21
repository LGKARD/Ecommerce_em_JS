import { iniciarCarrinho } from "./src/menuCarrinho";


const catalogo = [
    {
        id: 1,
        nome: "PS5",
        marca: "Sony",
        preco: 3999,
        nomeArquivoImagem: "ps5.jpg",
    },
    {
        id: 2,
        nome: "Xbox Series S",
        marca: "Microsoft",
        preco: 2499,
        nomeArquivoImagem: "xboxS.jpg",
    },
    {
        id: 3,
        nome: "Xbox Series X",
        marca: "Microsoft",
        preco: 4299,
        nomeArquivoImagem: "xboxX.jpg",
    },
    {
        id: 4,
        nome: "Nintendo Switch",
        marca: "Nintendo",
        preco: 2.499,
        nomeArquivoImagem: "switch.jpg",
    },
    
]
let cartaoProduto = '';
catalogo.forEach(produto => {
    cartaoProduto += `<div class='class="border-solid border-2 border-sky-500 w-96 m-1' id="card-produto-${catalogo.id}">
    <img src="./assets/img/${produto.nomeArquivoImagem}" 
    alt="produto 1"
    style="height: 300px;"
    />
    <p class='marca'>${produto.marca}</p>
    <p>${produto.nome}</p>
    <p>R$${produto.preco}</p>
    
    <button>Adicionar</button>
    </div>`
})

document.getElementById("container-produto").innerHTML += cartaoProduto;

iniciarCarrinho();