console.log("Hello world!");

// GENERAL SETTINGS
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
 
 

//HOME / ABOUT PAGE --------------------------------------
//IMAGENS LANDING 
const sobreImg= document.querySelectorAll('.sobre-imgs');

sobreImg.forEach(function(imgs) {

  /*
  // get random image
  let allImgs= ['images/ensaios/toque/CAPA_TOQUE.png' , 'images/ensaios/memorias/14_CAPA_PROJETO.png' , 'images/ensaios/amelia/CAPA_AMELIA.png' , 'images/ilustracao/12.png' , 'images/ilustracao/8.png' , 'images/design/erre/19.png' , 'images/design/residir/1.jpg'];

  imgs.src = allImgs[Math.floor(Math.random()*allImgs.length)];
*/

  // random position inside "sobre-imgs-space"
  let imgsSpaceSobre = document.querySelector('.sobre-imgs-space');
  let widthSpaceSobre = imgsSpaceSobre.offsetWidth;
  let heightSpaceSobre = imgsSpaceSobre.offsetHeight;
    
  imgs.style.left= Math.random() * widthSpaceSobre + "px"; // 👈🏼 Horizontally

  imgs.style.bottom = Math.random() * heightSpaceSobre + "px" ; // 👈🏼 Vertically

  // random rotation 
  const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)'; //(entre -10deg e 10deg)

  // change position after 1s
  /*setTimeout(function(){
    imgs.style.left= "-100px";
  },1000);*/

  // movement with scroll
  document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);

    if (window.scrollY<100) {
      imgs.style.left= Math.random() * widthSpaceSobre + "px"; // 👈🏼 Horizontally

    } else {
      imgs.style.left= "-100px";
    }
  });


});





// ILUSTRACAO .................................


// SCROLL HORIZONTAL
let sectionIlustracao = document.querySelector("#ilustracao");

window.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    sectionIlustracao.scrollLeft += evt.deltaY; 
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
//ROTATE IMAGE ON SCROLL
window.onscroll = function() {
  let theta = document.documentElement.scrollTop / -8000 % Math.PI;

  // foto de perfil
document.getElementById('rotate-img').style.transform ='rotate(' + theta + 'rad)';

// logos
document.getElementById('logo-1').style.transform ='rotate(' + theta + 'rad)';

document.getElementById('logo-2').style.transform ='rotate(' + -theta + 'rad)';

document.getElementById('logo-3').style.transform ='rotate(' + theta + 'rad)';
}



// CONTACTOS
// text typing
let n = 0;
let o = 0;
let p = 0;
let q = 0;
let txtEmail = 'ines_sd_costa@hotmail.com';
let txtVimeo = '.com/inesxcosta';
let txtBehance = '.net/inesscosta';
let txtInstagram = '.com/inesxcostax';
let speed = 150;

function typeEmail() {
  if (n < txtEmail.length) {
    document.getElementById("txtEmail").innerHTML += txtEmail.charAt(n);
    n++;
    setTimeout(typeEmail, 150);
  }
}

function typeVimeo() {
  if (o < txtVimeo.length) {
    document.getElementById("txtVimeo").innerHTML += txtVimeo.charAt(o);
    o++;
    setTimeout(typeVimeo, 150);
  }
}

function typeBehance() {
  if (p < txtBehance.length) {
    document.getElementById("txtBehance").innerHTML += txtBehance.charAt(p);
    p++;
    setTimeout(typeBehance, 150);
  }
}

function typeInstagram() {
  if (q < txtInstagram.length) {
    document.getElementById("txtInstagram").innerHTML += txtInstagram.charAt(q);
    q++;
    setTimeout(typeInstagram, 150);
  }
}












// FOOTER -----------------------
// back to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}