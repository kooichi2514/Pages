export default function timer(relogio) {
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        
        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');  
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    });
}