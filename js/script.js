
// Função de clique do botão e verifica se o campo está vazio
document.querySelector('#add-tarefa').onclick = function () {
    if (document.querySelector('#novaTarefa input').value.length == 0) {
        alert('Por favor digite uma tarefa!');
    }
    // Se o campo não estiver vazio, cria uma nova div com a tarefa
    else {
        document.querySelector('#tarefas').innerHTML +=
            `<div class='tarefasCriadas'>
                <span class='nomeDaTarefa'>
                    ${document.querySelector('#novaTarefa input').value}
                </span>
                <button class='apagar'>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        
        `;

    }

    let tarefaAtual = document.querySelectorAll('.apagar');
    for (i = 0; i < tarefaAtual.length; i++) {
        tarefaAtual[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    let tarefaFinalizada = document.querySelectorAll('.tarefasCriadas');
    for (i = 0; i < tarefaFinalizada.length; i++) {
        tarefaFinalizada[i].onclick = function () {
            this.classList.toggle('finalizada');
        }
    }

    let limpaCampo = document.querySelector('#novaTarefa input').value = '';

}