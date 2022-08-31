//var inputTexto = document.querySelector(".input-texto");
//var mensagem = document.querySelector(".mensagem");



function btnCriptografar() {
    
    let inputTexto = document.getElementById("entrada").value;
    let textoEncriptado = criptografar(inputTexto);
    //console.log(textoEncriptado);
    let saida = document.querySelector('#saida');
    saida.innerHTML = textoEncriptado;
}

function criptografar(stringCriptografar) {
    //let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    var textoc = stringCriptografar.toLowerCase();
    var textoCriptografado = textoc
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    
    return textoCriptografado;
}

function btnDescriptografar() {
    
    let inputTexto = document.getElementById("entrada").value;
    let textoDescriptado = descriptografar(inputTexto);
    //console.log(textoDescriptado);
    let saida = document.querySelector('#saida');
    saida.innerHTML = textoDescriptado;
}

function descriptografar(stringDescriptografar) {
    //let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    var textod = stringDescriptografar.toLowerCase();
    var textoDescriptografado = textod
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    
    return textoDescriptografado;
}

function copiar() {
    let inputTexto = document.getElementById("saida").value;
    //inputTexto.select();
    //inputTexto.set.SelectionRange(0, 99999);
    navigator.clipboard.writeText(inputTexto);
    alert("Texto Copiado: " + inputTexto);
}