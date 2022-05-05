let solucion;
let arraySol;


function changeDom(solucion) {
    let h2 = "Solución:";
    let p = solucion;
    
    document.getElementById("msg-h2").innerHTML = h2;
    document.getElementById("msg-p").innerHTML = p;
    botonCopy();
}

function entradaToString() {
    let entrada = document.querySelector("#entrada");
    let str = entrada.value.toLowerCase();
    console.log(str);
    return str;
}

function botonCopy() {
    
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = "Copiar";
        button.className = "btn-copy"

        button.onclick = function() {

            navigator.clipboard.writeText(solucion);
            button.remove();

        }

        let container = document.getElementById('btn-copy');
        container.appendChild(button); 
   
}

function encriptar() {
    

    let vocales = [["a","ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let strArray = Array.from(entradaToString());
    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (strArray[i] == (vocales[j][0])) {              
                strArray[i] =  vocales[j][1];
            }
        }
    }
    arraySol = strArray;
    let sol_parcial = strArray.toString();
    let regex = /,/g;
    solucion = sol_parcial.replace(regex, "");
    
   
    
    changeDom(solucion);
    
   

  
    return solucion;
}

function desencriptar() {

    let str = entradaToString();
    let vocales = [["a","ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < vocales.length; i++)
    if (str.includes(vocales[i][1])) {
        str = str.replaceAll(vocales[i][1], vocales[i][0]);

    }

    solucion = str;
    
   
    
    changeDom(solucion);

    return solucion;

}

