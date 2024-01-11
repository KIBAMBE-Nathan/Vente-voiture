// Sélectionner l'élément avec l'ID "menu-btn" et le stocker dans la variable "menu"
let menu = document.querySelector('#menu-btn');

// Sélectionner l'élément avec la classe "navbar" et le stocker dans la variable "navbar"
let navbar = document.querySelector('.navbar');

// Lorsque l'élément "menu" est cliqué, exécuter la fonction suivante
menu.onclick = () => {
  // Alterner la classe "fa-times" sur l'élément "menu"
  menu.classList.toggle('fa-times');
  // Alterner la classe "active" sur l'élément "navbar"
  navbar.classList.toggle('active');
}

// Lorsque l'élément avec l'ID "login-btn" est cliqué, exécuter la fonction suivante
document.querySelector('#login-btn').onclick = () => {
  // Alterner la classe "active" sur l'élément avec la classe "login-form-container"
  document.querySelector('.login-form-container').classList.toggle('active');
}

// Lorsque l'élément avec l'ID "close-login-form" est cliqué, exécuter la fonction suivante
document.querySelector('#close-login-form').onclick = () => {
  // Supprimer la classe "active" de l'élément avec la classe "login-form-container"
  document.querySelector('.login-form-container').classList.remove('active');
}

// Lorsque la fenêtre est défilée, exécuter la fonction suivante
window.onscroll = () => {
  // Supprimer la classe "fa-times" de l'élément "menu"
  menu.classList.remove('fa-times');
  // Supprimer la classe "active" de l'élément "navbar"
  navbar.classList.remove('active');

  // Si la position de défilement verticale est supérieure à 0
  if (window.scrollY > 0) {
    // Ajouter la classe "active" à l'élément avec la classe "header"
    document.querySelector('.header').classList.add('active');
  } else {
    // Sinon, supprimer la classe "active" de l'élément avec la classe "header"
    document.querySelector('.header').classList.remove('active');
  }
}

// Lorsque la souris bouge sur l'élément avec la classe "home", exécuter la fonction suivante
document.querySelector('.home').onmousemove = (e) => {
  // Pour chaque élément avec la classe "home-parallax"
  document.querySelectorAll('.home-parallax').forEach(elm => {
    // Obtenir la vitesse de l'élément à partir de l'attribut "data-speed"
    let speed = elm.getAttribute('data-speed');

    // Calculer la translation en fonction de la position de la souris
    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    // Appliquer la transformation aux éléments
    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
}

// Lorsque la souris quitte l'élément avec la classe "home", exécuter la fonction suivante
document.querySelector('.home').onmouseleave = (e) => {
  // Réinitialiser la transformation de tous les éléments avec la classe "home-parallax"
  document.querySelectorAll('.home-parallax').forEach(elm => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
}

// Initialiser un carrousel Swiper pour les éléments avec la classe "vehicles-slider"
var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialiser un carrousel Swiper pour les éléments avec la classe "featured-slider"
var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
