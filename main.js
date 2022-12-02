console.log("Hello world!");
//HEADER --------------------------------------
// BRUGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



// LIGHT vs DARK MODE
function isLight() {
    return localStorage.getItem("light-mode");
  }
  
  function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light");
  }
  
  function toggleLocalStorageItem() {
    if (isLight()) {
      localStorage.removeItem("light-mode");
    } else {
      localStorage.setItem("light-mode", "set");
    }
  }
  
  if (isLight()) {
    toggleRootClass();
  }
  
  document.querySelector(".slider").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });
 
 
//HOME PAGE --------------------------------------

// HOME IMAGES
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const homeImg= document.querySelectorAll('.home-img');




homeImg.forEach(function(imgs) {

  // OPEN TIME
  //setInterval(() => {

    // RANDOM POSITION
    const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    // como fazer random position dentro do espaço??
    imgs.style.left= getRandom(5, 70)+'vw'; // 👈🏼 Horizontally
    imgs.style.bottom = getRandom(10, 50)+'vh'; // 👈🏼 Vertically


    // RANDOM ROTATION
    const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)';

  // CLOSE TIME
  //}, 1500); // 1.5s

});




// ILUSTRACAO .................................

// SCROLL HORIZONTAL
const scrollContainer = document.querySelector("#ilustracao");

scrollContainer.addEventListener("wheel", (evt) => {
    
  // only on desktop 
  //if ( $(window).width() > 600) {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  //}
});
 


// PROJETOS .................................

// DESIGN
function displayErre() {
  $("#design-erre").css("display" , "block");
  $("#design-residir").css("display" , "none");
  $(window).scrollTop(0);
}

function displayResidir() {
  $("#design-residir").css("display" , "block");
  $("#design-erre").css("display" , "none");
  $(window).scrollTop(0);
}


// ENSAIOS
function displayMemorias() {
  $("#ensaios-memorias").css("display" , "block");
  $("#ensaios-toque").css("display" , "none");
  $("#ensaios-amelia").css("display" , "none");
  $(window).scrollTop(0);
}

function displayToque() {
  $("#ensaios-toque").css("display" , "block");
  $("#ensaios-memorias").css("display" , "none");
  $("#ensaios-amelia").css("display" , "none");
  $(window).scrollTop(0);
}

function displayAmelia() {
  $("#ensaios-amelia").css("display" , "block");
  $("#ensaios-memorias").css("display" , "none");
  $("#ensaios-toque").css("display" , "none");
  $(window).scrollTop(0);
}

//ABOUT PAGE --------------------------------------

// rotate image on scroll
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("sobre-img");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

// FOOTER -----------------------