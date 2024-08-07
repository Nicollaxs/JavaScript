//Valor por referencia 
//                  0       1       2
const nomes = ['Eduardo','Maria','Joana']
//para deletar dessa maneira fica empty o indice 
delete nomes[2]

//Se você quiser copiar um array para outro array :
//Dessa maneira você está apontando para o mesmo endereço de memoria :
const nomesCopia = nomes;

//Dessa maneira você está fazendo uma copia 
const nomesCopia2 = [...nomes]

//Para pegar o tamanho do array 
console.log(nomes.length)

//Para converter strings em array, use a funcao split como parametro use um delimitador da sua 
//preferencia
const nome = 'Nicollas Gabriel Oliveira Sousa'
const meuNome = nome.split(' ')
console.log(meuNome)

// para unir todos os valores do array de volta para string 
const meuNomeString = meuNome.join(' ')
console.log(meuNomeString)

