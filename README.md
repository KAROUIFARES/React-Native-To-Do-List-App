<h1>React Native To-Do List App</h1> 
- Cette application React Native propose une simple liste de tâches avec des fonctionnalités d'ajout et de suppression.

* Fonctionnalités
  1. Ajout de tâches : Les utilisateurs peuvent ajouter une nouvelle tâche en saisissant du texte dans un champ de texte et en appuyant sur le bouton "Ajouter".
  2. Suppression de tâches : Chaque tâche affichée est accompagnée d'un bouton "Supprimer" permettant de retirer la tâche de la liste.

* Structure du Code
  - Le composant principal, TodoListScreen, utilise l'état local (useState) pour gérer la liste des tâches et la tâche en cours d'édition. Les tâches sont stockées sous la forme d'objets avec un identifiant unique généré à partir de la date.
  - La mise en page utilise des composants de base de React Native tels que View, Text, TextInput, Button, et FlatList. Chaque tâche est rendue avec un style qui inclut un bouton "Supprimer" stylisé en rouge.

* Styles
  - Les styles sont définis à l'aide de l'API StyleSheet de React Native pour garantir une présentation cohérente et agréable.

