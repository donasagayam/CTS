const events = [
    {
        name: "Music Night",
        category: "Music",
        seats: 50
    },
    {
        name: "Food Festival",
        category: "Food",
        seats: 100
    }
];

// default parameter
function registerUser(
name = "Guest"
) {

    console.log(
    `Welcome ${name}`
    );
}

registerUser();
registerUser("John");

// destructuring
const {
    name,
    category,
    seats
} = events[0];

console.log(name);
console.log(category);
console.log(seats);

// spread operator
const clonedEvents = [...events];

const musicEvents =
clonedEvents.filter(
event =>
event.category === "Music"
);

console.log(musicEvents);