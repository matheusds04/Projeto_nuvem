async function CadastrarLivro(){
    event.preventDefault()
    var cookie = document.cookie
    var posicao = cookie.indexOf("token=")
    var cookie_token = cookie.slice(posicao+6)
    body = {
        "titulo": document.getElementById("titulo").value,
        "autor": document.getElementById("autor").value,
        "genero":document.getElementById("genero").value,
        "numPaginas":document.getElementById("numPaginas").value,
        "url":document.getElementById("url").value
    }
    await fetch("https://api-nuvem.herokuapp.com/v1/livros",{
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8","token": cookie_token}
      })
        .then(response => response.json()) 
        .then(result => {
                window.location.href = "index.html";
        })
        .catch(err => {
        console.error('Failed retrieving information', err)
        alert("ERRO AO CADASTRAR LIVRO")
    })
}