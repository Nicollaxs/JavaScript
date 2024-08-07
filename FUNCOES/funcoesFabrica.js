//São funcoes que retornam um objeto (Factory function)
function criaPessoa(nome,sobrenome,alt,pes){
    return {
        nome,  
        sobrenome,
        //Usando a palavra getter você consegue obter o valor dessa função sem ser nescessario 
        //chama-la como função
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Usando a palavra setter você consegue settar o valor dessa função sem ser nescessario 
        //chama-la como função
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join()
            console.log(valor)
        },

        fala : function(assunto){
            return `${this.nome} está ${assunto}.`
        },

        altura : alt,
        peso : pes,
        //Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const pessoa = criaPessoa('Nicollas', 'Gabriel',1.85,80)
pessoa.nomeCompleto = "Maria de Oliveira Silva"
console.log(pessoa.nomeCompleto)
//console.log(pessoa.imc)
//O this sempre vai se referir a quem está chamando então nesse caso "PESSOA"


