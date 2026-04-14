export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("home");

    const sectionAbout = document.createElement("div");
    sectionAbout.classList.add("home-section");

    const title = document.createElement("h1");
    title.textContent = "☕ Sugar Crumbs";
    title.classList.add("home-title");

    const description = document.createElement("p");
    description.textContent =
                        `Sugar Crumbs is an artisanal bakery where every dessert tells a story.
                        Born from traditional recipes with a modern touch, we create sweets
                        designed to turn simple moments into lasting memories.`;
    description.classList.add("home-text");

    sectionAbout.appendChild(title);
    sectionAbout.appendChild(description);

    const sectionHours = document.createElement("div");
    sectionHours.classList.add("home-section");

    const hoursTitle = document.createElement("h1");
    hoursTitle.textContent = "🕒 Opening Hours";
    hoursTitle.classList.add("home-subtitle");

    const opening = document.createElement("p");
    opening.innerHTML =
                        `<b>Monday - Friday:</b> 9:00 AM - 7:00 PM\n
                        <b>Saturday:</b> 10:00 AM - 8:00 PM\n
                        <b>Sunday:</b> 10:00 AM - 4:00 PM\n
                        Special orders available with 24h notice`;
    opening.classList.add("home-hours");

    sectionHours.appendChild(hoursTitle);
    sectionHours.appendChild(opening);

    const sectionLocation = document.createElement("div");
    sectionLocation.classList.add("home-section");

    const locationTitle = document.createElement("h1");
    locationTitle.textContent = "📍 Location";
    locationTitle.classList.add("home-subtitle");

    const location = document.createElement("p");
    location.textContent = "Rosewood District, Sweet Avenue 142, Dulcehaven City";
    location.classList.add("home-location");

    sectionLocation.appendChild(locationTitle);
    sectionLocation.appendChild(location);

    container.appendChild(sectionAbout);
    container.appendChild(sectionHours);
    container.appendChild(sectionLocation);

    content.appendChild(container);
}