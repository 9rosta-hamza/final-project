
let click = document.querySelector("#button10")


click.addEventListener('click', function textarea(event) {
    event.preventDefault();
    function contacternous(email, telephone, nom, message) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.message = message;
    }
    const email = document.querySelector("#email").value;
    const telephone = document.querySelector("#tel").value;
    const prenom = document.querySelector("#prenom").value;
    const nom = document.querySelector("#nom").value;
    const message = document.querySelector("#textarea1").value;
    const person = new contacternous(email, telephone, nom, message)
    console.log(person)

})