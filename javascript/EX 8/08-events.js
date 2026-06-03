const result =
document.getElementById("result");

document
.getElementById("registerBtn")
.onclick = function () {

    result.textContent =
    "Registration Successful";
};

document
.getElementById("category")
.onchange = function () {

    result.textContent =
    "Category Changed: " + this.value;
};

document
.getElementById("searchBox")
.addEventListener(
"keydown",
function(event){

    result.textContent =
    "Key Pressed: " + event.key;
});