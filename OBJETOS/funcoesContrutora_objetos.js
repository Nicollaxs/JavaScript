function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque',{
        enumerable : true, //mostra a chave quando você usa for in
        value : estoque, //valor
        writable : true, //pode alterar ou não o valor
        configurable : true // é configuravel ?      -> Quando está falso não é permitido nem apagar a chave
    })

    //Dessa maneira você define as propriedades de varias chaves de uma só vez

    Object.defineProperties(this,{
        nome : {enumerable : true,value : nome, writable : true,configurable : false},
        preco: {enumerable : true,value : preco, writable : true,configurable : true},
    })

    //Utilizando getter e setter
    Object.defineProperty(this, 'estoque',{
        enumerable : true,
        configurable : true,
        get : function(){
            return estoque
        },
        set : function(valor){
            if(typeof valor !== 'string'){
                console.log('Bad Value')
                return;
            }
            estoque = valor
        }
    })

}

const p1 = new Produto('Camiseta',20,3)
p1.estoque = 'Principal'
console.log(p1)
console.log(p1.estoque)


// para ver as chaves de um objeto
console.log(Object.keys(p1))
//ou

for(let chave in p1)
    console.log(chave)