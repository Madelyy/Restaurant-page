import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import bg from "./images/background.jpg";

const image = document.createElement("img");
image.src = bg;
image.alt = "background";
image.classList.add("home-img");

image.style.opacity = "0.5"; 
image.style.position = "fixed";
image.style.zIndex = "-1";
image.style.width = "100%";
image.style.height = "100%";
image.style.top = "0";
image.style.objectFit = "cover";

document.body.appendChild(image);



function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

document.getElementById("home").onclick = () => {
    clearContent();
    loadHome();
};

document.getElementById("menu").onclick = () => {
    clearContent();
    loadMenu();
};

document.getElementById("contact").onclick = () => {
    clearContent();
    loadContact();
};