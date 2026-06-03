const events = [
    { name: "Music Night", category: "Music" },
    { name: "Baking Workshop", category: "Workshop" }
];

// push()
events.push({
    name: "Rock Concert",
    category: "Music"
});

console.log(events);

// filter()
const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log("Music Events:", musicEvents);

// map()
const eventCards = events.map(
    event => `Workshop on ${event.name}`
);

console.log(eventCards);

document.getElementById("output").innerHTML =
eventCards.join("<br>");