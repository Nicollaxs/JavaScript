//declaração de função hosting
function falaOi(){
    console.log('Oie')
}

//Frist-class objects (Objetos de primeira classe)
//Function expression

const souUmDado = function(){
    console.log('Sou um dado')
}

//souUmDado();\

function executaFuncao(funcao){
    console.log('Vou executar sua funcao abaixo : ')
    funcao()
}

// Arrow function

const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
}

// Dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando')
    }
}





