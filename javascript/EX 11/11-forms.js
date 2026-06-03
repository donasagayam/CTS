const form =
document.getElementById("registrationForm");

const errors =
document.getElementById("errors");

form.addEventListener(
"submit",
function(event){

event.preventDefault();

errors.innerHTML = "";

const name =
form.elements["username"].value;

const email =
form.elements["email"].value;

const selectedEvent =
form.elements["event"].value;

let validationErrors = [];

if(name.trim() === ""){

validationErrors.push(
"Name is required"
);

}

if(email.trim() === ""){

validationErrors.push(
"Email is required"
);

}

if(selectedEvent === ""){

validationErrors.push(
"Please select an event"
);

}

if(validationErrors.length > 0){

validationErrors.forEach(error => {

const p =
document.createElement("p");

p.className = "error";

p.textContent = error;

errors.appendChild(p);

});

return;
}

alert(
`Registered Successfully for ${selectedEvent}`
);

});