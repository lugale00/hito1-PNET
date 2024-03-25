
document.addEventListener("DOMContentLoaded", function() {
    let formDatos = document.getElementById("registro");
    formDatos.addEventListener("submit", function(event) {
        let nombre = document.getElementById("nombre");
        let resNombre = esNombre(nombre); //comprobamos que el nombre sea correcto
        let apellido = document.getElementById("apellidos");
        let resApellido = esApellido(apellido); //comprobamos que el apellido sea correcto
        let correo = document.getElementById("correo");
        let resCorreo = esCorreo(correo) //comprobamos que el correo electrónico sea correct
        let numPersonas = document.getElementById("numPersonas");
        let resnumPersonas = esNumero(numPersonas);
        if (resApellido && resNombre && resCorreo && resnumPersonas) {
            alert("Formulario correcto");
            window.location.href = "confirmacion.html"; //si el formulario es correcto se redirige a confirmacion.html
        }
        else{
            event.preventDefault(); //si no es correto, detener el envío del formulario
        }
        });
    });

function esNombre(elem){
    let expresionNombre = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;//comprobamos que la espresion sea alfabética y con posibiladad de acentos
    if(elem.value.match(expresionNombre)){
        elem.className = "correcto"; //si es correcto, se le añade la clase correcto
        return true;
    }else{
        alert("Introduzca un nombre correcto");
        elem.className = "incorrecto"; //si no, se le añade la clase incorrecto
        return false;
    }
}

function esApellido(elem){
    let expresionApellidos = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;//comprobamos que la espresion sea alfabética y con posibiladad de acentos
    if(elem.value.match(expresionApellidos)){
        elem.className = "correcto";//si es correcto, se le añade la clase correcto
        return true;
    }else{
        alert("Introduzca unos apellidos correctos");
        elem.className = "incorrecto";//si no, se le añade la clase incorrecto
        return false;
    }
}

function esCorreo(elem){
    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//comprobamos que el correo sea correcto, es decir que solo tenga 1 @
    if(elem.value.match(expresionCorreo)){
        elem.className = "correcto";//si es correcto, se le añade la clase correcto
        return true;
    }else{
        alert("Introduzca un correo correcto");
        elem.className = "incorrecto";//si no, se le añade la clase incorrecto
        return false;
    }
}

function esNumero(elem){
    let expresionNumero = /^\d+$/;
    if(elem.value.match(expresionNumero)){
        if (parseInt(elem.value) <= 100){
        elem.className = "correcto";//si es correcto, se le añade la clase correcto
        return true;
        }
        else{
            alert("Introduzca un numero de personas dentro del rango");
            elem.className = "incorrecto";//si no, se le añade la clase incorrecto
            return false;
        }
    }else{
        alert("Introduzca un numero de personas correcto");
        elem.className = "incorrecto";//si no, se le añade la clase incorrecto
        return false;
    }
}