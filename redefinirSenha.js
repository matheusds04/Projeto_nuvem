async function RedefinirSenha(){
    event.preventDefault()
    if(document.querySelector("#senha").value == document.querySelector("#confirmarSenha").value ){
        body = {
            "CPF":document.getElementById("CPF").value,
            "senha":document.getElementById("senha").value
        }
        await fetch("https://api-nuvem.herokuapp.com/v1/redefinirSenha",{
            method: "PUT",
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
            alert("ERRO AO REDEFINIR SENHA")
        })
    }else{
        alert("Você precisa confirmar a senha")
    }
}