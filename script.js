/*
Casa sensitive = Reconhece Letras maiusculas e minusculas

Por Tag: getElementByTagName()
Por Id: get ElementByID()
Por Nome: getElementsByName()
Por Classe: getElemetsByClassName()
Por Seletor: querySelector()
 */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.lenght < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'white'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'white'
    }

}

function validaEmail() {
    let txtNome = document.querySelector('#txtEmail')
    
    if (email.value.indexOf('@' ││ email.value.indexOf('.')) == -1) {
    	txtEmail.innerHTML = 'E-mail Inválido'
    	txtEmail.style.color = 'red'
    	}else{
    		txtEmail.innerHTML = 'E-mail Válido'
    		txtEmail.style.color = 'green'
    	}
}

