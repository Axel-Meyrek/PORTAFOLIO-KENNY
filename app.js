//VARIABLES || COMPONENTES
const $buttonRedes = document.querySelector('#buttonRedes');

const $buttonsCloseInfo = document.querySelectorAll('.buttonOcultarInfo');

const $miniaturas = document.querySelectorAll('.resumenProyecto_containerMiniatura');

//FUNCIONES
const showRedes = () => {
    document.querySelector('#containerRedes').classList.toggle('transparencia');
}

const hiddenProyectInfo = (e) => {
    e.target.parentNode.parentNode.nextElementSibling.classList.add('blur');
    e.target.parentNode.parentNode.classList.add('transparencia');
}

const showProyectInfo = e => {
    console.log(e.target)
    e.target.parentNode.classList.remove('blur');
    e.target.parentNode.previousElementSibling.classList.remove('transparencia');
}

const addEventButtons = () => {
    $buttonsCloseInfo.forEach(button => button.addEventListener('click', hiddenProyectInfo));
}

const addEventMiniaturas = () => {
    $miniaturas.forEach(miniatura => miniatura.addEventListener('click', showProyectInfo))
}

//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    addEventButtons();
    addEventMiniaturas();
})

$buttonRedes.addEventListener('click', showRedes);

const botonHab1 = document.querySelector("#botonHab1");

const botonHab2 = document.querySelector("#botonHab2");

const botonHab3 = document.querySelector("#botonHab3");

const botonHab4 = document.querySelector("#botonHab4");

const botonHab5 = document.querySelector("#botonHab5");

const flechaHabilidades = document.querySelector("#flechaHabilidades");

const divProgramas = document.querySelector("#divProgramas");

const botonExpe1 = document.querySelector("#botonExpe1");

const botonExpe2 = document.querySelector("#botonExpe2");

const buttonExtra1 = document.querySelector("#buttonExtra1");

const buttonExtra2 = document.querySelector("#buttonExtra2");

const buttonExtra3 = document.querySelector("#buttonExtra3");

const buttonExtra4 = document.querySelector("#buttonExtra4");

const buttonExtra5 = document.querySelector("#buttonExtra5");

const habilidadesDiv = document.querySelector("#habilidadesDiv");

let banderaHabilidades = true;

const cambio1 = () => {
    borrarClases(divProgramas);
    habilidadesDiv.classList.add("habilidades_cuadro--color1");
    divProgramas.classList.add("habilidades_cambiar");
};

const cambio2 = () => {
    borrarClases(divProgramas);
    habilidadesDiv.classList.add("habilidades_cuadro--color2");
    divProgramas.classList.add("habilidades_cambiar2");
};

const cambio3 = () => {
    borrarClases(divProgramas);
    habilidadesDiv.classList.add("habilidades_cuadro--color3");
    divProgramas.classList.add("habilidades_cambiar3");
};

const cambio4 = () => {
    borrarClases(divProgramas);
    habilidadesDiv.classList.add("habilidades_cuadro--color4");
    divProgramas.classList.add("habilidades_cambiar4");
};

const cambio5 = () => {
    borrarClases(divProgramas);
    habilidadesDiv.classList.add("habilidades_cuadro--color5");
    divProgramas.classList.add("habilidades_cambiar5");
};


const ocultarHabilidades = () => {
    divProgramas.classList.add("habilidades_cambiar--none");
}


const mostrarHabilidades = () => {
    divProgramas.classList.remove("habilidades_cambiar--none");
}

const mostrarTexto1Experiencia = () => {
    const habilidadesExperienciaElemento = document.querySelector("#habilidadesExperiencia");
    let texto1 =
        ` <p>Gestión de redes sociales: "Carlos Martín Huerta"</p>
                        <p>marzo - julio 2023</p>
                        <p>Se generó contenido para redes sociales y publicaciones informativas, llegando a obtener publicaciones con más de 2000 reacciones</p>
                        `
    habilidadesExperienciaElemento.innerHTML = texto1;
}

const mostrarTexto2Experiencia = () => {
    const habilidadesExperienciaElemento = document.querySelector("#habilidadesExperiencia");
    let texto1 =
        `  <p>Diseño de identidad visual de "Nación Diseño"</p>
                        
                        <p>abril 2023</p>
                        <p>Participación en el rediseño de la identidad de la Facultad de Diseño Gráfico y Digital UPAEP</p>
                 `
    habilidadesExperienciaElemento.innerHTML = texto1;
}

const mostrarTexto1Extra = () => {
    const extraDiv = document.querySelector("#extraDiv");
    let texto1 =
        ` <p>Designathon</p>
                        <p>agosto 2020</p>
                        <p>Trabajo de equipo con estudiantes de la Universidad de Oklahoma</p>`
    extraDiv.innerHTML = texto1;
}

const mostrarTexto2Extra = () => {
    const extraDiv = document.querySelector("#extraDiv");
    let texto1 =
        ` <p>Tercera Bienal de Ilustración</p>
                        <p>2022</p>
                        <p>Desarrollo de ilustración haciendo uso de técnicas mixtas</p>`
    extraDiv.innerHTML = texto1;
}

const mostrarTexto3Extra = () => {
    const extraDiv = document.querySelector("#extraDiv");
    let texto1 =
        ` <p>Bienal Internacional del Cartel en México</p>
                        <p>2022</p>
                        <p>Desarrollo de cartel para la categoría de "Competencia en la Economía Digital"</p>`
    extraDiv.innerHTML = texto1;
}

const mostrarTexto4Extra = () => {
    const extraDiv = document.querySelector("#extraDiv");
    let texto1 =
        ` <p>EcoRunway Regional IMEF Universitario</p>
                        <p>2023</p>
                        <p>Diseño de vestuario enfocado en mosa sustentable haciendo uso de materiales reciclados</p>`
    extraDiv.innerHTML = texto1;
}

const mostrarTexto5Extra = () => {
    const extraDiv = document.querySelector("#extraDiv");
    let texto1 =
        ` <p>Secretario de la mesa directiva estudiantil de la Facultad de Diseño Gráfico</p>
                        <p>agosto 2021 - julio 2024</p>
                        <p>Representación en eventos y colaboración con otros miembros de la mesa directiva</p>`
    extraDiv.innerHTML = texto1;
}

const regresarColor =()=>{
    habilidadesDiv.className ="";
    habilidadesDiv.classList.add("habilidades_cuadro");
}

const flechaHabilidadesAccion = () => {
    if (banderaHabilidades) {
        banderaHabilidades = false;
        mostrarHabilidades();
        cambio1();
    } else {
        banderaHabilidades = true;
        ocultarHabilidades();
        regresarColor();
    }
}

const borrarClases = (elemento) => {
    elemento.className = ""; // Elimina todas las clases asignadas al elemento
};


botonHab1.addEventListener("click", cambio1);
botonHab2.addEventListener("click", cambio2);
botonHab3.addEventListener("click", cambio3);
botonHab4.addEventListener("click", cambio4);
botonHab5.addEventListener("click", cambio5);

flechaHabilidades.addEventListener("click", flechaHabilidadesAccion);
botonExpe1.addEventListener("click", mostrarTexto1Experiencia);
botonExpe2.addEventListener("click", mostrarTexto2Experiencia);
buttonExtra1.addEventListener("click",mostrarTexto1Extra);
buttonExtra2.addEventListener("click",mostrarTexto2Extra);
buttonExtra3.addEventListener("click",mostrarTexto3Extra);
buttonExtra4.addEventListener("click",mostrarTexto4Extra);
buttonExtra5.addEventListener("click",mostrarTexto5Extra);

/* document.addEventListener("DOMContentLoaded", () => {
    ocultarHabilidades();
}); */