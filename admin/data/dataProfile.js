let HOST_URL = "https://mmi.unilim.fr/~bouyer17/SAE2.03-BOUYER"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};

DataProfile.addprofile = async function(fdata){
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addprofile", config);
    return await answer.json();
};

DataProfile.readProfiles = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readprofiles"); 
    let data = await answer.json();
    return data;
};

DataProfile.updateProfile = async function(fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php", config);
    return await answer.json();
};

export { DataProfile };