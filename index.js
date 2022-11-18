function CriarBox(titulo_res, autor_res, genero_res, id_res, url_res){
    var a = document.createElement('a')
    var imagem = document.createElement('img')
    var div = document.createElement('div')
    var titulo = document.createElement('p')
    var autor = document.createElement('p')
    var genero = document.createElement('p')
    div.appendChild(imagem)
    div.appendChild(titulo)
    div.appendChild(autor)
    div.appendChild(genero)
    a.appendChild(div)
    a.setAttribute("href", `livro.html?id=${id_res}`)
    imagem.setAttribute("src", url_res)
    titulo.innerHTML = titulo_res
    autor.innerHTML = autor_res
    genero.innerHTML = genero_res
    div.classList.add("box-livro")
    imagem.classList.add("capa-livro")
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
        var url_imagem = livro.url
        section.appendChild(CriarBox(titulo,autor,genero,id, url_imagem))
    }); 
}
async function buscarLivros(){
    await fetch("https://api-nuvem.herokuapp.com/v1/livros")
        .then(response => response.json()) // retorna uma promise
        .then(result => {
            console.log(result)
            renderizarBox(result);
        })
        .catch(err => {
        // trata se alguma das promises falhar
        console.error('Failed retrieving information', err)})
}

window.onload = buscarLivros()