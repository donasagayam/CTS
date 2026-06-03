const button =
document.getElementById("submitBtn");

const message =
document.getElementById("message");

button.addEventListener(
"click",
function(){

message.textContent =
"Submitting...";

setTimeout(() => {

fetch(
"https://jsonplaceholder.typicode.com/posts",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:"John",
email:"john@example.com",
event:"Music Night"
})
}
)

.then(response =>
response.json()
)

.then(data => {

message.textContent =
"Registration Successful";

console.log(data);

})

.catch(error => {

message.textContent =
"Registration Failed";

console.error(error);

});

},2000);

});