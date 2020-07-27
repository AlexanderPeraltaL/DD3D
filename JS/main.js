document.getElementById("enviar").addEventListener("click", enviarDatos);
document.getElementById("cantidad").addEventListener("keyup", enviarDatos);
document.getElementById("valor-unitario").addEventListener("keyup", enviarDatos);


function enviarDatos(evento){
    var cantidad, valor_unitario, total;
    cantidad = document.getElementById("cantidad").value;
    valor_unitario = document.getElementById("valor-unitario").value;
    
    total = cantidad * valor_unitario;

    document.getElementById("valor-total").value = total;

    console.log(evento.type)
    if(evento.type == "click"){

      evento.preventDefault();
    }
}

function sumar (a, b){
    var sum;
    sum = a + b + 1;
    console.log(sum)    
}



/*
var numero1;
var numero3, suma;

numero1 = 8;
numero3 = 5;
suma = numero1 + numero3

console.log("la suma es: " + suma);
*/
