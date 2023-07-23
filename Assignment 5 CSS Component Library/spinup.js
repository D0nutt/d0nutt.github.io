document.getElementById("navbar-html").innerText = 
`<nav class="navbar">
  <section class="navbar-title">
  <button class="navbar-menu-button" id="navbar-button">
    <span class="material-symbols-outlined">menu</span>
  </button>
  <h1 class="nav-web-title">Your Website Title</h1>
  </section>
  <section class="navbar-links">
    <a>Page 1</a>
    <a>Page 2</a>
    <a>Page 3</a>
    <a>Page 4</a>
  </section>
</nav>
`;

document.getElementById("navbar-css").innerText = 
`.navbar {
  display: flex;
  height: auto;
  width: auto;
  background-color: #ad2831;
  padding: 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
}

.navbar-title {
    display: flex;
    align-items: center;
}

.navbar .navbar-title .navbar-menu-button {
    display: flex;
    align-items: center;
    border: none;
    margin: 0%;
    padding: 0%;
    background: transparent;
    color: white;
    cursor: pointer;
}

.navbar .navbar-title .nav-web-title {
    align-items: center;
    margin: 0%;
    padding-top: 2px;
    padding-left: 10px;
}

.navbar .navbar-links {
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 50px;
    cursor: pointer;
}
`;

document.getElementById("navbar-js").innerText = 
`document.getElementById("navbar-button").addEventListener("click", () => {
    // Add what you want your button to do Here. 
});
`;

let isNavDrawerOpen = false;
const navDrawer = document.getElementById("navDrawer");

document.getElementById("navbar-button").addEventListener("click" , () => {
    isNavDrawerOpen = !isNavDrawerOpen;
    navDrawer.dataset.open = `${isNavDrawerOpen}`;
});

document.getElementById("navDrawer-html").innerText = 
`<nav class="navigation-drawer" id="navDrawer">
  <a>Home</a>
  <a>Dashboard</a>
  <a>Profile</a>
  <a>Settings</a>
</nav>
`;

document.getElementById("navDrawer-css").innerText = 
`.navigation-drawer {
  top: 64px;
  left: -300px;
  width: 300px;
  bottom: 0px;
  background-color: #ad2831;
  transition: all .3s ease;
  position: absolute;
}

.navigation-drawer[data-open="true"] {
  left: 0px;
}

.navigation-drawer > a {
  display: flex;
  flex-direction: column;
  padding-left: 22px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
}
`;

document.getElementById("navDrawer-js").innerText = 
`let isNavDrawerOpen = false;
const navDrawer = document.getElementById("navDrawer");

document.getElementById("navbar-button").addEventListener("click" , () => {
    isNavDrawerOpen = !isNavDrawerOpen;
    navDrawer.dataset.open = \`\${isNavDrawerOpen}\`\;
});
`;

const normButton = document.getElementById("norm-button");

normButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

normButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

normButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

const iconButton = document.getElementById("icon-button");

iconButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

iconButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

iconButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

const fabButton = document.getElementById("fab-button");

fabButton.addEventListener("click", () => {
  window.open('https://www.google.com/','_blank','resizable=yes')
});

fabButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

fabButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

fabButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

document.getElementById("buttons-html").innerText = 
`<!-- Html for the normal button. -->

<button class="normal-button" id="norm-button">Download</button>

<!-- Html for the icon button. -->

<button class="icon-button" id="icon-button">
  <span class="material-symbols-outlined">
    download
  </span>Download
</button>

<!-- Html for the floating icon button. -->

<button class="floating-icon-button" id="fab-button">
  <span class="material-symbols-outlined">
    print
  </span>
</button>
`;

document.getElementById("buttons-css").innerText = 
`/* Css for the normal button. */

.normal-button{
    background-color: #ad2831;
    width: fit-content;
    height: 75px;
    font-weight: bold;
    margin: 0%;
    padding: 16px;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 16px;
    cursor: pointer;
    font-size: 25px;
    border: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all .3s ease;
}

.normal-button:hover {
    background-color: #640d14;
}

.normal-button[data-pressed="true"] {
    box-shadow: none;
}

/* Css for the icon button. */

.icon-button {
    background-color: #ad2831;
    width: fit-content;
    height: 75px;
    font-weight: bold;
    margin: 0%;
    padding: 16px;
    display: flex;
    gap: 5px;
    align-items: center;
    color: white;
    border-radius: 16px;
    cursor: pointer;
    font-size: 25px;
    border: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all .3s ease;
}

.icon-button > span {
    font-size: 50px;
    pointer-events: none;
}

.icon-button:hover {
    background-color: #640d14;
}

.icon-button[data-pressed="true"] {
    box-shadow: none;
}

/* Css for the floating icon button. */

.floating-icon-button {
    background-color: #ad2831;
    width: fit-content;
    height: 75px;
    font-weight: bold;
    margin: 0%;
    padding: 14px;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    border-radius: 40px;
    border: none;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: all .3s ease;
}

.floating-icon-button > span {
    font-size: 50px;
    pointer-events: none;
}

.floating-icon-button:hover {
    background-color: #640d14;
}

.floating-icon-button[data-pressed="true"] {
    box-shadow: none;
}
`;

document.getElementById("buttons-js").innerText = 
`// Js for the normal button.

const normButton = document.getElementById("norm-button");

normButton.addEventListener("click" , () => {
    // Add what you want your button to do Here.
});

// This is for the button animation.

normButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

normButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

normButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

// Js for the icon button.

const iconButton = document.getElementById("icon-button");

iconButton.addEventListener("click" , () => {
    // Add what you want your button to do Here.
});

// This is for the button animation.

iconButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

iconButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

iconButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

// Js for the floating icon button.

const fabButton = document.getElementById("fab-button");

fabButton.addEventListener("click" , () => {
    // Add what you want your button to do Here.
});

// This is for the button animation.

fabButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

fabButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

fabButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});
`;

const carouselContainer = document.querySelector('.carousel-slides');
const images = carouselContainer.getElementsByTagName('img');
const imageCount = images.length;
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
};

setInterval(showNextImage, 3000);

document.getElementById("carousel-html").innerText = 
`<!-- You can add as many images as you want -->

<div class="carousel-slides">
  <img src="image1.jpg" alt="img1">
  <img src="image2.jpg" alt="img2">
  <img src="image3.jpg" alt="img3">
  <img src="image4.jpg" alt="img4">
</div>
`;

document.getElementById("carousel-css").innerText = 
`.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slides > img {
  width: fit-content;
  height: 500px;
}
`;

document.getElementById("carousel-js").innerText = 
`const carouselContainer = document.querySelector('.carousel-slides');
const images = carouselContainer.getElementsByTagName('img');
const imageCount = images.length;
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = \`translateX($\{offset}%)\`\;
};

setInterval(showNextImage, 3000);
`;

const loader2 = document.getElementById("loader-two")

loader2.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    loader2.style.borderColor = `rgb(${red}, ${green}, 
      ${blue}) transparent white transparent`
});

document.getElementById("spinners-html").innerText = 
`<!-- First spinner. -->

<div class="loader1"></div>

<!-- Second Spinner. -->

<div class="loader2" id="loader-two"></div>

<!-- Third Spinner. -->

<div class="loader3"><h1>LOADING</h1></div>
`;

document.getElementById("spinners-css").innerText = 
`/* First spinner. */

.loader1 {    
    width: 100px;
    height: 100px;
    margin: 0%;
    padding: 0%;
    border: 20px solid white;
    border-radius: 50%;
    border-top: 20px solid #ad2831;
    animation: loader1 4s linear infinite;
}

@keyframes loader1 {
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
}

/* Second spinner. */

.loader2 {
    width: 100px;
    height: 100px;
    margin: 0%;
    padding: 0%;
    border-radius: 50%;
    border: 20px solid white;
    border-color: #ad2831 transparent white transparent;
    animation: loader2 2s linear infinite;
}

@keyframes loader2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}

/* Third spinner. */

.loader3 {
    height: fit-content;
    width: fit-content;
    margin: 0%;
    padding: 0%;
}

.loader3 > h1 {
    margin: 0%;
    padding: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3em;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, white, #ad2831, white);
    background-size: 80%;    
    background-repeat: no-repeat;
    animation: animate 5s linear infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
    0% {
        background-position: -500%;
    }
    100% {
        background-position: 500%;
    }
}
`;

document.getElementById("spinners-js").innerText = 
`// Js for the second spinner/loader.

const loader2 = document.getElementById("loader-two")

loader2.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    loader2.style.borderColor = \`rgb(\${red}, \${green}, 
      \${blue}) transparent white transparent\`
});
`;