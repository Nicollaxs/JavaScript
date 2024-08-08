// fetch('pessoas.json')
// .then(resposta=>resposta.json()) //converteu o conteudo em .json
// .then(json => carregaElementosNaPagina(json))

//Para fazer com axios
axios('pessoas.json')
.then(resposta=>carregaElementosNaPagina(resposta.data))

// function criaLi(){
//     const li = document.createElement('li')
//     return li
// }

function criaTr(){
    const tr = document.createElement('tr')
    return tr;
}

function criaTd(){
    const td = document.createElement('td')
    return td;
}
function carregaElementosNaPagina(json){
    // const elemento = document.querySelector('.lista')
    // for(let pessoa of json){
    //     const li = criaLi()
    //     li.innerText = pessoa.nome
    //     elemento.appendChild(li)
    // }
    const elemento = document.querySelector('.tabela')

    const tabela = document.createElement('table')
    for(let pessoa of json){
        const tr = criaTr()

        let td1 = criaTd()
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1)
        
        let td2 = criaTd()
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2)
 
        tabela.appendChild(tr)
    }
    elemento.appendChild(tabela)
}
