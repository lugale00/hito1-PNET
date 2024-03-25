
let horas = ["10:30", "12:30", "13:30", "15:30", "18:30", "20:30", "21:30", "22:30"]


document.addEventListener("DOMContentLoaded", function() { 
  let selecFecha = document.getElementById("fecha");
  let fecha = new Date(); //Fecha actual
  let mes = fecha.getMonth()+1; //obteniendo mes
  let dia = fecha.getDate(); //obteniendo dia
  let ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes //agrega cero si el menor de 10
  document.getElementById('fecha').value=ano+"-"+mes+"-"+dia;
  
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  ActualizarHorario(hora, minutos); //debemos añadir la actualización en el listener y no en un onload, ya que, como tenemos el onload en selec_pelicula.js, no se ejecutarán correctamente
  
  selecFecha.addEventListener("change", function(event) {
    let nuevaFecha = new Date(selecFecha.value);
    let nuevoDia = new Date(selecFecha.value).getDate();
    let nuevoMes = new Date(selecFecha.value).getMonth()+1;
    let nuevoAno = new Date(selecFecha.value).getFullYear();
    let fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth()+1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let ano = fecha.getFullYear(); //obteniendo año
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    
    if (nuevoAno < ano || nuevoAno == ano && nuevoMes < mes || nuevoAno == ano && nuevoMes == mes && nuevoDia < dia){
      // Eliminar el horario existente si la fecha seleccionada es pasada
      DestruirHorario(document.getElementById('mañana'));
      DestruirHorario(document.getElementById('tarde'));
    } else if(nuevoAno > ano || nuevoAno == ano && nuevoMes > mes || nuevoAno == ano && nuevoMes == mes && nuevoDia > dia){
      // Construir un nuevo horario completo si la fecha seleccionada es futura
      DestruirHorario(document.getElementById('mañana'));
      DestruirHorario(document.getElementById('tarde'));
      ConstruirHorario(document.getElementById('mañana'));
      ConstruirHorario(document.getElementById('tarde'));
    } else if(nuevoAno == ano && nuevoMes == mes && nuevoDia == dia){
      // Actualizar el horario a la hora actual si la fecha seleccionada es la actual
      DestruirHorario(document.getElementById('mañana'));
      DestruirHorario(document.getElementById('tarde'));
      ConstruirHorario(document.getElementById('mañana'));
      ConstruirHorario(document.getElementById('tarde'));
      ActualizarHorario(hora, minutos)
    }
  });

  // Llamar a la función ConstruirHorario una vez al cargar la página para inicializar el horario
  ConstruirHorario(new Date().getHours(), new Date().getMinutes());
});

function ActualizarHorario(hora, minutos) {
  let elementosHora = document.getElementsByClassName('hora');
  let horaElemento;
  let minutosElemento;
  while (elementosHora.length > 0) {
    horaElemento = parseInt(elementosHora[0].textContent.split(':')[0]);
    minutosElemento = parseInt(elementosHora[0].textContent.split(':')[1]);
    if (hora > horaElemento || (hora === horaElemento && minutos >= minutosElemento)) {
      elementosHora[0].remove();
    } else {
      break; // Detener el bucle si la hora es pasada
    }
  }
}

function DestruirHorario(pelicula){
  while(pelicula.hasChildNodes()){ //mientras tenga hijos, se destruye el horario
    pelicula.removeChild(pelicula.firstChild);
  }
}

function ConstruirHorario(pelicula) {
  if (pelicula.id=="mañana"){//se añaden los horario en función de si las horas son de mañana o de tarde, ya que estan ordenadas
    for (let j = 0; j < 3 ; j++) {
      let newa = document.createElement("a");
      newa.className = "hora";
      newa.setAttribute('href', "reserva.html")
      newa.appendChild(document.createTextNode(horas[j]));
      pelicula.appendChild(newa);
    }
  }
  else if(pelicula.id=="tarde"){
    for (let j = 3; j < horas.length; j++) {
      let newa = document.createElement("a");
      newa.className = "hora";
      newa.setAttribute('href', "reserva.html")
      newa.appendChild(document.createTextNode(horas[j]));
      pelicula.appendChild(newa);
    }
  }
}

