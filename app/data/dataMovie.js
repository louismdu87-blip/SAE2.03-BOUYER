// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~bouyer17/SAE2.03-BOUYER"; 

let DataMovie = {};

DataMovie.requestMovies = async function(age = null){
    let url = HOST_URL + "/server/script.php?todo=readmovies";
    if (age) {
        url += "&age=" + age;
    }

    let answer = await fetch(url);
    let data = await answer.json();
    return data;
}

DataMovie.requestMovieDetails = async function(id){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovieDetail&id=" + id);
    let data = await answer.json();
    return data;
}

export {DataMovie};