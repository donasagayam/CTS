const events = [
    "Music Night",
    "Food Festival",
    "Baking Workshop"
];

const container =
document.querySelector("#eventContainer");

events.forEach(event => {

    const card =
    document.createElement("div");

    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px";

    card.innerHTML = `
        <h3>${event}</h3>
        <button>Register</button>
    `;

    container.appendChild(card);

});

function updateUI(message) {

    const p = document.createElement("p");

    p.textContent = message;

    container.appendChild(p);
}

updateUI("Events Loaded Successfully");