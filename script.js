
function bello(){
    var respuesta = document.getElementById("x1").value;
    if (respuesta ==="si"){
        let cambio = document.getElementById("rx1")
        cambio.innerHTML = "ciertamente"
    }
    else if (respuesta === "no"){
        document.getElementById("rx1").innerHTML = "no te creo"
    }
};


function division(){
    var numero = document.getElementById("x2").value;
    let convertido = parseInt(numero)
    if(convertido%2=== 0){
        document.getElementById("rx2").innerHTML = "Su numero es divisible por 2"
    }

   else  if(convertido%2 !== 0){
        document.getElementById("rx2").innerHTML = "Su numero no es divisible por 2"
    }
};