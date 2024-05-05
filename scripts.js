
let slideIndex = 0;//se inicializa la variable en 0
showSlides();

function showSlides() {//funcion para mostrar la imagenes en carrusel 

  const slides = document.querySelectorAll('.carousel-content img');//toma todas las imagenes que tine en contenedor 
  
  for (let i = 0; i < slides.length; i++) {//Repite y muestra las imagenes las veses que determina el siclofor 

    slides[i].classList.remove('active');//Quita la clase 'active' de todas las imágenes y las oculta
  }

  slideIndex++;//incrementa la variabe y asi mostrar la otra imagen 
  
  if (slideIndex > slides.length) { slideIndex = 1; } //verifica que la variable sea mayor wue el n umero de imagenes y lo reinicia en 1 creando un ciclo infinito
  
  slides[slideIndex - 1].classList.add('active');// se le agrega la clase active a la imagen actual y se muestra 

  setTimeout(showSlides, 2000);// llama a la funcion showSlides() para volvera ejecutarla despues de 2 segundos
}
