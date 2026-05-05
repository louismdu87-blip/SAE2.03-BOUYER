let HOST_URL = "https://mmi.unilim.fr/~bouyer17/SAE2.03-BOUYER"; 

let DataFavorite = {};

DataFavorite.requestFavorite = async function(profile){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readfavorite&profile=" + profile);
    let data = await answer.json();
    return data;
}

DataFavorite.updatefavorite = async function(profile, movie){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=updatefavorite&profile=" + profile + "&movie=" + movie);
    let data = await answer.json();
    return data;
}

export { DataFavorite }

