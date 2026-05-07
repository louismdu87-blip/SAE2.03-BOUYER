# Documentaion Base de Données



## Types de données

Table Profile :Identifiant (id) : Un entier (INT) en auto-incrément sert de clé primaire pour garantir l'unicité de chaque utilisateur.  
Types de données : Le nom (name) et le chemin de l'avatar (avatar) utilisent des VARCHAR(255) pour offrir une flexibilité sur la longueur des chaînes. L'âge (age) est un INT pour permettre des comparaisons numériques lors du filtrage.  

Table Movie :Organisation : Cette table regroupe toutes les caractéristiques techniques du film. Le synopsis est défini en type TEXT car sa longueur peut dépasser les limites d'un VARCHAR classique.  Attributs spécifiques : On retrouve des champs pour l'année (year), la durée (length) et les restrictions d'âge (min_age).

Table Category :Elle permet de normaliser la base en isolant les genres (Action, Drame, etc.) pour éviter les répétitions de texte dans la table des films.  

Table Favoris :Il s'agit d'une table de liaison issue de la relation entre Profile et Movie. Elle utilise une clé primaire composite (id_profile, id_movie) pour assurer qu'un utilisateur ne puisse pas ajouter deux fois le même film à sa liste.  


### Requêtes SQL model.php

SELECT Movie.*, Category.name AS label 
FROM Movie 
INNER JOIN Category ON Movie.id_category = Category.id 
WHERE Movie.min_age <= :age;

INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age);

INSERT INTO Profile (name, avatar, min_age) 
VALUES (:name, :url, :age);

UPDATE Profile SET name = :name, avatar = :url, min_age = :age WHERE id = :id;

SELECT id, name, avatar, min_age FROM Profile;

SELECT id, name FROM Category;

SELECT Category.name as label, Movie.* from Movie INNER JOIN Category ON Category.id = Movie.id_category WHERE Movie.id = :id;

INSERT IGNORE INTO Favoris (id_profile, id_movie) VALUES (:profile, :movie);

DELETE FROM Favoris WHERE id_profile = :profile AND id_movie = :movie;

SELECT Movie.*, Category.name AS label FROM Movie 
INNER JOIN Favoris ON Movie.id = Favoris.id_movie
LEFT JOIN Category ON Movie.id_category = Category.id
WHERE Favoris.id_profile = :profile;



## caridinalités

### movie --> category :
Un film est catégorisé au minimum par 1 catégorie et au maximum par 1 catégorie  (1;1)

### category --> profile :
Une catégorie peut catégoriser au minimum 0 film et au maximum n film  (0;n)

### movie --> profile :
Un film est aimé au minimum par 0 profil et au maximum par n profil  (0;n)

### profile --> movie :
un profil peut aimer au minimum 0 film et au maximum n film  (0;n)