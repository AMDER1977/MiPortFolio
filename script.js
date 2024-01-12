let menuVisible = false;
//funcion para ocultar y mostrar menu

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

//funcion para ocultar menu cuando se selecciona una opcion
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//funcion para aplicar las animaciones de las habilidades

function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
  }
}
//primero detectar el scrolling para aplicar la animacion de la barra de habilidades:

window.onscroll = function () {
  efectoHabilidades();
};
