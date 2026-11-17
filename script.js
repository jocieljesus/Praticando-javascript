let nomeEntrada =document.querySelector("#nome-entrada")
let btnTroca = document.querySelector("#btn-troca")
let visitante = document.querySelector("#nome-saida")


btnTroca.addEventListener('keypress', function(){
     visitante.style.backgroundColor = "green"
})

document.querySelector("#btn-troca").addEventListener('mouseenter', () =>  visitante.style.fontSize = "1.6rem" )


btnTroca.addEventListener('click', () =>  {
     visitante.textContent = nomeEntrada.value 
     visitante.style.color = "red"
} )

/*

btnTroca.addEventListener('click', trocarNome)


function trocarNome(){
    visitante.textContent =  nomeEntrada.value
}
*/

const caixa =  document.getElementById("caixa")
const btnVerde =  document.getElementById("btn_verde")
const btnAzul =  document.getElementById("btn_azul")
const btnAmarelo =  document.getElementById("btn_amarelo")


btnVerde.addEventListener('click', ()=>{
    caixa.style.backgroundColor = "green"
})


btnAzul.addEventListener('click', ()=>{
    caixa.style.backgroundColor = "blue"
})

btnAmarelo.addEventListener('click', ()=>{
    caixa.style.backgroundColor = "yellow"
})




const valorReal =  document.getElementById("valor_real")
const btnMenos =  document.getElementById("btn_menos")
const btnMais =  document.getElementById("btn_mais")



btnMais.addEventListener( 'click', () => {
    valorReal.textContent ++;
})

btnMenos.addEventListener( 'click', () => {
    if(valorReal.textContent > 0){
        valorReal.textContent --;
    } else {
        alert("nao permitido")
    }
})

const nomeLivro = document.getElementById("nome_livro")
const btnAdicionar =document.getElementById("adiciona_livro")

const listaLivros = document.getElementById("lista_livros")
const btnRemover = document.getElementById("remover_livro")

btnAdicionar.addEventListener('click', () => {
    
    const novoLivro = document.createElement("li")
    novoLivro.textContent = nomeLivro.value


    const btnX = document.createElement("button")
    btnX.textContent = "X"
    btnX.classList.add("btn_x")
    novoLivro.appendChild(btnX)

    listaLivros.appendChild(novoLivro)

    btnX.addEventListener('click', () => {novoLivro.remove()})

    nomeLivro.value = ""
})


btnRemover.addEventListener("click", () => {
    listaLivros.innerHTML = ""
})

