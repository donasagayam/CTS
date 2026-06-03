function Event(name, date, seats) {

    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        return "Seats Available";
    }

    return "Fully Booked";
};

const event1 = new Event(
    "Music Fest",
    "15-Aug-2025",
    25
);

console.log(event1.checkAvailability());

Object.entries(event1).forEach(([key, value]) => {

    console.log(`${key}: ${value}`);

});