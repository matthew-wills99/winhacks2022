function displayModal() {
    document.getElementById("loginModal").style.display="block";
}

function hideModal() {
    document.getElementById("loginModal").style.display="none";
}

window.onmousedown = function(event) {
    let modal = document.getElementById("loginModal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}