import { saisie, listeTaches } from './elements.js';

// Fonction pour ajouter une tâche
export function ajouterTache() {
    // Récupérer la valeur saisie dans le champ de saisie
        // let x =document.getElementById("Submit").value
        // document.getElementById("demo").innerHTML=x;
    const nouvelleTache = saisie.value;


    // Vérifier si la saisie n'est pas vide
    if (nouvelleTache.trim() !== '') {
        // Créer un nouvel élément li pour la nouvelle tâche
        const nouvelleTacheElement = document.createElement("li");

        // Créer un élément checkbox pour la tâche
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Ajouter la nouvelle tâche et la checkbox à l'élément li
        nouvelleTacheElement.appendChild(checkbox);
        nouvelleTacheElement.appendChild(document.createTextNode(nouvelleTache));

        // Ajouter l'élément li à la liste des tâches
        listeTaches.appendChild(nouvelleTacheElement);

        // Effacer le champ de saisie après avoir ajouté la tâche
        saisie.value = '';
    } else {
        alert("Veuillez saisir une tâche valide !");
    }
}
// Fonction pour supprimer une tâche
export function supprimerTache(tacheElement) {
    // Supprimer l'élément li correspondant à la tâche
    tacheElement.remove();
}
