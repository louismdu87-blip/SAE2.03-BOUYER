let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hFilms) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replaceAll("{{hFilms}}", hFilms);
  return html;
};

export { NavBar };
