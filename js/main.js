const nav = document.querySelector("#nav");
const abrir =document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
} )

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//-----------------------------------//



datCard = [
    {   
        nomFront:"Gustavo Cerati",
        nombre: "Gustavo Cerati",
        descripcion: "Gustavo Adrián Cerati (Barracas, Buenos Aires, 11 de agosto de 1959-Núñez, Buenos Aires, 4 de septiembre de 2014), conocido como Gustavo Cerati, fue un músico, cantautor y productor discográfico argentino que obtuvo reconocimiento internacional por haber sido el líder, vocalista, compositor y guitarrista de la banda de rock Soda Stereo.",
        detalles: "Detalles"
    },
    {
        nomFront: "BTS",
        nombre: "BTS",
        descripcion: "BTS (en hangul, 방탄소년단; romanización revisada del coreano, Bangtan Sonyeondan; literalmente, «Bulletproof Boy Scouts»), también conocido como Bangtan Boys, es un grupo surcoreano formado en 2010. Está compuesto por siete integrantes: Jin, Suga, J-Hope, RM, Jimin, V y Jungkook. A pesar de haber sido creado con un estilo principalmente hip hop.",
        detalles: "Detalles"
    },
    {
        nomFront: "Beagle",
        nombre: "Beagle",
        descricion: "El beagle es una raza de perro de tamaño pequeño a mediano. Tiene un aspecto similar al foxhound, pero de menor tamaño, con patas más cortas y orejas más largas y caídas.",
        detalles: "Detalles"
    }
]

function infoCards(array){

    for (let i = 0; i < array.length; i++) {

        `<div class="card">
            <div class="face front">
                <img src="imagenes/bts 3.jpg" alt="">
                <h3>${[i.nomFront]}</h3>
            </div>
            <div class="face back">
                <h3>${[i.nombre]}</h3>
                <P>${[i.descricion]}</P>
                <div class="link">
                    <a href="#">Detalles</a>
                </div>
            </div>
        </div>`
        
        
    }





}

console.log(datCard);

alert("Bienvenido a la pagina de artistas");

/*document.write("<p>Bienvenido</p>");*/