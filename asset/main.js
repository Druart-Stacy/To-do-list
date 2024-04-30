import { ajouterTache, supprimerTache } from './taches.js'; // Importer les fonctions d'ajout et de suppression de tâches depuis le fichier taches.js
import { boutonsoumission, boutonsup } from './elements.js'; // Importer les éléments DOM nécessaires depuis le fichier elements.js

// Ajouter un écouteur d'événements au bouton de soumission
boutonsoumission.addEventListener('click', ajouterTache);

// Ajouter un écouteur d'événements au bouton de suppression
boutonsup.addEventListener('click', () => {
    // Sélectionner toutes les cases à cocher cochées
    const casesCochees = document.querySelectorAll('input[type="checkbox"]:checked');

    // Parcourir les cases cochées et les supprimer de la liste des tâches
    casesCochees.forEach(caseCochee => {
        // Sélectionner l'élément parent de la case cochée (li)
        const tacheElement = caseCochee.parentElement;
        
        // Appeler la fonction pour supprimer la tâche avec l'élément li correspondant
        supprimerTache(tacheElement);
    });
});
