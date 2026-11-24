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
    btnC.classList.toggle('bi-check2', iconeAtual);
    btnC.classList.toggle('bi-circle', !iconeAtual);
    btnC.parentElement.classList.toggle('tarefaF');
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
        btnE.parentElement.remove()
    });

    return btnE;
}

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    const valorInput = input.value.trim();
    if(valorInput ===""){
        return;
    }
    const criacao = criarT(valorInput);
    lista.append(criacao);
    input.value = "";
})