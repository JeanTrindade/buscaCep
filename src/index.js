const cep = document.querySelector('#cep');
const btn = document.querySelector('#btn');

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector('#'+campo).value = result[campo];
            console.log(campo);
        }
    }
}


btn.addEventListener("click", (e)=>{
    let search = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors', 
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`,options)
    .then(response => { response.json()
        .then(data => showData(data))
    })
    .catch(e => alert('ops, deu erro' + e,message))

})
