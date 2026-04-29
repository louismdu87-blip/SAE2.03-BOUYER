let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();
let templateFileProfile = await fetch("./component/NavBar/templateProfile.html");
let templateProfile = await templateFileProfile.text();

let NavBar = {};


NavBar.format = function (hAbout, hFilms, handlerSelect, data, handlerLogOut) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replaceAll("{{hFilms}}", hFilms);
  html = html.replaceAll("{{handlerSelect}}", handlerSelect);
  html = html.replaceAll("{{handlerLogOut}}", handlerLogOut);

  let htmlProfile = "";


  if (data && Array.isArray(data)) {
    for (let profileData of data) {
      let profile = templateProfile;
      profile = profile
        .replaceAll("{{id}}", profileData.id)
        .replaceAll("{{name}}", profileData.name)
        .replaceAll("{{min_age}}", profileData.min_age); 
      htmlProfile += profile;
    }
  }
  html = html.replace("{{profiles}}", htmlProfile);

  return html;
};

export { NavBar };
