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
