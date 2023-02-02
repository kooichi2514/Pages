// export default class CalculaIMC {
//     constructor(peso, altura) {
//         this.peso = Number(peso);
//         this.altura = Number(altura);
//         this.bmi = '';
//         this.msg = '';
//         this.getIMC();
//     }

//     getIMC() {
//         if(!this.peso) {
//             this.bmi = 'Peso Inválido'
//             return;
//         }
//         if(!this.altura || this.altura > 2.9) {
//             this.msg = 'Altura Inválida'
//             return;
//         }
//         const imc = this.peso / this.altura ** 2;
//         this.bmi = imc.toFixed(2);
//         this.msg = this.getNivelImc(this.bmi);

//     }

//     getNivelImc(imc) {
//         const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
//         'Obesidade grau 2',  'Obesidade grau 3'];
    
//         if (imc >= 39.9) {
//             return nivel[5];
//         }
//         if (imc >= 34.9) {
//             return nivel[4];
//         }
//         if (imc >= 29.9) {
//             return nivel[3];
//         }
//         if (imc >= 24.9) {
//             return nivel[2];
//         }
//         if (imc >= 18.5) {
//             return nivel[1];
//         }
//         if (imc < 18.5) {
//             return nivel[0];
//         }
//     }
// }

export default function CalculaIMC() {

    // this.display = btncalc;

    this.inicia = () => {
        // this.display.addEventListener('click', () => {
        //     this.getIMC();
        // });
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-calc')) {
                this.getIMC();
            }
        });
    };

    this.getIMC = () => {
        let peso = document.querySelector('.input-peso').value;
        let altura = document.querySelector('.input-altura').value;
        if(!peso) {
            this.bmi = 'Peso Inválido'
            return;
        }
        if(!altura || altura > 2.9) {
            this.msg = 'Altura Inválida'
            return;
        }
        const imc = peso / altura ** 2;

        let bmi = imc.toFixed(2);
        let msg = this.getNivelImc(bmi);
        this.setResultado(bmi, msg);

    };

    this.getNivelImc = (imc) => {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2',  'Obesidade grau 3'];
    
        if (imc >= 39.9) {
            return nivel[5];
        }
        if (imc >= 34.9) {
            return nivel[4];
        }
        if (imc >= 29.9) {
            return nivel[3];
        }
        if (imc >= 24.9) {
            return nivel[2];
        }
        if (imc >= 18.5) {
            return nivel[1];
        }
        if (imc < 18.5) {
            return nivel[0];
        }
    };

    this.setResultado = (bmi, mensagem) => {
        const imcResultado = document.querySelector('.imc-resultado');
        imcResultado.innerHTML = `${bmi} ${mensagem}`;
    };
}
