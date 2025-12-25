const form = document.getElementById("form-calcul");
const erreurs = document.getElementById("erreurs");
const listeHistorique = document.getElementById("liste-historique");

let historique = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    erreurs.textContent = ""; // reset erreurs

    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const op = document.getElementById("operation").value;

    // Validation
    if (a === "" || b === "") {
        erreurs.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (op === "/" && Number(b) === 0) {
        erreurs.textContent = "Division par zéro interdite.";
        return;
    }

    // Calcul
    const numA = Number(a);
    const numB = Number(b);
    let result;

    switch (op) {
        case "+": result = numA + numB; break;
        case "-": result = numA - numB; break;
        case "*": result = numA * numB; break;
        case "/": result = numA / numB; break;
    }

    // Ajout à l'historique
    const operation = `${numA} ${op} ${numB} = ${result}`;
    historique.push(operation);

    // Affichage DOM
    afficherHistorique();
});

function afficherHistorique() {
    listeHistorique.innerHTML = "";

    historique.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listeHistorique.appendChild(li);
    });
}
