const formulario = document.querySelector("#formT");
const input = document.querySelector("#inputT");
const lista = document.querySelector("#lista-tarefas");


const criarT = (valorInput) =>{
    const criar = document.createElement('li');
    criar.classList.add('elemento-lista');

    criar.appendChild(btnConcluir());
    criar.appendChild(textT(valorInput));
    criar.appendChild(btnExcluir());

    return criar;
}

const btnConcluir = () =>{
    const btnC = document.createElement('i');
    btnC.classList.add('bi', 'bi-circle', 'iconeC');
    
    btnC.addEventListener('click' , () => {
        const iconeAtual = btnC.classList.contains('bi-circle');
    if(iconeAtual){
        btnC.classList.replace('bi-circle', 'bi-check2')
    }else{
        btnC.classList.replace('bi-check2', 'bi-circle')
    }
    btnC.parentElement.classList.toggle('tarefaF');
     salvarDados();
    });

    return btnC;
}

const textT = (valorInput) => {
    const text = document.createElement('span');
    text.textContent = valorInput;
    text.classList.add('textoT');
    return text;
}

const btnExcluir = () =>{
    const btnE = document.createElement('i');
    btnE.classList.add('bi', 'bi-trash', 'iconeE');

    btnE.addEventListener('click', () =>{
        btnE.parentElement.remove();
        salvarDados();
    });

    return btnE;
}


const salvarDados = () =>{
    const tarefa = [...lista.querySelectorAll('li')].map((li) => {
       return {
        texto: li.querySelector('span').textContent,
        concluida: li.classList.contains('tarefaF')
       };
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefa));
}

const carregarDados = () =>{
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
    if(!tarefasSalvas) return;
    tarefasSalvas.forEach((tarefa) => {
        const criacao = criarT(tarefa.texto);

        if(tarefa.concluida) {
            criacao.classList.add('tarefaF');
            criacao.querySelector('i').classList.replace('bi-circle', 'bi-check2');
        }
          lista.append(criacao);
    });
}

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    const valorInput = input.value.trim();
    if(valorInput ===""){
        return;
    }
    const criacao = criarT(valorInput);
    lista.append(criacao);
    salvarDados();
    input.value = "";
})

carregarDados();