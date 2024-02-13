let menuVisible = false;
//primero detectar el scrolling para aplicar la animacion de la barra de habilidades:

window.onscroll = function () {
  efectoHabilidades();
  applyStyles();
};
//funcion para aplicar las animaciones de las habilidades

function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("htmlcss");
    habilidades[3].classList.add("react");
    habilidades[4].classList.add("next");
    habilidades[5].classList.add("express");
    habilidades[6].classList.add("postgres");
    habilidades[7].classList.add("github");
    habilidades[8].classList.add("scrum");
    habilidades[9].classList.add("comunicacion");
    habilidades[10].classList.add("trabajo");
    habilidades[11].classList.add("resolucion");
    habilidades[12].classList.add("creatividad");
    habilidades[13].classList.add("autodeterminacion");
    habilidades[14].classList.add("dinamismo");
    habilidades[15].classList.add("constancia");
  }
}

//funcion para ocultar y mostrar menu

document.addEventListener("DOMContentLoaded", function () {
  const animatedTitle = document.querySelector(".animated-title");
  // Aplicar animaciones de habilidades al cargar la página
  efectoHabilidades();
  // Función para aplicar estilos al entrar en la sección
  function applyStyles() {
    animatedTitle.classList.add("restart-typing", "color-change");
  }
  // Detectar el scrolling para aplicar la animación de la barra de habilidades
  window.onscroll = function () {
    efectoHabilidades();
  };

  // Aplicar estilos cuando se carga la página
  applyStyles();

  // Aplicar estilos cada vez que se entra en la sección
  document.addEventListener("scroll", function () {
    const animatedTitle = document.querySelector(".animated-title");
    const section = document.querySelector("section");
    const sectionRect = section.getBoundingClientRect();

    // Verificar si la sección está en el viewport
    if (sectionRect.top < window.innerHeight / 2 && sectionRect.bottom >= 0) {
      // Reiniciar la animación eliminando y volviendo a agregar la clase
      animatedTitle.classList.remove("restart-typing", "color-change");
      setTimeout(applyStyles, 10); // Retraso pequeño para permitir la eliminación de clases
    }
  });
});

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
