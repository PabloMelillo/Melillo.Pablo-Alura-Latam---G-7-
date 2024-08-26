const texArea = document.querySelector(".tex__area");
const mensaje = document.querySelector(".tex__area__respuesta");
const $content = document.getElementById('texarea'),
      $botonCopiar = document.getElementById('botonCopiar')





function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value ="";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let x = 0; x < matrizCodigo.length; x++){
        if(stringEncriptado.includes(matrizCodigo[x][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1])

        }

    }
    return stringEncriptado
}

    function btndesencriptar(){
        const textoEncriptado = desencriptar(texArea.value)
        mensaje.value = textoEncriptado
        texArea.value ="";
       
    }

    function desencriptar(stringDesencriptado){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptado = stringDesencriptado.toLowerCase()
    
        for(let x = 0; x < matrizCodigo.length; x++){
            if(stringDesencriptado.includes(matrizCodigo[x][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[x][1], matrizCodigo[x][0])
    
            }
    
        }
        return stringDesencriptado
    
    }  

$botonCopiar.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');
})  
    