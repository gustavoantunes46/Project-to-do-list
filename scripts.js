const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []


function AdicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa:input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()


}


function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach((item,posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}"> 
            <img src="./img/checked.png" alt="Check" onclick ="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="Trash" onclick="deletarItem(${posicao})">
        </li>
            
        `



    })
    
    ListaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    
    mostrarTarefas()

}




function deletarItem (posicao) {
    minhaListaDeItens.splice(posicao, 1)
    console.log(posicao)
    mostrarTarefas()

}
function recarregarTarefas (){
    const tarefasDoLocalStorage =localStorage.getItem('lista')
    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', AdicionarNovaTarefa)