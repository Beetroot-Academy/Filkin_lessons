let form = document.querySelector('form')
let inputEmail = document.querySelector("#email")
let inputPass = document.querySelector("#pass")


form.addEventListener('submit',  async function submit(event){
event.preventDefault()
    let post = {
        "email": inputEmail.value,
        "password": inputPass.value,
      }
     let respons = await fetch('https://awesome-wallet-app.herokuapp.com/auth/login', {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json;charset=utf-8",
    }
        })
        let res = await respons.json();
        console.log(res)
        if(res.code == 200){
            let tokin = res.data.accessToken;
            document.cookie = `Authorization=${tokin}`;
            console.log('registration successfull');
        }else{
            console.log('error');
        }
})