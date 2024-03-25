
let horas = ["10:30", "12:30", "13:30", "15:30", "18:30", "20:30", "21:30", "22:30"]


window.onload = function(){
  let fecha = new Date(); //Fecha actual
  let mes = fecha.getMonth()+1; //obteniendo mes
  let dia = fecha.getDate(); //obteniendo dia
  let ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //Agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes //Agrega cero si el menor de 10
  document.getElementById('fecha').value=ano+"-"+mes+"-"+dia;
  
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let horario = document.getElementsByClassName('botones');
  let i = 0

  while (i<9){
    ActualizarHorario(horario[i], hora, minutos);
    i++
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let selecFecha = document.getElementById("fecha");
  selecFecha.addEventListener("change", function(event) {
    let horario = document.getElementsByClassName('botones');
    let i = 0;
    let fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth()+1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let ano = fecha.getFullYear(); //obteniendo año
    let nuevoDia = new Date(selecFecha.value).getDate();
    let nuevoMes = new Date(selecFecha.value).getMonth()+1;
    let nuevoAno = new Date(selecFecha.value).getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    if (nuevoAno < ano || nuevoAno == ano && nuevoMes < mes || nuevoAno == ano && nuevoMes == mes && nuevoDia < dia){//si la fecha es menor a la actual:
      while (i<9){
        DestruirHorario(horario[i]); //destruye el horario
        i++
      }
    }
    else if(nuevoAno > ano || nuevoAno == ano && nuevoMes > mes || nuevoAno == ano && nuevoMes == mes && nuevoDia > dia){//Si la fecha es mayou a la actual:
      while (i<9){
        DestruirHorario(horario[i]); //destruye el horario
        ConstruirHorario(horario[i]); //y lo construye desde 0
        i++
      }
    }
    else if(nuevoAno == ano && nuevoMes == mes && nuevoDia == dia){ //si la fecha es la actual:
      while (i<9){
        DestruirHorario(horario[i]); //destruye el horario
        ConstruirHorario(horario[i]); //lo construye desde 0
        ActualizarHorario(horario[i], hora, minutos); //y lo actualiza con la hora del sistema
        i++
      }
    }
      
  });
});

function ActualizarHorario(pelicula, hora, minutos) {
  let elementosHora = pelicula.getElementsByClassName('hora');
  let horaElemento = parseInt(elementosHora[0].textContent.split(':')[0]); //recoge las horas y los minutos del primer elemento
  let minutosElemento = parseInt(elementosHora[0].textContent.split(':')[1]);
  while (hora > horaElemento || (hora === horaElemento && minutos > minutosElemento) || !pelicula.hasChildNodes()) { //mientras la hora del sistema sea mayor a la actual, elimina la hora 
    pelicula.removeChild(elementosHora[0]); 
    horaElemento = parseInt(elementosHora[0].textContent.split(':')[0]);
    minutosElemento = parseInt(elementosHora[0].textContent.split(':')[1]);
  }
}

function DestruirHorario(pelicula){
  while(pelicula.hasChildNodes()){ //mientras tenga hijos, elimina las horas
    pelicula.removeChild(pelicula.firstChild);
  }
}

function ConstruirHorario(pelicula) {
  for (let j = 0; j < horas.length; j++) {//usando la variable global con las horas estipuladas de las sesiones, vamos creando los elementos html y añadiendolos como hijos al horario
    let newa = document.createElement("a");
    newa.className = "hora";
    newa.setAttribute('href', "reserva.html")
    newa.appendChild(document.createTextNode(horas[j]));
    pelicula.appendChild(newa);
  }
}

