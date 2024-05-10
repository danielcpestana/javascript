class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')

        });

    }

    Sequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    }

     static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length +1;
        for(let stringNumerica of cpfSemDigitos) {

            total += reverso * Number(stringNumerica);
            reverso--;

        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.Sequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}

// let validacpf = new ValidaCPF('070.987.720-03');

// if(ValidaCPF.valida()) {
//     console.log('CPF válido')
// } else {
//     console.log('CPF inválido')
// }