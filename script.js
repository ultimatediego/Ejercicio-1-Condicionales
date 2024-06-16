function bello(){
    var respuesta = document.getElementById("x1").value;
    if (respuesta ==="si"){
        document.getElementsByClassName("rx1").innerHTML = "ciertamente"
    }
    else if (respuesta === "no"){
        document.getElementsByClassName("rx1").innerHTML = "no te creo"
    }
}
