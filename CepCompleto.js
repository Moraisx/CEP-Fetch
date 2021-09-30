const limparFormulario = (endereco)=>{
    document.getElementById('bairro').value=" ";
    document.getElementById('endereço').value=" ";
    document.getElementById('bairro').value=" ";
    document.getElementById('cidade').value="";
    document.getElementById('estado').value=' ';
}
const preencherFormulario = (endereco)=>{
    document.getElementById('bairro').value=endereco.bairro;
    document.getElementById('endereço').value=endereco.logradouro;
    document.getElementById('bairro').value=endereco.bairro;
    document.getElementById('cidade').value=endereco.localidade;
    document.getElementById('estado').value=endereco.uf;
}
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep)=> cep.length==8 && eNumero(cep);

const pesquisarCep = async ()=>{
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const search = cep.replace("-","") 
    const url = `https://viacep.com.br/ws/${search}/json/`
    if(cepValido(cep)){
    const dados = await fetch(url);
    const  endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('cep').style.color='red';
            document.getElementById('cep').value=`${search} Cep Inexistente`
        }else{
            preencherFormulario(endereco)
        }
    }else{
        document.getElementById('cep').value=`${search} Cep Invalido`
    }
//fetch(url).then(response=>response.json()).then(console.log)

}
document.getElementById('cep')
.addEventListener('focusout', pesquisarCep);