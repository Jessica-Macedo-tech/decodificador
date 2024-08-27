var textArea = document.querySelector(".texto1");
var mensagem = document.querySelector(".texto2");

function bt__criptografar(){
var textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function criptografar(stringencriptada){

    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringencriptada = stringencriptada.toLowerCase();

    for(let i =0; i< matrizcodigo.length; i++) {
        if(stringencriptada.includes(matrizcodigo[i][0])){
            stringencriptada = stringencriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);

        }      
    }

    return stringencriptada;

}

function bt__descriptografar(){
    var textoDescriptado = descriptografar(textArea.value);
        mensagem.value = textoDescriptado;
        textArea.value = "";
    
    }
    
    function descriptografar(stringdescriptada){
    
        let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
        stringdescriptada = stringdescriptada.toLowerCase();
    
        for(let i =0; i< matrizcodigo.length; i++) {
            if(stringdescriptada.includes(matrizcodigo[i][1])){
                stringdescriptada = stringdescriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
    
            }      
        }
    
        return stringdescriptada;
    }





