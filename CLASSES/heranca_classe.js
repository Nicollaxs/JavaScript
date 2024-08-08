class Dispositivo {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado === true){
            console.log(`${this.nome} já está ligado`)
            return
        }
        this.ligado = true
    }

    desligar(){
        if(this.ligado !== true){
            console.log(`${this.nome} já esta desligado`)
            return
        }
        this.ligado = false
    }   
}

class Smartphone extends Dispositivo{
    constructor(nome, cor, modelo){
        super(nome) //Utilize o super para settar o atributo da classe pai ( esse atributo "nome") está indo pro pai
        this.cor = cor
        this.modelo = modelo
    }
}

const smartphone = new Smartphone('Samsung', 'Branco','Galaxy S10')
console.log(smartphone)

class Tablet extends Dispositivo{
    constructor(nome,temWifi){
        super(nome)
        this.temWifi = temWifi
    }
}