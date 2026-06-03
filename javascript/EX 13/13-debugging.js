document
.getElementById("debugBtn")
.addEventListener(
"click",
function(){

console.log(
"Step 1: Button Clicked"
);

const registrationData = {

name:"John",

email:"john@example.com",

event:"Music Night"

};

console.log(
"Step 2: Data Created"
);

console.log(
registrationData
);

debugger;

fetch(
"https://jsonplaceholder.typicode.com/posts",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(
registrationData
)

}
)

.then(response =>
response.json()
)

.then(data => {

console.log(
"Step 3: Request Successful"
);

console.log(data);

})

.catch(error => {

console.error(
"Step 4: Error Found"
);

console.error(error);

});

});