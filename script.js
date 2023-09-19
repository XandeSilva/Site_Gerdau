
const produtos = [
    {
        id: "1",
        nome: "Perfil Estrutural",
        preco_de: 50,
        preco_por: 40,
        descricao: "R$40,00",
        imagem: "./img/produtos/1.png",
    },
    {
        id: "2",
        nome: "Perfil I (Viga I)",
        preco_de: 120,
        preco_por: 100,
        descricao: "R$100,00",
        imagem: "./img/produtos/2.png",

    },
    {
        id: "3",
        nome: "Coluna Pronta",
        preco_de: 80,
        preco_por: 60,
        descricao: "R$60,00",
        imagem: "./img/produtos/3.png",
    },
    {
        id: "4",
        nome: "Treliça",
        preco_de: 80,
        preco_por: 67,
        descricao: "R$67,00",
        imagem: "./img/produtos/4.png",
    },



    {
        id: "5",
        nome: "Barras de Transferência",
        preco_de: 50,
        preco_por: 40,
        descricao: "R$40,00",
        imagem: "./img/produtos/5.webp",
    },
    {
        id: "6",
        nome: "Prego com Cabeça Dupla",
        preco_de: 50,
        preco_por: 40,
        descricao: "R$40,00",
        imagem: "./img/produtos/6.webp",
    },
    {
        id: "7",
        nome: "Eletrodo Revestido Gerdau",
        preco_de: 120,
        preco_por: 100,
        descricao: "R$100",
        imagem: "./img/produtos/7.webp",
    },
    {
        id: "8",
        nome: "Prego com Cabeça",
        preco_de: 50,
        preco_por: 40,
        descricao: "R$40,00",
        imagem: "./img/produtos/8.webp",
    },
    {
        id: "9",
        nome: "Prego Galvanizado",
        preco_de: 40,
        preco_por: 30,
        descricao: "R$30,00",
        imagem: "./img/produtos/9.webp",
    },
    {
        id: "10",
        nome: "Prego Telheiro Galvanizado",
        preco_de: 60,
        preco_por: 50,
        descricao: "R$30,00",
        imagem: "./img/produtos/10.webp",
    },
    {
        id: "11",
        nome: "Prego Ardox",
        preco_de: 70,
        preco_por: 65,
        descricao: "R$65,00",
        imagem: "./img/produtos/11.webp",
    },
    {
        id: "12",
        nome: "Prego para Taco",
        preco_de: 90,
        preco_por: 87,
        descricao: "R$87,00",
        imagem: "./img/produtos/12.webp",
    },
   
    ];

   
    function renderizaProdutos(){
   
        let html = "";


        for (let i = 0; i < produtos.length; i++) {

            html = html + criaProduto(produtos[i], i);
        }


        return html;
    }

   
    function criaProduto(produto, index) {


        return `
        
        <div class="curso">
            <img class='inicio' title="t" src="${produto.imagem}" />
            <div class="curso-info">
                <p>${produto.nome}</p>
            
                <h3>${produto.descricao}</h3>
            </div>
            <div class="curso-preco">
                <span class="preco-de"R$${produto.preco_de}</span>
                <span class="preco-por"R$${produto.preco_por}</span>

                <button class="curtir-btn">
                 <i class="far fa-heart"></i>
          </button>
          
                <button class="btncar btn-add" data-index="${index}"></button>
            </div>
        </div>
       
        `;
    }

    const container = document.querySelector('#container')

   
    container.innerHTML = renderizaProdutos();

   
    const carrinhoItens = {}

    function renderizaCarrinho(){

       
        let html = '';

     
        for (let produtoId in carrinhoItens) {

      
            html = html + criaItemCarrinho(carrinhoItens[produtoId]);
        }

       
        document.querySelector('.carrinho_itens').innerHTML = html;
    }

    
    function criaItemCarrinho(produto) {

        return `
        <div class="carrinho_compra">
            <h4>${produto.nome}</h4>
            <p>Preço unidade:${produto.preco_por}| Quantidade:${produto.quantidade}</p>
            <p>Valor: R$:${produto.preco_por*produto.quantidade}</p>
            <button data-produto-id="${produto.id}" class="btn-remove"></button>
        </div>
        `;
    }

    
 
    function criaCarrinhoTotal() {

        
        let total = 0;

       
        for (let produtoId in carrinhoItens) {

          
            total = total + carrinhoItens[produtoId].preco_por *carrinhoItens[produtoId].quantidade;
        }

        
        document.querySelector('.carrinho_total').innerHTML = `
        <h4>Total: <strong> R$${total}</strong></h4>
        <a href="#" target="_blank">
        <ion-icon name="card-outline"></ion-icon>
        <strong>Comprar Agora</strong>
              </a>
        `;}

    
    function adicionaItemNoCarrinho(produto) {

        
        if (!carrinhoItens[produto.id]) {

            
            carrinhoItens[produto.id] = produto;

            
            carrinhoItens[produto.id].quantidade = 0;

           
        }++carrinhoItens[produto.id].quantidade;

       
        renderizaCarrinho();

     
        criaCarrinhoTotal();}

    document.body.addEventListener('click', function (event) {

       
        const elemento = event.target;

        
        if (elemento.classList.contains('btn-add')) {

            
            const index = parseInt(elemento.getAttribute('data-index'), 10);

           
            const produto = produtos[index];

        
            adicionaItemNoCarrinho(produto);
        }

       
        if (elemento.classList.contains('btn-remove')){

         
            const produtoId = elemento.getAttribute('data-produto-id');
            
          
            if (carrinhoItens[produtoId].quantidade <= 1) {
                delete carrinhoItens[produtoId];
            }   else {
                --carrinhoItens[produtoId].quantidade;
            }

            renderizaCarrinho();

           
            criaCarrinhoTotal();
        }
    });
    
    function toggleMode(){
        let html = document.documentElement
        html.classList.toggle('light')
    }



document.addEventListener("DOMContentLoaded", function () {
    const curtirButtons = document.querySelectorAll(".curtir-btn");
    const likedList = document.getElementById("liked-list");

    curtirButtons.forEach((button, index) => {
        let curtido = false;
        button.addEventListener("click", function () {
            if (!curtido) {
                curtido = true;
                button.innerText = "Curtir";
                likedList.innerHTML = "<img src=img/produtos/1.png width='150'>";
            } else {
                curtido = false;
                button.innerText = "Remover";
                const images = likedList.querySelectorAll("li");
                if (images.length > 0) {
                    likedList.removeChild(images[images.length - 1]);
                }
            }
        });
    });
});