homeCounter = document.getElementById("home-counter");
guestCounter = document.getElementById("guest-counter");
function incrementCount(name,n) {
    let counterID = document.getElementById(`${name}-counter`)
    let count = parseInt(counterID.innerHTML);
    count += n;
    counterID.innerHTML = count;
}

