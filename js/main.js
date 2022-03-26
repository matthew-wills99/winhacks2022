
let btn = document.getElementById("login");
let span = document.getElementsByClassName("close")[0];

function displayModal() {
    document.getElementById("loginModal").style.display="block";
}

function hideModal() {
    document.getElementById("loginModal").style.display="none";
}


window.onclick = function(event) {
    let modal = document.getElementById("loginModal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}