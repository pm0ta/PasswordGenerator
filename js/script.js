let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor'); 
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');
 
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVYXYZ0123456789'; //conjunto de caracteres
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword() { //gerar senha

  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));    
  }

  containerPassword.classList.remove('hide');
  password.innerHTML = pass;

  novaSenha = pass; //Agora a variável novaSenha tem como valor a senha que foi gerada.

  localStorage.setItem('Senha', novaSenha);

}

function copyPassword() {
  alert('Senha copiada com sucesso 💜');
  navigator.clipboard.writeText(novaSenha);
}

function viewSenha() {
  let ultSenha = localStorage.getItem('Senha');
  alert(`Sua última senha gerada foi: ${ultSenha}`);
}