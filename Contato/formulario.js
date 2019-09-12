
function Contato(){
  this.nome ="";
  this.email ="";
  this.descricao ="";

  this.setNome = function(nome){
    this.nome = nome;
  }

  this.setEmail = function(email){
    this.email = email;
  }

  this.setDescricao = function(descricao){
    this.descricao = descricao;
  }
}

function enviarEmail() {
  const campoNome = document.querySelector('#nome').value
  const campoEmail = document.querySelector('#email').value
  const campoDescricao = document.querySelector('#descricao').value

  var objetoJSON = {
    nome: campoNome,
    email:campoEmail,
    descricao:campoDescricao
  }

   var obj = new Contato();
   obj.setNome(campoNome);
   obj.setEmail(campoEmail);
   obj.setDescricao(campoDescricao);
}
