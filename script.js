let count = 0;
const countDisplay = document.getElementById("count");

function increment() {
    count++;
    countDisplay.textContent = count;
}

function decrement() {
    if(count != 0) count--;
    countDisplay.textContent = count;
}

function reloadPage() {
    location.reload();
}   