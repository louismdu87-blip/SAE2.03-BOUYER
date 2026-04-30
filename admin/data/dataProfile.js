let HOST_URL = "https://mmi.unilim.fr/~bouyer17/SAE2.03-BOUYER"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};



DataProfile.addprofile = async function(fdata){
    let config = {
        method: "POST",
        body: fdata
    };
    let anwser = await fetch(HOST_URL + "/server/script.php?todo=addprofile", config)
    let data = await anwser.json();
    return data;
}

export {DataProfile};

