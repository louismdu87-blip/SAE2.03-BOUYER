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


function getAllMovies($age = 0) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT * FROM Movie WHERE min_age <= :age";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age, PDO::PARAM_INT);
    $stmt->execute();
    
    return $stmt->fetchAll(PDO::FETCH_OBJ);
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


function addProfile($name, $url, $age) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "INSERT INTO Profile (name, avatar, min_age) 
            VALUES (:name, :url, :age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':url', $url);
    $stmt->bindParam(':age', $age);
    $stmt->execute();
    $res = $stmt->rowCount();
    return $res;
}

function getAllProfiles() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name, avatar, min_age FROM Profile"; 
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
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
