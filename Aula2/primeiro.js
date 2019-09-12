const nome = 'Gregory'

document.getElementById('nome').innerHTML = nome

var text ='Escopo em Javascript';

function createPhrase(textA, textB) {

    var textC= 'função é chamada diretamente';
    console.log(this);//imprime window
    console.log(textA + textB + ' - '+textC);
    //Entendendo como funciona escopo em javascript
    //Quando uma função é chamada diretamente
}
createPhrase('Entendendo como funciona', text);