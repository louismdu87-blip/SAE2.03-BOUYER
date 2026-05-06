let templateFile = await fetch("./component/ProfileForm/template.html");
let template = await templateFile.text();

let ProfileForm = {};

ProfileForm.format = function (profiles, handlerSubmit, handlerChange) {
    let html = template;
    html = html.replace("{{handlerSubmit}}", handlerSubmit);
    html = html.replace("{{handlerChange}}", handlerChange);

    let optionsHtml = "";
    // On sécurise : on ne boucle que si profiles est bien une liste (un array)
    if (profiles && Array.isArray(profiles)) {
        for (let p of profiles) {
            optionsHtml += `<option value="${p.id}" data-avatar="${p.avatar}" data-age="${p.min_age}">${p.name}</option>`;
        }
    
    }
    html = html.replace("{{options}}", optionsHtml);
    return html;
};

export { ProfileForm };