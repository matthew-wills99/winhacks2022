function displayModalLogin() {
    document.getElementById("loginModal").style.display="block";
}

function hideModalLogin() {
    document.getElementById("loginModal").style.display="none";
    document.getElementById("loginEmail").value="";
    document.getElementById("loginPass").value="";
}

function displayModalSignup() {
    document.getElementById("signupModal").style.display="block";
    hideModalLogin();
}

function hideModalSignup() {
    document.getElementById("signupModal").style.display="none";
    document.getElementById("signupFName").value="";
    document.getElementById("signupLName").value="";
    document.getElementById("signupEmail").value="";
    document.getElementById("signupPass").value="";
    document.getElementById("signupCPass").value="";
}

window.onmousedown = function(event) {
    let modalSignup = document.getElementById("signupModal")
    if (event.target == modalSignup) {
        hideModalSignup();
    }

    let modalLogin = document.getElementById("loginModal")
    if (event.target == modalLogin) {
        hideModalLogin();
    }
}