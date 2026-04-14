import cakeImg from "./images/chocolate-cake.jpg";
import cheesecakeImg from "./images/strawberry-cheesecake.jpg";
import vainllaImg from "./images/vanilla-cupcake.jpg";
import macaronImg from "./images/macarons.jpg";
import croissantImg from "./images/croissant.jpg";
import latteImg from "./images/caramel-latte.jpg";
import hotchocolateImg from "./images/hot-chocolate.jpg";
import milkshakeImg from "./images/strawberry-milkshake.jpg";
import frappeImg from "./images/vanilla-frappe.jpg";
import lemonadeImg from "./images/lemonade.jpg";

export default function loadMenu() {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("menu");

    const items = [
        { name: "Chocolate Cake", price: "$6", img: cakeImg, category: "dessert" },
        { name: "Butter Croissant", price: "$3", img: croissantImg, category: "dessert" },
        { name: "Strawberry Cheesecake", price: "$7", img: cheesecakeImg, category: "dessert" },
        { name: "Macaron Selection", price: "$5", img: macaronImg, category: "dessert" },
        { name: "Vanilla Cupcake", price: "$3", img: vainllaImg, category: "dessert" },

        { name: "Iced Caramel Latte", price: "$4", img: latteImg, category: "drink" },
        { name: "Hot Chocolate Deluxe", price: "$4", img: hotchocolateImg, category: "drink" },
        { name: "Strawberry Milkshake", price: "$5", img: milkshakeImg, category: "drink" },
        { name: "Vanilla Frappé", price: "$4", img: frappeImg, category: "drink" },
        { name: "Fresh Lemonade", price: "$3", img: lemonadeImg, category: "drink" },
    ];

    const desserts = items.filter(item => item.category === "dessert");
    const drinks = items.filter(item => item.category === "drink");

    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("menu-section");

    const drinksContainer = document.createElement("div");
    drinksContainer.classList.add("menu-section");

    const dessertsTitle = document.createElement("h2");
    dessertsTitle.textContent = "DESSERTS";

    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "DRINKS";

    dessertsContainer.appendChild(dessertsTitle);
    drinksContainer.appendChild(drinksTitle);

    desserts.forEach(item => {
        dessertsContainer.appendChild(createCard(item));
    });

    drinks.forEach(item => {
        drinksContainer.appendChild(createCard(item));
    });

    container.appendChild(dessertsContainer);
    container.appendChild(drinksContainer);

    content.appendChild(container);
}

function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.img;

    const title = document.createElement("h3");
    title.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    return card;
}