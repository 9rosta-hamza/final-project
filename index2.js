let account = {
    email: "fawzi@gmail.com",
    password: "F12345"
}


let button = document.querySelector("#buttonconnectez")

button.addEventListener('click', function GetData(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#pwd").value;

    if (password.length <= 5) {
        alert("Le mot de passe doit être plus grand que 5");
    } else if (!/[A-Z]/.test(password)) {
        alert("Le mot de passe doit contenir au moins une lettre majuscule");
    } else if (!email.includes("@")) {
        alert("il doit être un email");
    }
    if (email === account.email && password === account.password) {
        let navbarnone = document.querySelector("#a")
        navbarnone.style.visibility = 'hidden';
        window.location.href = 'index.html';
    }
})