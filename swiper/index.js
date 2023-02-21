const menu = document.querySelector(".menu-box");
const menuItems = document.querySelectorAll(".box-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

const swiper = new Swiper(".header-swiper", {
  loop: true,
  effect: "fade",
  slidesPerView: 1,
  pagination: {
    type: "bullets",
    clickable: true,
    el: ".header-pagination",
  },
});

const swiperNewArrivals = new Swiper(".guitar-wrapper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    650: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  },

  pagination: {
    type: "bullets",
    clickable: true,
    el: ".guitars-pagination",
  },
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
});

const swiperPartners = new Swiper(".partners-wrapper", {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 3,
  spaceBetween: 5,
  breakpoints: {
    // when window width is >= 320px
    450: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 5,
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 8,
    },
  },

  pagination: {
    type: "bullets",
    clickable: true,
    el: ".partners-pagination",
  },
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
});
