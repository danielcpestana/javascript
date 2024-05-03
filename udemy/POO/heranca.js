class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado`)
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return;    
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Você alterou o método ligar')
    }

    falaOi(){
        console.log('Fala dog!')
    }
}




const s1 = new Smartphone('Iphone', 'Preto', '12 pro');
s1.ligar();
console.log(s1)