
// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~bouyer17/SAE2.03-BOUYER";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};

DataProfile.requestProfiles = async function () {
    let response = await fetch(HOST_URL + "/server/script.php?todo=readprofiles");
    let data = await response.json();
    return data;
};

export { DataProfile };
