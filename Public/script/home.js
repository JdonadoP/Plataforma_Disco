const botones = document.querySelectorAll(".btnfv");
const nuevoColor = "red";

const colorOriginal = window.getComputedStyle(botones[0]).color;

botones.forEach(boton =>{
    boton.addEventListener("click", function() {
      if (window.getComputedStyle(boton).color === colorOriginal){
        boton.style.color = nuevoColor;
      } else {
        boton.style.color = colorOriginal;
      }
    });
  });


