//Atenção os metodos estaticos não tem acessso aos atributos da instancia !!
class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
        //Metodo de instancia
    aumentarVolume(){
        this.volume += 2
    }
        //Metodo de instancia
    diminuirVolume(){
        this.volume -= 2
    }

        //Metodo Estatico
    static trocaPilha(){
        console.log('Ok, vou trocar !')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log((controle1))

const controle2 = new ControleRemoto('Samsung')
console.log((controle2))

ControleRemoto.trocaPilha()
