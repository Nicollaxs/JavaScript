//ajax assincrono javaScript XML


//Crie uma funçãorequest que vai ter um xhr, utilizamos um contrutor XMLHttpRequest
const request = obj=>{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method,obj.url,true)
        xhr.send();
    
        xhr.addEventListener('load', ()=>{
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click',(e)=>{
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()

    if(tag==='a'){
        e.preventDefault()
        carregaPagina(elemento)
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href')
    console.log(href)

    const objConfig = {
        method : 'GET',
        url : href,
    }

    const response = await request(objConfig)
   loadResultado(response)
}

function loadResultado(text){
    const divDaPagina = document.querySelector('.resultado')
    divDaPagina.innerHTML = text
}