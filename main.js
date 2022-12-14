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

  // RANDOM POSITION
    // tamanho do espaço para as fotos
    let imgsSpace = document.querySelector('.home-imgs-space');
    let widthSpace = imgsSpace.offsetWidth;
    let heightSpace = imgsSpace.offsetHeight;
  
    //console.log({ widthSpace, heightSpace });

    // random positio relativa ao tamanho do espaço
    imgs.style.left= Math.random() * widthSpace + "px"; // 👈🏼 Horizontally
    imgs.style.bottom = Math.random() * heightSpace + "px"; // 👈🏼 Vertically

    // RANDOM ROTATION 
    const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)'; //(entre -10deg e 10deg)


    //RANDOM IMAGE
    let allImgs= ['images/ensaios/amelia/1.png' , 'images/ensaios/amelia/2.png' , 'images/ensaios/amelia/3.png' , 'images/ensaios/amelia/4.png' , 'images/ensaios/amelia/5.png' , 'images/ensaios/amelia/6.png' , 'images/ensaios/amelia/7.png' , 'images/ensaios/amelia/8.png' , 'images/ensaios/memorias/1.png' , 'images/ensaios/memorias/2.png' , 'images/ensaios/memorias/3.png' , 'images/ensaios/memorias/4.png' , 'images/ensaios/memorias/5.png' , 'images/ensaios/memorias/6.png' , 'images/ensaios/memorias/7.png' , 'images/ensaios/memorias/8.png' , 'images/ensaios/memorias/9.png' , 'images/ensaios/memorias/10.png' , 'images/ensaios/memorias/11.png' , 'images/ensaios/memorias/12.png' , 'images/ensaios/memorias/13.png' , 'images/ensaios/toque/1.png' , 'images/ensaios/toque/2.png' , 'images/ensaios/toque/3.png' , 'images/ensaios/toque/4.png' , 'images/ensaios/toque/5.png' , 'images/ensaios/toque/6.png' , 'images/ensaios/toque/7.png' , 'images/ensaios/toque/8.png' , 'images/ensaios/toque/9.png' , 'images/design/erre/1.png' , 'images/design/erre/2.png' , 'images/design/erre/4.png' , 'images/design/erre/5.png' , 'images/design/erre/15.png' , 'images/design/erre/18.png' , 'images/design/erre/19.png' , 'images/design/residir/1.jpg' , 'images/design/residir/2.png' , 'images/design/residir/4.png' , 'images/design/residir/1.jpg'];

    imgs.src = allImgs[Math.floor(Math.random()*allImgs.length)];

  // OPEN TIME
  setInterval(() => {

    // RANDOM POSITION
    // tamanho do espaço para as fotos
    let imgsSpace = document.querySelector('.home-imgs-space');
    let widthSpace = imgsSpace.offsetWidth;
    let heightSpace = imgsSpace.offsetHeight;
  
    //console.log({ widthSpace, heightSpace });

    // random positio relativa ao tamanho do espaço
    imgs.style.left= Math.random() * widthSpace + "px"; // 👈🏼 Horizontally
    imgs.style.bottom = Math.random() * heightSpace + "px"; // 👈🏼 Vertically

    // RANDOM ROTATION 
    const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)'; //(entre -10deg e 10deg)


    //RANDOM IMAGE
    let allImgs= ['images/ensaios/amelia/1.png' , 'images/ensaios/amelia/2.png' , 'images/ensaios/amelia/3.png' , 'images/ensaios/amelia/4.png' , 'images/ensaios/amelia/5.png' , 'images/ensaios/amelia/6.png' , 'images/ensaios/amelia/7.png' , 'images/ensaios/amelia/8.png' , 'images/ensaios/memorias/1.png' , 'images/ensaios/memorias/2.png' , 'images/ensaios/memorias/3.png' , 'images/ensaios/memorias/4.png' , 'images/ensaios/memorias/5.png' , 'images/ensaios/memorias/6.png' , 'images/ensaios/memorias/7.png' , 'images/ensaios/memorias/8.png' , 'images/ensaios/memorias/9.png' , 'images/ensaios/memorias/10.png' , 'images/ensaios/memorias/11.png' , 'images/ensaios/memorias/12.png' , 'images/ensaios/memorias/13.png' , 'images/ensaios/toque/1.png' , 'images/ensaios/toque/2.png' , 'images/ensaios/toque/3.png' , 'images/ensaios/toque/4.png' , 'images/ensaios/toque/5.png' , 'images/ensaios/toque/6.png' , 'images/ensaios/toque/7.png' , 'images/ensaios/toque/8.png' , 'images/ensaios/toque/9.png' , 'images/design/erre/1.png' , 'images/design/erre/2.png' , 'images/design/erre/4.png' , 'images/design/erre/5.png' , 'images/design/erre/15.png' , 'images/design/erre/18.png' , 'images/design/erre/19.png' , 'images/design/residir/1.jpg' , 'images/design/residir/2.png' , 'images/design/residir/4.png' , 'images/design/residir/1.jpg'];

    imgs.src = allImgs[Math.floor(Math.random()*allImgs.length)];

  // CLOSE TIME
  }, 2000); // 2s

});


/*
  //RANDOM IMAGE
  let imgEnsaiosAmelia = ['images/ensaios/amelia/1.png' , 'images/ensaios/amelia/2.png' , 'images/ensaios/amelia/3.png' , 'images/ensaios/amelia/4.png' , 'images/ensaios/amelia/5.png' , 'images/ensaios/amelia/6.png' , 'images/ensaios/amelia/7.png' , 'images/ensaios/amelia/8.png'];

  let imgDesignResidir = ['images/design/residir/1.jpg' , 'images/design/residir/2.png' , 'images/design/residir/3.jpg' , 'images/design/residir/4.png'];

  let index = 0;
  let imgAmelia = document.querySelector('.amelia');
  let imgResidir = document.querySelector('.residir');

  function changeImg() {
    index > 1 ? index = 0 : index++;

    imgAmelia.src = imgEnsaiosAmelia[index];
    imgResidir.src = imgDesignResidir[index];
  }

  setInterval(changeImg, 1500);
  */





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
let speed = 1000;

function typeEmail() {
  if (n < txtEmail.length) {
    document.getElementById("txtEmail").innerHTML += txtEmail.charAt(n);
    n++;
    setTimeout(typeEmail, speed);
  }
}

function typeVimeo() {
  if (o < txtVimeo.length) {
    document.getElementById("txtVimeo").innerHTML += txtVimeo.charAt(o);
    o++;
    setTimeout(typeVimeo, speed);
  }
}

function typeBehance() {
  if (p < txtBehance.length) {
    document.getElementById("txtBehance").innerHTML += txtBehance.charAt(p);
    p++;
    setTimeout(typeBehance, speed);
  }
}

function typeInstagram() {
  if (q < txtInstagram.length) {
    document.getElementById("txtInstagram").innerHTML += txtInstagram.charAt(q);
    q++;
    setTimeout(typeInstagram, speed);
  }
}




//IMAGENS LANDING ABOUT
const sobreImg= document.querySelectorAll('.sobre-imgs');

sobreImg.forEach(function(imgs) {

  // get random image
  let allImgs= ['images/ensaios/amelia/1.png' , 'images/ensaios/amelia/2.png' , 'images/ensaios/amelia/3.png' , 'images/ensaios/amelia/4.png' , 'images/ensaios/amelia/5.png' , 'images/ensaios/amelia/6.png' , 'images/ensaios/amelia/7.png' , 'images/ensaios/amelia/8.png' , 'images/ensaios/memorias/1.png' , 'images/ensaios/memorias/2.png' , 'images/ensaios/memorias/3.png' , 'images/ensaios/memorias/4.png' , 'images/ensaios/memorias/5.png' , 'images/ensaios/memorias/6.png' , 'images/ensaios/memorias/7.png' , 'images/ensaios/memorias/8.png' , 'images/ensaios/memorias/9.png' , 'images/ensaios/memorias/10.png' , 'images/ensaios/memorias/11.png' , 'images/ensaios/memorias/12.png' , 'images/ensaios/memorias/13.png' , 'images/ensaios/toque/1.png' , 'images/ensaios/toque/2.png' , 'images/ensaios/toque/3.png' , 'images/ensaios/toque/4.png' , 'images/ensaios/toque/5.png' , 'images/ensaios/toque/6.png' , 'images/ensaios/toque/7.png' , 'images/ensaios/toque/8.png' , 'images/ensaios/toque/9.png' , 'images/design/erre/1.png' , 'images/design/erre/2.png' , 'images/design/erre/4.png' , 'images/design/erre/5.png' , 'images/design/erre/15.png' , 'images/design/erre/18.png' , 'images/design/erre/19.png' , 'images/design/residir/1.jpg' , 'images/design/residir/2.png' , 'images/design/residir/4.png' , 'images/design/residir/1.jpg'];

  imgs.src = allImgs[Math.floor(Math.random()*allImgs.length)];


  // random position insite "sobre-imgs-space"
  let imgsSpaceSobre = document.querySelector('.sobre-imgs-space');
  let widthSpaceSobre = imgsSpaceSobre.offsetWidth;
  let heightSpaceSobre = imgsSpaceSobre.offsetHeight;
    
  imgs.style.left= Math.random() * widthSpaceSobre + "px"; // 👈🏼 Horizontally

  imgs.style.bottom = Math.random() * heightSpaceSobre + "px" ; // 👈🏼 Vertically


  // do something after 1s
  setTimeout(function(){
    imgs.style.left= "-100px";
  },1000);


  // random rotation 
  const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)'; //(entre -10deg e 10deg)


});







// FOOTER -----------------------