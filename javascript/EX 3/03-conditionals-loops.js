const events = [
    { name: "Music Show", seats: 10, active: true },
    { name: "Baking Workshop", seats: 0, active: true },
    { name: "Past Event", seats: 20, active: false }
];

const eventContainer = document.getElementById("events");

events.forEach(event => {

    if (event.active && event.seats > 0) {

        const p = document.createElement("p");

        p.textContent = `${event.name} - Seats: ${event.seats}`;

        eventContainer.appendChild(p);
    }

});

function register(event) {

    try {

        if (event.seats <= 0) {
            throw new Error("No seats available");
        }

        event.seats--;

        console.log("Registered successfully");

    } catch (error) {

        console.error(error.message);

    }

}

register(events[0]);
register(events[1]);