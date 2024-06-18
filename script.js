
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
        document.getElementById("rx2").innerHTML = "Su numero "+convertido + " es divisible por 2"
    }
    else  if(convertido%2 !== 0){
        document.getElementById("rx2").innerHTML = "Su numero "+convertido + " no es divisible por 2"
    }
};

function premio(){
    var numero = document.getElementById("x4").value;
    let convertido = parseInt(numero)
    if(convertido === 1000){
        document.getElementById("rx4").innerHTML = "Ganaste un premio"
    }
    else  if(convertido !== 1000){
        document.getElementById("rx4").innerHTML = "Losentimos sigue participando"
    }
};

function calcular(){
    let a = parseInt(document.getElementById("ax5").value)
    let b = parseInt(document.getElementById("bx5").value)
    if(a<b){
        document.getElementById("rx5").innerHTML = a + " es menor que "+b
    }
    else if(b<a){
        document.getElementById("rx5").innerHTML = b + " es menor que "+a
    }
};

function calcular2(){
    let a = parseInt(document.getElementById("ax6").value)
    let b = parseInt(document.getElementById("bx6").value)
    if(a<b){
        document.getElementById("rx6").innerHTML = a + " es menor que "+b
    }
    else if(b<a){
        document.getElementById("rx6").innerHTML = b + " es menor que "+a
    }
    else{
        document.getElementById("rx6").innerHTML = a + " es igual "+b
    }
};