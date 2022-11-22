async function Login(){
        event.preventDefault()
        body = {
            "login":document.getElementById("login").value,
            "senha":document.getElementById("senha").value
        }
        await fetch("https://api-nuvem.herokuapp.com/v1/login",{
            method: "POST",
            mode:"cors",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8",}
          })
            .then(response => response.json()) // retorna uma promise
            .then(result => {
                if(result.token != ""){
                    document.cookie = `token=${result.token};"";Samesite=none;Secure; path=/`
                    window.location.href = "index.html"
                }else{
                    alert("Usuário ou senha incorretos")
                }
            })
            .catch(err => {
            console.error('Failed retrieving information', err)
            alert("ERRO AO FAZER LOGIN")
        })
}