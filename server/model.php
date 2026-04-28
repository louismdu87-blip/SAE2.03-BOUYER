<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "bouyer17");
define("DBLOGIN", "bouyer17");
define("DBPWD", "bouyer17");


function getAllMovies(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select Movie.id, Movie.name,  Movie.image, Movie.id_category, Category.name as label from Movie INNER JOIN Category ON Category.id = Movie.id_category WHERE min_age <= :min_age ORDER BY Category.name";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':min_age', $min_age);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function addMovie($n, $y, $l, $de, $d, $c, $im, $url, $min){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    
    $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
    VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)" ;
    
    $stmt = $cnx->prepare($sql);
    
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':year', $y);
    $stmt->bindParam(':length', $l); 
    $stmt->bindParam(':description', $de);
    $stmt->bindParam(':director', $d);
    $stmt->bindParam(':id_category', $c);
    $stmt->bindParam(':image', $im);
    $stmt->bindParam(':trailer', $url); 
    $stmt->bindParam(':min_age', $min);
    $stmt->execute();
    $res = $stmt->rowCount();
    return $res;
}


function getAllCategories() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name FROM Category"; 
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}




function getMovieDetail($id){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "select Category.name as label, Movie.* from Movie INNER JOIN Category ON Category.id = Movie.id_category WHERE Movie.id = :id";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $res = $stmt->fetch(PDO::FETCH_OBJ);
    return $res;
}
