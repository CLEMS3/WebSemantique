# Projet Ouharkipedia - Web sémantique
## Présentation du projet

Le projet a pour objectif principal de permettre une meilleure compréhension de la notion de Web Sémantique et de son fonctionnement. Nous avons développé un moteur de recherche intelligent connectant diverses informations relatives à des conflits historiques (batailles et guerres).

### Fonctionnalités principales
- Recherche et affichage des dates, lieux, forces en présence, bilans humains et vainqueurs des conflits.
- Navigation entre les différents éléments reliés (lieux, généraux, conflits).
- Recherche textuelle avec auto-complétion et filtres par catégories.

## Technologies choisies

### Web sémantique
- **DBpedia** : Utilisation de l’API SPARQL pour interroger et récupérer des données sémantiques.
- **SPARQL** : Langage de requêtes utilisé pour interroger DBpedia.

### Frontend
- **React Next.js** : Framework pour le développement web côté client.
- **TypeScript** : Typage statique pour une meilleure fiabilité du code.
- **Tailwind CSS** : Framework CSS pour un design moderne et réactif.

### Collaboration
- Le code est hébergé sur un dépôt GitHub pour faciliter la collaboration entre les membres de l’équipe.

## Architecture générale

Le projet comporte 4 pages principales :
1. **Accueil** : Barre de recherche avec auto-complétion et navigation.
2. **Commandants** : Informations sur les généraux impliqués.
3. **Guerres** : Description des conflits historiques.
4. **Pays** : Informations liées aux lieux des conflits.
5. **Contact** : Page de contact.

## Instructions pour lancer le projet

### Prérequis
- **Node.js** (version 16 ou supérieure).
- **npm** pour la gestion des dépendances.
- Une connexion internet pour accéder à l’API DBpedia.
- Un navigateur

### Installation
1. Clonez le dépôt GitHub :
   ```bash
   git clone https://github.com/CLEMS3/WebSemantique.git
   cd ws-project
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Lancement en mode développement
1. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
2. Ouvrez votre navigateur à l’adresse : [http://localhost:3000](http://localhost:3000).

### Lancement pour la production
1. Générez les fichiers optimisés :
   ```bash
   npm run build
   ```
2. Lancez le serveur de production :
   ```bash
   npm start
   ```

## Contributeurs
- BRUNET Armand (https://github.com/armynion)
- CHAPARD Clément (https://github.com/CLEMS3)
- JOURDA Florian (https://github.com/floda69)
- LE VASSEUR Florian (https://github.com/Florian-LeVasseur)
- VENAILLE Arno (https://github.com/avenaille)
- WILLEM Amaury (https://github.com/memory5ty7)

---

Merci pour l'attention que vous portez à notre travail !

