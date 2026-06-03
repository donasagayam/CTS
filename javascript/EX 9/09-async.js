const loading =
document.getElementById("loading");

// Promise using then/catch
function loadEvents() {

    loading.innerHTML =
    "Loading...";

    fetch(
    "https://jsonplaceholder.typicode.com/posts"
    )

    .then(response =>
        response.json()
    )

    .then(data => {

        loading.innerHTML =
        "Loaded " + data.length +
        " events";

    })

    .catch(error => {

        console.error(error);

    });
}

// Async/Await Version
async function loadEventsAsync() {

    try {

        loading.innerHTML =
        "Loading...";

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        const data =
        await response.json();

        loading.innerHTML =
        "Loaded " + data.length +
        " events";

    }

    catch(error) {

        console.error(error);

    }
}