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

DataMovie.addFavorite = async function (id_profile, id_movie) {
  let answer = await fetch("../server/script.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `todo=addFavorite&id_profile=${id_profile}&id_movie=${id_movie}`,
  });
  let data = await answer.json();
  return data;
};

DataMovie.readFavorites = async function (id_profile) {
  let answer = await fetch(
    "../server/script.php?todo=readFavorites&id_profile=" + id_profile,
  );
  let data = await answer.json();
  return data;
};

DataMovie.deleteFavorite = async function (id_profile, id_movie) {
  let answer = await fetch("../server/script.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `todo=deleteFavorite&id_profile=${id_profile}&id_movie=${id_movie}`,
  });
  let data = await answer.json();
  return data;
};



export {DataMovie};