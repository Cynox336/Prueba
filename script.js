document.addEventListener("DOMContentLoaded", function() {
    var pequeno = document.getElementById("rojo-pequeño");
    var grande = document.getElementById("rojo-grande");
  
    var estaRojoPequeno = true;
    var estaRojoGrande = true;
  
    function cambiarClases(elemento, claseAQuitar, claseAAgregar) {
      elemento.addEventListener("mouseenter", function() {
        if (elemento === pequeno && estaRojoPequeno) {
          elemento.classList.remove(claseAQuitar);
          elemento.classList.add(claseAAgregar);
        } else if (elemento === grande && estaRojoGrande) {
          elemento.classList.remove(claseAQuitar);
          elemento.classList.add(claseAAgregar);
        }
      });
  
      elemento.addEventListener("mouseleave", function() {
        if (elemento === pequeno && estaRojoPequeno) {
          elemento.classList.remove(claseAAgregar);
          elemento.classList.add(claseAQuitar);
        } else if (elemento === grande && estaRojoGrande) {
          elemento.classList.remove(claseAAgregar);
          elemento.classList.add(claseAQuitar);
        }
      });
    }
  
    cambiarClases(pequeno, "bg-danger", "bg-success");
    cambiarClases(grande, "bg-danger", "bg-info");
  
    grande.addEventListener("click", function() {
      if (estaRojoGrande) {
        estaRojoGrande = false;
        grande.classList.remove("bg-danger", "bg-info");
        grande.classList.add("bg-secondary");
      } else {
        estaRojoGrande = true;
        grande.classList.remove("bg-secondary");
        grande.classList.add("bg-danger");
      }
    });
  });
  