const eventName = "Community Music Fest";
const eventDate = "15-Aug-2025";

let availableSeats = 50;

console.log(`
Event Name: ${eventName}
Date: ${eventDate}
Available Seats: ${availableSeats}
`);

availableSeats++;

console.log("Seats after update:", availableSeats);

availableSeats--;

console.log("Seats after cancellation:", availableSeats);