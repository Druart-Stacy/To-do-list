// Créer les éléments
const contenaire = document.createElement('div');
const listeTaches = document.createElement('ul');
const boutonsoumission = document.createElement('button');
const checkbox = document.createElement('input');
const boutonsup = document.createElement('button');
const saisie = document.createElement('input');

// Définir le type de champ de saisie
saisie.type = "text";

// Ajouter des classes aux éléments
contenaire.classList.add('contenaire');
boutonsoumission.classList.add('bouton-soumission');
checkbox.classList.add('checkbox');
boutonsup.classList.add('boutonsup');

// Ajouter des identifiants aux éléments
contenaire.id = 'contenaire';
listeTaches.id = 'listeTaches';

// Définir le texte pour les boutons
boutonsoumission.textContent = 'Ajouter';
boutonsup.textContent = 'Supprimer';

// Définir le type de l'input checkbox
checkbox.type = 'checkbox';

// Sélectionner le corps du document
const body = document.body || document.getElementsByTagName('body')[0];

// Ajouter les éléments au corps du document
body.appendChild(contenaire);
contenaire.appendChild(listeTaches);
contenaire.appendChild(boutonsoumission);
contenaire.appendChild(checkbox);
contenaire.appendChild(boutonsup);

// Ajouter le champ de saisie à l'élément boutonsoumission
boutonsoumission.appendChild(saisie);

// Fonction pour ajouter une tâche
function ajouterTache() {
    // Récupérer la valeur saisie dans le champ de saisie
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

    // // debut ajout d'item
    //     let key = 'Item 1';
    //     localStorage.setItem(key, 'Value');
    // // créer les entrées pour l’objet  avec  deux arguments,key et value  
    //     let myItem = localStorage.getItem(key);
    // //lire les entrées
    //     localStorage.setItem(key, 'New Value');
    // //maj des entrees avec encore ue foiskey et value comme argument

    // // fin ajout d'item


    // // debut supperesion d'item
    // //suprimer avec un argument key
    //     localStorage.removeItem(key);
    // //effacer tous les éléments de . Cela peut être fait avec la méthode :localStorageclear()
    //     localStorage.clear();
    // // fin supperesion d'item