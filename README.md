Ce projet nécéssite l'utilisation d'un back-end. 

<div style="text-align: center; width: 100%">
VERSION EN FRANCAIS  
</div>

___
___
Utiliser une API pour un compte utilisateur bancaire avec React    

Ce projet a été crée avec [Create React App](https://github.com/facebook/create-react-app), en utilisant les modèles [Redux](https://redux.js.org/) et [Redux Toolkit](https://redux-toolkit.js.org/).


<div style="text-align: center; width: 100%">
  <img src="./public/logo_name.jpg" alt="logo">
</div>

|![logo.jpg](/public/logo.jpg) |
|:---:|
# objectif 
## A. Phase 1 : Authentification des utilisateurs

 - Créer l'application web complete et responsive avec React.
 - Utiliser Redux pour gérer l'état (le state) de l'ensemble de l'application.
 - Ce que doit faire l'application 

    - L'utilisateur peut visiter la page d'accueil 
    - L'utilisateur peut se connecter au systeme
    - L'utilisateur peut se déconnecter du systeme
    - L'utilisateur peut ne peut pas voir les informations relatives à son propre profil qu'après s'être connecté 
    - L'utilisateur peut modifier le profil et conserver les données dans la base de données

    
---
## B. Phase 2  : Transactions
- Encore en phase de conception , nous mettons au point une fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :
    - de voir leurs transactions pour le mois en cours
    - de visualiser les détails d'une transaction dans une autre vue
    - de modifier une transaction
    - de supprimer une transaction
    - de créer une nouvelle transaction

Parmi les éléments clés à spécifier à chaque endPoint de l'api , il faudra: 
- la méthode HTTP à utiliser(POST, GET, PUT, DELETE)
- la route à utiliser (par exemple /store/inventory)
- la description de ce à quoi correspond l'endPoint (par exemple : "Récupère la liste des produits en stock")
- les parametres pour tenir compte des differents scenarios (par exemple : "itemld(facultatif) : ID de l'item à récupérer")
- les differentes reponses avec les codes de status HTTP (par exemple : "200 OK - La requête a réussi")


## Ressources :
 - [HTML statique et CSS fourni](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)
 - [modèles issues](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)
 - [fork du projet](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
 - [Swagger](https://editor.swagger.io/) pour obtenir une documentation plus détaillée.
 - [cours Redux](https://openclassrooms.com/fr/courses/7150626-utilisez-le-state-manager-redux-pour-gerer-l-etat-de-vos-applications?archived-source=5511091)

---
## Outils:
- React version 18.2.0
- Redux/toolkit version 1.9.5
- sass version 1.62.1
- react-router-dom version 18.2.0
- react-redux version 8.0.5

---
Voulez-vous installer et lancer l’application frontend ?

[clone the project]()

npm install Lance l’application en mode développement.

Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur. npm start

npm start

npm run docs ( script)

npm run deploy : mise à jour  githubPages
___
___

<div style="text-align: center; width: 100%">
ENGLISH  VERSION     
</div>

___
___

This project requires the use of a back-end. 
# Using an API for a bank user account with React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

---

<div style="text-align: center; width: 100%">
  <img src="./public/logo_name.jpg" alt="logo">
</div>

|![logo.jpg](/public/logo.jpg) |
|:---:|

# Objective

## A. Phase 1: User Authentication
- Create a complete and responsive web application with React.
- Use Redux to manage the state of the entire application.

- The user can visit the home page
- The user can log in to the system
- The user can log out of the system
- The user can only see information related to their own profile after logging in
- The user can modify the profile and save the data in the database

---

## B. Phase 2: Transactions
- still in the design phase, we are developing a feature for transactions that should allow users:
    - to see their transactions for the current month
    - to view the details of a transaction in another view
    - to modify a transaction
    - to delete a transaction
    - to create a new transaction

Among the key elements to specify at each API endpoint, it will be necessary:
- the HTTP method to use (POST, GET, PUT, DELETE)
- the route to use (for example /store/inventory)
- the description of what the endPoint corresponds to (for example: "Retrieve the list of products in stock")
- the parameters to take into account different scenarios (for example: "itemld (optional): ID of the item to retrieve")
- the different responses with HTTP status codes (for example: "200 OK - The request was successful")

## Resources
- [Static HTML and CSS provided](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)
- [see details of github issue templates](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)
- [project fork](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
- [Swagger](https://editor.swagger.io/) editing tool for more detailed documentation.
- [cours Redux](https://openclassrooms.com/fr/courses/7150626-utilisez-le-state-manager-redux-pour-gerer-l-etat-de-vos-applications?archived-source=5511091)
---

## Tools:
- React version 18.2.0
- Redux/toolkit version 1.9.5
- sass version 1.62.1
- react-router-dom version 18.2.0
- react-redux version 8.0.5

---

Do you want to install and launch frontend app?
[clone the project]()
npm install
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
npm start



