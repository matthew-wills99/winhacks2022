function displayModalLogin() {
    document.getElementById("loginModal").style.display="block";
}

function hideModalLogin() {
    document.getElementById("loginModal").style.display="none";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
}

window.onmousedown = function(event) {
    let modalLogin = document.getElementById("loginModal")
    if (event.target == modalLogin) {
        hideModalLogin();
    }
}
//Signup
function displayModalSignup() {
    document.getElementById("signupModal").style.display="block";
    hideModalLogin();
}

function hideModalSignup() {
    document.getElementById("signupModal").style.display="none";
}

window.onmousedown = function(event) {
    let modalSignup = document.getElementById("signupModal")
    if (event.target == modalSignup) {
        hideModalSignup();
    }
}