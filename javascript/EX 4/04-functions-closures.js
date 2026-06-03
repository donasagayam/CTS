const events = [];

function addEvent(name, category) {

    events.push({
        name,
        category
    });

    console.log("Event Added");
}

function registerUser(eventName) {

    console.log(`User registered for ${eventName}`);
}

function filterEventsByCategory(category) {

    return events.filter(
        event => event.category === category
    );
}

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        return totalRegistrations;
    };
}

const trackMusicRegistrations = registrationTracker();

console.log(trackMusicRegistrations());
console.log(trackMusicRegistrations());
console.log(trackMusicRegistrations());

addEvent("Music Night", "Music");
addEvent("Food Festival", "Food");

console.log(filterEventsByCategory("Music"));

function searchEvents(callback) {

    callback(events);
}

searchEvents(data => console.log(data));