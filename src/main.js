import carregaScript from './modules/carregador';
import './assets/css/style.css';


let paginaAtual = '';

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        const href = el.getAttribute('href');
        e.preventDefault();
        paginaAtual = href;
        axios(href)
            .then(resposta => carregaResultado(resposta.data));
            
        carregaScript(paginaAtual);
    }

});


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
