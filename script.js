const prompt = require('prompt-sync')();
let datos = prompt("Ingresa u numero para calcaular su factorial:");
let numero = Number(datos);

if(isNaN(numero) || numero < 0){
    console.log("Número incorrecto, por favor ingresa un numero entero válido");
} else {
    let resultado = 1;

    for(let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }

    console.log("El factorial de " + numero +  "es: " + resultado);
    
}