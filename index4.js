let click = document.querySelector("#button111")


click.addEventListener('click', function PRÉINSCRIVEZ(event) {
    event.preventDefault();
    function PRÉINSCRIVEZVOUS(email, prenom, nom, COACH) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.COACH = COACH
    }
    const email = document.querySelector("#email2").value;
    const prenom = document.querySelector("#prenom2").value;
    const nom = document.querySelector("#nom2").value;
    const COACH = document.querySelector("#select").value;
    const person1 = new PRÉINSCRIVEZVOUS(email, nom, prenom, COACH)
    console.log(person1)

})