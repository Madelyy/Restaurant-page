import bakerImg from "./contact-profile/alcremie-mint-cream-berry.png";
import pastryImg from "./contact-profile/slurpuff.png";
import baristaImg from "./contact-profile/sinistea.png";
import managerImg from "./contact-profile/indeedee-female.png";
import serviceImg from "./contact-profile/blissey.png";
import deliveryImg from "./contact-profile/dragonite.png";

export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("contact");

    const section = document.createElement("div");
    section.classList.add("contact-section");

    const title = document.createElement("h2");
    title.textContent = "OUR TEAM";

    const contacts = [
        { name: "Alcremie", role: "Head Baker", img: bakerImg },
        { name: "Slurpuff", role: "Pastry Chef", img: pastryImg },
        { name: "Sinistea", role: "Barista", img: baristaImg },
        { name: "Indeedee", role: "Manager", img: managerImg },
        { name: "Blissey", role: "Customer Service", img: serviceImg },
        { name: "Dragonite", role: "Delivery & Logistic", img: deliveryImg }
    ];

    section.appendChild(title);

    contacts.forEach(person => {
        section.appendChild(createCard(person));
    });

    container.appendChild(section);
    content.appendChild(container);
}

function createCard(person) {
    const card = document.createElement("div");
    card.classList.add("card"); // 👈 igual que MENU

    const img = document.createElement("img");
    img.src = person.img;

    const name = document.createElement("h3");
    name.textContent = person.name;

    const role = document.createElement("p");
    role.textContent = person.role;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);

    return card;
}