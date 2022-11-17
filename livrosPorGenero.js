const urlParams = new URLSearchParams(window.location.search);
const genero = urlParams.get("genero") 

function CriarBox(titulo_res, autor_res, genero_res, id_res){
    var a = document.createElement('a')
    var div = document.createElement('div')
    var titulo = document.createElement('p')
    var autor = document.createElement('p')
    var genero = document.createElement('p')
    var id = 
    div.appendChild(titulo)
    div.appendChild(autor)
    div.appendChild(genero)
    a.appendChild(div)
    a.setAttribute("href", `livro.html?id=${id_res}`)
    titulo.innerHTML = titulo_res
    autor.innerHTML = autor_res
    genero.innerHTML = genero_res
    div.classList.add("box-livro")
    return a
}

function renderizarBox(responseJSON){
    var livros = responseJSON;
    var section = document.querySelector(".box-livros")
    livros.forEach(livro => {
        var titulo = livro.titulo
        var autor = livro.autor
        var genero = livro.genero
        var id = livro._id
        section.appendChild(CriarBox(titulo,autor,genero,id))
    }); 
}

async function BuscarLivroPorGenero(){
    await fetch(`https://api-nuvem.herokuapp.com/v1/livros/generos/${genero}`)
        .then(response => response.json()) // retorna uma promise
        .then(result => {
            renderizarBox(result)
        })
        .catch(err => {
        // trata se alguma das promises falhar
        console.error('Failed retrieving information', err)})
}
