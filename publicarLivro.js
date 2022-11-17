async function CadastrarLivro(){
    event.preventDefault()
    body = {
        "titulo": document.getElementById("titulo").value,
        "autor": document.getElementById("autor").value,
        "genero":document.getElementById("genero").value,
        "numPaginas":document.getElementById("numPaginas").value
    }
    await fetch("https://api-nuvem.herokuapp.com/v1/livros",{
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
        .then(response => response.json()) // retorna uma promise
        .then(result => {
            console.log(result)
            window.location.href = "index.html";
        })
        .catch(err => {
        // trata se alguma das promises falhar
        console.error('Failed retrieving information', err)})
        alert("ERRO AO CADASTRAR LIVRO")
}