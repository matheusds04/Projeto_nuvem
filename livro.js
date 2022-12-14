const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") // livros

function CriarBox(titulo_res, autor_res, genero_res, id_res, url){
    var a = document.createElement('a')
    var div = document.createElement('div')
    var titulo = document.createElement('p')
    var autor = document.createElement('p')
    var genero = document.createElement('p')
    var imagem = document.createElement('img') 
    div.appendChild(imagem)
    div.appendChild(titulo)
    div.appendChild(autor)
    div.appendChild(genero)
    a.appendChild(div)
    a.setAttribute("href", `livro.html?id=${id_res}`)
    imagem.setAttribute("src",`${url}`)
    titulo.innerHTML = titulo_res
    autor.innerHTML = autor_res
    genero.innerHTML = genero_res
    div.classList.add("box-livro")
    imagem.classList.add("capa-livro")
    return a
}

function renderizarBox(responseJSON){
    var livro = responseJSON;
    var section = document.querySelector(".box-livros")
    var titulo = livro.titulo
    var autor = livro.autor
    var genero = livro.genero
    var id = livro._id
    var url_imagem = livro.url 
    section.appendChild(CriarBox(titulo,autor,genero,id, url_imagem))
}

async function BuscarLivro(){
    await fetch(`https://api-nuvem.herokuapp.com/v1/livros/${id}`)
        .then(response => response.json()) // retorna uma promise
        .then(result => {
            renderizarBox(result)
        })
        .catch(err => {
        // trata se alguma das promises falhar
        console.error('Failed retrieving information', err)})
}

window.onload = BuscarLivro