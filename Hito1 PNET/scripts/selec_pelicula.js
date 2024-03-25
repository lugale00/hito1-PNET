
window.onload = function(){ //usamos un onload para que se resuelva mientras la pagina se carga, y no después
    let pelicula = new URLSearchParams(window.location.search) //recogemos el dato proporcionado por la URL 
    let poster = document.getElementById("poster");
    let trailer = document.getElementById("trailer");
    let sinopsis = document.getElementById("sinopsis");
    let titulo = document.getElementById("titulo")
    resumen = document.createElement("p");
    nombre = document.createElement("h2");

    //comprobamos cual es la pelicula que recibimos en función del dato recibido por URL pelicula
    if(pelicula.get("pelicula") == "HarryPotter"){
        nombre.appendChild(document.createTextNode("Harry Potter y el prisionero de Azkaban"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre); //lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_harry_potter.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_harry_potter");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/cCC_mdE5rJk?si=BUUP8UlCIcZnwzB_");//añadimos el src del video
        resumen.appendChild(document.createTextNode("La tercera entrega de la famosa saga de Harry Potter. Esta vez, Harry (Daniel Radcliffe) se enfrentará a una nueva amenaza, los dementores, que vendran en busca de Sirius Black (Gary Oldman), su tío."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "JurassicPark"){
        nombre.appendChild(document.createTextNode("Jurassic Park"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_jurassic_park.jpg");//añadimos el src de la imagen 
        poster.setAttribute("alt", "poster_jurassic_park");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/OsaphlwhhmY?si=Tg0vHvjKfvan7wR2");//añadimos el src del video
        resumen.appendChild(document.createTextNode("Revive la primera entrega de la saga de Parque Jurásico. De vuelta en cines, como la primera vez que la viste o incluso mejor. Adéntrate en el Parque Jurásico, donde acaban de revivir a los temibles dinosaurios de una era pasada."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "Divergente"){
        nombre.appendChild(document.createTextNode("Divergente: Leal"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_divergente.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_divergente");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/dMFIYFjDjW4?si=vNCXMJjSYkpnoLPK");//añadimos el src del video
        resumen.appendChild(document.createTextNode("Beatrice Prior (Shailene Woodley) está de vuelta en la segunda entrega de la saga Divergente. Tras los sucesos de la primera película, parece que había logrado huir de las garras del sistema, pero no por mucho tiempo. Adéntrate mas en la ciudad de Chicago de este mundo postapocalíptico y descubre sus secretos mas escondidos. "))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "ChicoGarza"){
        nombre.appendChild(document.createTextNode("El chico y la garza"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_chico_garza.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_chico_garza");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/oDIbOWgADr8?si=I5g9_11T5sUuN3op");//añadimos el src del video
        resumen.appendChild(document.createTextNode("La última de las películas del gan director Hayao Miyazaki. Un joven llamado Mahito, que añora a su madre, se aventura en un mundo compartido por los vivos y los muertos. Allí, la muerte llega a su fin y la vida encuentra un nuevo comienzo."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "Oppenheimer"){
        nombre.appendChild(document.createTextNode("Oppenheimer"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_oppenheimer.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_oppenheimer");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/yLYbOe914ZU?si=BY0fr_gZd7TGuvof");//añadimos el src del video
        resumen.appendChild(document.createTextNode("Basada en una historia real, esta película nos cuenta la turbulenta vida de Robert Oppenheimer(Cillian Murphy), el padre de la bomba atómica."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "Resacon"){
        nombre.appendChild(document.createTextNode("Resacón en Las Vegas"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_resacon.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_resacon");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/MckEHmSMg-0?si=La0Z_p0bhU-hDrgJ");//añadimos el src del video
        resumen.appendChild(document.createTextNode("La comedia ha llegado a la gran ciudad. Dos días antes de su boda, Doug (Justin Bartha) viaja en coche a Las Vegas con sus mejores amigos Phil y Stu (Beadley Cooper y Ed Helms) y su futuro cuñado Alan (Zach Galifianakis), para celebrar un fiestón de despedida de soltero que juran que nunca olvidarán."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "SenorAnillos"){
        nombre.appendChild(document.createTextNode("El señor de los anillos: la cominudad del anillo"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_senor_anillos.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_señor_anillos");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/3GJp6p_mgPo?si=X4xtBD9Av3icOgdh");//añadimos el src del video
        resumen.appendChild(document.createTextNode("Vuelve a la gran pantalla la saga del señor de los anillos. Volvemos a embarcarnos en la gran aventura por el Anillo Único junto a Frodo (Elijah Wood), Gandalf (Ian McKellen) y el resto de compañeros."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if(pelicula.get("pelicula") == "Totoro"){
        nombre.appendChild(document.createTextNode("Mi vecino Totoro"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_totoro.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_totoro");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/BjeBG8Xrci8?si=4ksE4RQy-MQ375D5");//añadimos el src del video
        resumen.appendChild(document.createTextNode("Volvemos a la infancia con una de las obras maestras del director Hayao Miyazaki, que nos hará volar la imaginación hacia el mundo de fantasía con las hermanas Satsuki y Mei, dirigidos por su gran y peludo vecino, Totoro."))//creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente

    }else if (pelicula.get("pelicula") == "Barbie"){
        nombre.appendChild(document.createTextNode("Barbie: la película"))//añadimos el nombre de la pelicula como cabecera
        titulo.appendChild(nombre);//lo añadimos a la pagina en la posición correspondiente
        poster.setAttribute("src", "imagenes/poster_barbie.jpg");//añadimos el src de la imagen
        poster.setAttribute("alt", "poster_barbie");//añadimos el alt de la imagen
        trailer.setAttribute("src", "https://www.youtube.com/embed/vsJgLu3PIno?si=6jfm9iOYSz_fbGbn");//añadimos el src del video
        resumen.appendChild(document.createTextNode("En Barbieland todo es de color rosa. Allí mandan las barbies –mujeres perfectas capaces de gobernar un país, ganar un Nobel o dirigir una granja sin despeinarse– y los hombres son un accesorio más, junto a la casa, el coche o los zapatos. Un día, nuestra protagonista –la Barbie estereotípica– piensa en la muerte y descubre que tiene celulitis y los pies planos. La única solución es viajar al mundo real y conocer a la dueña de la muñeca. Su novio, Ken, le acompaña y descubre –con sorpresa– que los hombres pueden ser algo más que un accesorio, así que regresa decidido a convertir Barbieland en un patriarcado.")) //creamos la sinopsis de la pelicula
        sinopsis.appendChild(resumen);//añadimos la sinopsis a la página en la posición correspondiente
    }
}