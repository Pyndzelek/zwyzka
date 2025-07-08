// JavaScript for the mobile hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
  // Toggle 'active' class on both hamburger and nav menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Inicjalizacja karuzeli Swiper.js
const swiper = new Swiper(".swiper", {
  // Opcjonalne parametry
  direction: "horizontal",
  loop: true, // Zapętlenie slajdów
  spaceBetween: 20, // Odstęp w pikselach między slajdami

  // Paginacja (kropki)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Przyciski nawigacyjne (strzałki)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Zmienione wartości - wyświetlamy więcej slajdów, więc będą mniejsze
  breakpoints: {
    // gdy ekran ma >= 500px szerokości
    500: {
      slidesPerView: 2, // Było: 2
    },
    // gdy ekran ma >= 768px szerokości
    768: {
      slidesPerView: 3, // Było: 3
    },
    // gdy ekran ma >= 1024px szerokości
    1024: {
      slidesPerView: 4, // Było: 4
    },
  },
});
