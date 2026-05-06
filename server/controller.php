<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readMoviesController($age = 0){
    $moviesList = getAllMovies($age); 
    $groupedMovies = [];
    
    foreach($moviesList as $movie){
        $catName = $movie->label; 
        
        if(!isset($groupedMovies[$catName])){
            $groupedMovies[$catName] = [];
        }
        $groupedMovies[$catName][] = $movie;
    }
    
    return $groupedMovies;
}

function addMoviesController(){
    $name = $_REQUEST['name'];
    $year = $_REQUEST['year'];
    $length = $_REQUEST['length'];
    $description = $_REQUEST['description'];
    $director = $_REQUEST['director'];
    $id_category = $_REQUEST['id_category']; 
    $image = $_REQUEST['image'];
    $trailer = $_REQUEST['trailer'];
    $min_age = $_REQUEST['min_age'];

    $ok = addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age);
    
    if ($ok != 0){
        return "Le film $name a été ajouté avec succès";
    } else {
        return false;
    }
}

function addProfileController(){
    $name = $_REQUEST['name'];
    $url = $_REQUEST['avatar'];
    $age = $_REQUEST['age'];

    if(empty($url)){
        $url = "placeholderProfile.svg";
    }

    $ok = addProfile($name, $url, $age);
    if($ok != 0){
        return "Le profile de $name a été ajouté";
    }
    else{
        return false;
    }
}

function updateProfileController() {
    $id = $_REQUEST['id'];
    $name = $_REQUEST['name'];
    $url = $_REQUEST['avatar'];
    $age = $_REQUEST['age'];

    if(empty($url)){
        $url = "placeholderProfile.svg";
    }

    $ok = updateProfile($id, $name, $url, $age);
    
    if($ok != 0){
        return "Le profil de $name a été mis à jour";
    }
    else {
        return false;
    }
}

function readProfilesController() {
    return getAllProfiles();
}




function readCategoryController(){
    $category = getAllCategories();
    return $category;
}

function readMovieDetailController(){
if(isset($_REQUEST['id'])){
        $id = $_REQUEST['id'];
        return getMovieDetail($id);
    }
    return false;
}

function addFavoriteController() {
    if (!isset($_REQUEST['id_profile']) || !isset($_REQUEST['id_movie'])) {
        return false;
    }
    
    $profile = $_REQUEST['id_profile'];
    $movie = $_REQUEST['id_movie'];
    
    $res = addFavorite($profile, $movie);
    
    if ($res > 0) {
        return "Ajouté à la liste des favoris";
    }
    return "Ce film est déjà dans vos favoris";
}

function deleteFavoriteController() {
    if (!isset($_REQUEST['id_profile']) || !isset($_REQUEST['id_movie'])) {
        return false;
    }
    
    $profile = $_REQUEST['id_profile'];
    $movie = $_REQUEST['id_movie'];
    
    $res = deleteFavorite($profile, $movie);
    
    if ($res > 0) {
        return "Retiré de la liste des favoris";
    }
    return "Erreur lors de la suppression";
}

function readFavoritesController() {
    if (!isset($_REQUEST['id_profile'])) {
        return false;
    }
    $profile = $_REQUEST['id_profile'];
    return getFavoritesByProfile($profile);
}
