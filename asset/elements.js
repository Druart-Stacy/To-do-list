// Créer les éléments
export const contenaire = document.createElement('div');
export const listeTaches = document.createElement('ul');
export const boutonsoumission = document.createElement('button');
export const checkbox = document.createElement('input');
export const boutonsup = document.createElement('button');
export const saisie = document.createElement('input');

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
