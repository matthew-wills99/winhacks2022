function displayModal() {
    document.getElementById("loginModal").style.display="block";
}

function hideModal() {
    document.getElementById("loginModal").style.display="none";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
}

window.onmousedown = function(event) {
    let modal = document.getElementById("loginModal")
    if (event.target == modal) {
        hideModal();
    }
}