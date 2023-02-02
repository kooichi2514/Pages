export default function Tarefas(btnTarefa) {
    this.inputTarefa = document.querySelector('.input-tarefa');
    this.tarefas = document.querySelector('.tarefas');
    this.btnTarefa = btnTarefa;

    this.inicia = () => {
        this.enter();
        this.clique();
        this.apagar();
        this.adicionaTarefasSalvas();
    };

    this.clique = () => {
        this.btnTarefa.addEventListener('click', () => {
            if(!this.inputTarefa.value) return;
            this.criaTarefa(this.inputTarefa.value);
        });
    };
    this.enter = () => {
        this.inputTarefa.addEventListener('keypress', (e) => {
            if(e.keyCode === 13) {
                if(!this.inputTarefa.value) return;
                this.criaTarefa(this.inputTarefa.value);
            }
        });
    };
    this.apagar = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('apagar')) {
                el.parentElement.remove();
                this.salvarTarefas();
            }
        });
    };
    

    this.criaTarefa = (textoInput) => {
        const li = this.criaLi();
        li.innerText = textoInput;
        this.tarefas.appendChild(li);
        this.limpaInput();
        this.criaBotaoApagar(li);
        this.salvarTarefas();
    };

    this.criaLi = () => {
        const li = document.createElement('li');
        return li;
    };

    this.limpaInput = () => {
        this.inputTarefa.value = '';
        this.inputTarefa.focus();
    };

    this.criaBotaoApagar = (li) => {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'Apagar esta tarefa');
        li.appendChild(botaoApagar);
    };

    this.salvarTarefas = () => {
        const liTarefas = this.tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    };

    this.adicionaTarefasSalvas = () => {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            this.criaTarefa(tarefa);
        }
    };

}