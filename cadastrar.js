async function CadastrarUsuario(){
    event.preventDefault()
        body = {
            "CPF":document.getElementById("CPF").value,
            "login":document.getElementById("login").value,
            "senha":document.getElementById("senha").value
        }
        await fetch("https://api-nuvem.herokuapp.com/v1/cadastrarUsuario",{
            method: "POST",
            mode:"cors",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8",}
          })
            .then(response => response.json()) // retorna uma promise
            .then(result => {
                window.location.href = "login.html"
            })
            .catch(err => {
            console.error('Failed retrieving information', err)
            alert("ERRO AO CADASTRAR USUARIO")
        })
}