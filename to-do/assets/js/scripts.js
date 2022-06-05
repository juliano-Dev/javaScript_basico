const form = document.getElementById('tarefa');
const inputField = document.getElementById('task');

form.onsubmit = function(e){
    e.preventDefault();
    const inputField = document.getElementById('tarefa_input');
    
    addTarefa(inputField.value);
    form.reset();
          
};

function addTarefa(description){
    if (description === ''){
        alert('Preencha o campo descrição tarefa.');
    }else{

    
    const tarefaContainer = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const tarefaLabel = document.createElement('label');
    const tarefaDescricao = document.createTextNode(description);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', description);
    novaTarefa.setAttribute('id', description);

    tarefaLabel.setAttribute('for', description);
    tarefaLabel.appendChild(tarefaDescricao);

    tarefaContainer.classList.add('tarefa_item');
    

    tarefaContainer.appendChild(novaTarefa);
    tarefaContainer.appendChild(tarefaLabel);

    inputField.appendChild(tarefaContainer);

    }

}
